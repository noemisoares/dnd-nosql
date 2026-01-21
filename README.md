<p align="center">
  <strong>
    Português
    &nbsp;|&nbsp;
    <a href="./README.en.md">English</a>
  </strong>
</p>

<h1>
  <img src="./frontend-dnd/public/dnd.png" alt="D&D Logo" width="40" style="vertical-align: middle;" />
  D&amp;D NoSQL – Frontend + Backend
</h1>

Este projeto é uma aplicação **full stack** inspirada no universo de **Dungeons & Dragons**, desenvolvida com foco em **modelagem de dados NoSQL**, **API REST** e **consumo de dados no frontend**.

A aplicação possui:
- Um **backend** em Node.js conectado ao **MongoDB**
- Um **frontend** em React que consome essa API
- Ambos **deployados separadamente no Vercel**

---

## 🔗 Links do Projeto

- 🌐 **Frontend (Vercel)**  
  https://frontend-dnd.vercel.app/

- 🧠 **Backend / MongoDB (Vercel)**  
  https://backend-dnd.vercel.app/

---

## 🛠 Tecnologias Utilizadas

### Backend

* Node.js
* MongoDB
* Mongoose
* Vercel (Serverless Functions)

### Frontend

* React
* Vite
* JavaScript
* CSS
* Fetch API

---

## 🗂 Estrutura do Repositório

```text
dnd-nosql/
├── frontend-dnd/        # Frontend (React + Vite)
├── backend-dnd/         # Backend (Node.js + MongoDB)
└── src/                 # Código da fase inicial (backend local)
````

---

## 📁 frontend-dnd

Contém o **frontend da aplicação**, desenvolvido com **React + Vite**.

Principais características:

* Consumo da API via `fetch`
* Renderização de **cards de monstros e feitiços**
* Ícones dinâmicos baseados:

  * No tipo do monstro
  * Na escola da magia
* Uso de variável de ambiente para definir a API:

```env
VITE_API_URL=https://backend-dnd.vercel.app
```

---

## 📁 backend-dnd

Contém o **backend da aplicação**, estruturado como uma **API serverless** no Vercel.

Funcionalidades:

* Conexão com **MongoDB Atlas**
* Modelagem de dados com **Mongoose**
* Endpoints REST:

  * `/api/monsters`
  * `/api/spells`
* Retorno de dados já filtrados para uso direto no frontend

---

## 📁 src

Esta pasta contém o **código da fase inicial do projeto**, quando o backend era executado **localmente**.

Ela foi mantida no repositório para:

* Documentar o processo de desenvolvimento
* Mostrar a evolução do projeto
* Preservar a lógica original de:

  * Conexão com o MongoDB
  * Criação dos modelos
  * Testes locais da API

---

## 🚀 Como Rodar o Frontend Localmente

```bash
cd frontend-dnd
npm install
npm run dev
```

Certifique-se de que a variável `VITE_API_URL` esteja configurada corretamente.

---

## 🎯 Objetivo do Projeto

* Praticar **NoSQL e MongoDB**
* Criar uma **API REST funcional**
* Trabalhar com **deploy serverless**

⚠️ Este projeto **claramente não foi criado por conta de um desafio entre amigos**, até porque **não teve empadão**...


