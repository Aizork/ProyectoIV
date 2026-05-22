const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const COMMENTS_FILE = path.join(__dirname, "data", "comments.json");

function readComments() {
  try {
    if (!fs.existsSync(COMMENTS_FILE)) {
      fs.writeFileSync(COMMENTS_FILE, "[]", "utf8");
    }
    const content = fs.readFileSync(COMMENTS_FILE, "utf8");
    return JSON.parse(content || "[]");
  } catch (error) {
    return [];
  }
}

function saveComments(comments) {
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf8");
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const admins = [
  { username: "asesor", password: "ProyectoIV2026", name: "Asesora / Asesor" },
  { username: "aldo", password: "EcoMarket2026", name: "Aldo Guerrero" }
];
const dashboardData = { stats: { products: 20, orders: 8, pending: 3, sales: 2480 }, orders: [
  { id: "ECM-1001", client: "Mariana López", total: 235, status: "Preparando" },
  { id: "ECM-1002", client: "Carlos Pérez", total: 420, status: "Pendiente" },
  { id: "ECM-1003", client: "Ana Gómez", total: 160, status: "Enviado" }
]};
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const found = admins.find(a => a.username === username && a.password === password);
  if (!found) return res.status(401).json({ ok:false, message:"Usuario o contraseña incorrectos." });
  res.json({ ok:true, message:"Acceso autorizado.", user:{ username:found.username, name:found.name }, dashboard:dashboardData });
});
app.listen(PORT, () => console.log(`EcoMarket ejecutándose en puerto ${PORT}`));
