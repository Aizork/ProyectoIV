const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
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
