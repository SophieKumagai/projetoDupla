const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const conn = require("./db/conn");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
Handlebars.registerHelper('eq', function(date, format) {
    eq: (a, b) => a === b
});
Handlebars.registerHelper("formatDate", function (dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
});
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/tasks", taskRoutes);
app.get("/", (req, res) => res.redirect("/tasks"));

conn
.sync()
.then(() => {
    app.listen(PORT, () =>
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`)
    );
})
.catch((err) =>
    console.log("❌ Erro ao conectar com o banco de dados:", err)
);
