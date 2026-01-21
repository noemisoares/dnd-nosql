<p align="center">
  <strong>
    <a href="./README.md">Português</a>
    &nbsp;|&nbsp;
    English
  </strong>
</p>

<h1>
  <img src="./frontend-dnd/public/dnd.png" alt="D&D Logo" width="40" style="vertical-align: middle;" />
  D&amp;D NoSQL – Frontend + Backend
</h1>

This project is a **full stack application** inspired by the **Dungeons & Dragons** universe, developed with a focus on **NoSQL data modeling**, **REST APIs**, and **frontend data consumption**.

The application includes:
- A **Node.js backend** connected to **MongoDB**
- A **React frontend** that consumes the API
- Both **deployed separately on Vercel**

---

## 🔗 Project Links

- 🌐 **Frontend (Vercel)**  
  https://frontend-dnd.vercel.app/

- 🧠 **Backend / MongoDB (Vercel)**  
  https://backend-dnd.vercel.app/

---

## 🛠 Technologies Used

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

## 🗂 Repository Structure

```text
dnd-nosql/
├── frontend-dnd/        # Frontend (React + Vite)
├── backend-dnd/         # Backend (Node.js + MongoDB)
└── src/                 # Initial phase code (local backend)
````

---

## 📁 frontend-dnd

Contains the **frontend of the application**, built with **React + Vite**.

Main features:

* API consumption using `fetch`
* Rendering of **monster and spell cards**
* Dynamic icons based on:

  * Monster type
  * Spell school
* Use of environment variables to define the API:

```env
VITE_API_URL=https://backend-dnd.vercel.app
```

---

## 📁 backend-dnd

Contains the **backend of the application**, structured as a **serverless API** on Vercel.

Features:

* Connection to **MongoDB Atlas**
* Data modeling with **Mongoose**
* REST endpoints:

  * `/api/monsters`
  * `/api/spells`
* Returns data already formatted for direct frontend usage

---

## 📁 src

This folder contains the **initial phase code of the project**, when the backend was running **locally**.

It was kept in the repository to:

* Document the development process
* Show the evolution of the project
* Preserve the original logic for:

  * MongoDB connection
  * Model creation
  * Local API testing

---

## 🚀 Running the Frontend Locally

```bash
cd frontend-dnd
npm install
npm run dev
```

Make sure the `VITE_API_URL` environment variable is properly configured.

---

## 🎯 Project Goal

* Practice **NoSQL and MongoDB**
* Build a functional **REST API**
* Work with **serverless deployment**

⚠️ This project was **clearly not created because of a challenge between friends**, especially since **there was no empadão involved**…
