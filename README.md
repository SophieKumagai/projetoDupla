# 📋 Lista de Tarefas - MVC com Node.js

Aplicação web de gerenciamento de tarefas construída com **Node.js**, **Express.js**, **Handlebars**, **Sequelize** e **MySQL**, seguindo o padrão **MVC (Model-View-Controller)**.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Express.js** – Framework para criação de rotas e servidor.
- **Express-Handlebars** – Template engine para gerar HTML dinâmico.
- **Sequelize** – ORM para interação com MySQL.
- **MySQL** – Banco de dados relacional.
- **Nodemon** – Reinicialização automática do servidor durante desenvolvimento.

---

## 📂 Estrutura do Projeto

```text
/projeto-tarefas-mvc
│   index.js
│   .gitignore
├─ controllers
│   └─ taskController.js
├─ db
│   └─ conn.js
├─ models
│   └─ Task.js
├─ public
│   └─ css
│       └─ styles.css
├─ routes
│   └─ taskRoutes.js
└─ views
    ├─ main.handlebars
    ├─ all.handlebars
    ├─ create.handlebars
    └─ edit.handlebars
````

---

## ⚙️ Funcionalidades

* Listar todas as tarefas.
* Criar novas tarefas.
* Editar tarefas existentes.
* Marcar tarefas como concluídas.
* Deletar tarefas.
* Interface amigável com navegação entre páginas.

---

## 🚀 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/SophieKumagai/projetoDupla
cd projetoDupla
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie a aplicação:**

```bash
npm start
```

4. **Acesse no navegador:**

```
http://localhost:3000
```

---

## 📝 Arquitetura MVC

* **Model (`models/Task.js`)** – Define a estrutura das tarefas e comunica com o banco.
* **Controller (`controllers/taskController.js`)** – Contém toda a lógica de negócios.
* **View (`views/*.handlebars`)** – Páginas HTML dinâmicas que o usuário visualiza.
* **Routes (`routes/taskRoutes.js`)** – Define quais URLs acionam quais funções do controller.

---

## 🏆 Resultado Final

Uma aplicação funcional de lista de tarefas, permitindo criar, editar, excluir e marcar tarefas como concluídas, seguindo boas práticas de organização de código com MVC.
