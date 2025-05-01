# 🗨️ Chat App

A full-stack chat application built with **Vite** (frontend), **Node.js/Express** (backend), and **MongoDB Atlas** for real-time messaging.

---

## 🚀 Features

- User authentication with JWT
- Real-time messaging
- MongoDB Atlas integration
- Environment-based configuration (dev/prod)
- Deployed backend (optionally via Render)

---

## 🧩 Tech Stack

- **Frontend:** Vite, React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **Deployment:** Localhost / Render

---

## 📦 Environment Variables

### 🔧 Server `.env` Example

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET_KEY=<your_secret_key>
NODE_ENV=development
VITE_RENDER_URL=http://localhost:5000
# CORS_URL=http://localhost:5000
