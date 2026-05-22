const express = require("express");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const COMMENTS_FILE = path.join(__dirname, "data", "comments.json");

function ensureDataFile() {
  const dataDir = path.join(__dirname, "data");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  if (!fs.existsSync(COMMENTS_FILE)) {
    fs.writeFileSync(COMMENTS_FILE, "[]", "utf8");
  }
}

function readComments() {
  try {
    ensureDataFile();
    const content = fs.readFileSync(COMMENTS_FILE, "utf8");
    return JSON.parse(content || "[]");
  } catch (error) {
    console.error("Error leyendo comentarios:", error);
    return [];
  }
}

function saveComments(comments) {
  try {
    ensureDataFile();
    fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf8");
  } catch (error) {
    console.error("Error guardando comentarios:", error);
  }
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const admins = [
  { username: "asesor", password: "ProyectoIV2026", name: "Asesora / Asesor" },
  { username: "aldo", password: "EcoMarket2026", name: "Aldo Guerrero" }
];

const dashboardData = {
  stats: {
    products: 20,
    orders: 8,
    pending: 3,
    sales: 2480
  },
  orders: [
    { id: "ECM-1001", client: "Mariana López", total: 235, status: "Preparando" },
    { id: "ECM-1002", client: "Carlos Pérez", total: 420, status: "Pendiente" },
    { id: "ECM-1003", client: "Ana Gómez", total: 160, status: "Enviado" }
  ]
};

// Login administrador
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const found = admins.find(
    (a) => a.username === username && a.password === password
  );

  if (!found) {
    return res.status(401).json({
      ok: false,
      message: "Usuario o contraseña incorrectos."
    });
  }

  res.json({
    ok: true,
    message: "Acceso autorizado.",
    user: {
      username: found.username,
      name: found.name
    },
    dashboard: dashboardData
  });
});

// Obtener comentarios del foro
app.get("/api/comments", (req, res) => {
  const comments = readComments();
  res.json(comments);
});

// Guardar comentario del foro
app.post("/api/comments", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      ok: false,
      message: "El nombre y el comentario son obligatorios."
    });
  }

  const comments = readComments();

  const newComment = {
    id: Date.now(),
    name: String(name).trim().substring(0, 50),
    message: String(message).trim().substring(0, 500),
    date: new Date().toLocaleString("es-MX", {
      dateStyle: "medium",
      timeStyle: "short"
    }),
    reply: "",
    replyDate: ""
  };

  comments.unshift(newComment);
  saveComments(comments);

  res.status(201).json({
    ok: true,
    comment: newComment
  });
});

// Responder comentario desde admin
app.post("/api/comments/:id/reply", (req, res) => {
  const { reply } = req.body;
  const commentId = Number(req.params.id);

  if (!reply) {
    return res.status(400).json({
      ok: false,
      message: "La respuesta no puede estar vacía."
    });
  }

  const comments = readComments();
  const comment = comments.find((item) => Number(item.id) === commentId);

  if (!comment) {
    return res.status(404).json({
      ok: false,
      message: "Comentario no encontrado."
    });
  }

  comment.reply = String(reply).trim().substring(0, 500);
  comment.replyDate = new Date().toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  saveComments(comments);

  res.json({
    ok: true,
    message: "Respuesta guardada correctamente.",
    comment
  });
});

// Chat con IA limitado a EcoMarket
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        ok: false,
        message: "El mensaje es obligatorio."
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        ok: false,
        message: "No está configurada la API Key de OpenAI."
      });
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Eres el asistente virtual de EcoMarket, una tienda web escolar de productos ecológicos.

Tu trabajo es responder únicamente dudas relacionadas con EcoMarket y su página web.

Información del sitio:
- EcoMarket es una tienda web de productos ecológicos y sustentables.
- La página principal es la tienda.
- El sitio tiene secciones de Tienda, Nosotros, Misión, Visión, Calidad, Contacto y Admin.
- En la tienda hay productos como manzanas orgánicas, miel artesanal, café de grano, matcha, granola, pan integral, avena, jugo verde, jabón artesanal, cepillo de bambú, shampoo sólido, aceite de coco, bolsa ecológica, vela de soya, plantas aromáticas, leche de almendras, crema de cacahuate, tomates cherry, bolsa de tela y kit zero waste.
- La sección Contacto incluye formulario, ubicación, redes sociales, preguntas frecuentes y foro.
- El foro permite publicar comentarios o preguntas.
- El administrador puede responder comentarios del foro desde el panel Admin.
- El sitio está publicado en Railway.

Reglas:
- Responde breve, amable y claro.
- Si preguntan algo fuera de EcoMarket, responde: "Solo puedo ayudarte con dudas sobre EcoMarket, sus productos, contacto, foro o funcionamiento del sitio."
- No inventes pagos reales, envíos reales ni políticas que no estén en el sitio.
- Si el usuario necesita atención humana, indícale que use la página de Contacto o WhatsApp.
          `
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 180,
      temperature: 0.4
    });

    res.json({
      ok: true,
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    console.error("Error en /api/chat:", error);

    res.status(500).json({
      ok: false,
      message: "No se pudo obtener respuesta del asistente."
    });
  }
});

app.listen(PORT, () => {
  console.log(`EcoMarket ejecutándose en puerto ${PORT}`);
});
