# 🔐 Vaultify

> 🚀 A full-stack password manager built as a MERN stack learning project.

Vaultify is a full-stack password manager that allows users to securely store, manage, edit, and delete their website credentials. It features a modern responsive interface built with React and Tailwind CSS, while the backend is powered by Express.js and MongoDB.

---

## ✨ Features

* 🔐 Store website credentials securely
* ✏️ Edit existing passwords
* 🗑️ Delete saved passwords
* 📋 One-click copy for URL, username, and password
* 👁️ Show/Hide password while entering
* 🔒 Password masking in the password table
* 🔔 Toast notifications for user actions
* 📱 Fully responsive design
* 🗄️ MongoDB database integration
* ⚡ Fast React + Vite frontend

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Toastify
* UUID

### Backend

* Node.js
* Express.js
* MongoDB
* CORS

---

## 📂 Project Structure

```
Vaultify/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── public/
├── src/
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/vaultify.git
```

### Install Frontend

```bash
npm install
npm run dev
```

### Install Backend

```bash
cd backend
npm install
node server.js
```

> Make sure MongoDB is running locally before starting the backend server.

---

## Current Limitations

This project is a learning-focused full-stack password manager.

- Passwords are stored in plain text (no encryption yet).
- No user authentication.
- All users currently share the same password collection.
- Intended for educational and portfolio purposes only.

Future versions will include:
- User authentication
- Password encryption
- Per-user password storage
- Search and filtering
- Password generator


## 🌱 Future Improvements

* User Authentication
* Password Generator
* Search & Filter Passwords
* Categories & Tags
* Cloud Deployment
* Encryption for stored passwords

---

## 📄 License

This project is developed for learning purposes and portfolio showcase.
