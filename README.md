# 🗂️ Workforce Management & Scheduling System

A full-stack workforce scheduling and management platform built with **FastAPI** (Python) on the backend and **React** on the frontend, containerised with **Docker** for easy deployment.

---

## 🚀 Features

- 🔐 JWT-based user authentication (register, login, protected routes)
- 👥 Employee management — add, view, and manage staff records
- 📅 Shift scheduling — assign and track employee schedules
- 🖥️ Responsive React frontend with a clean management dashboard
- 🐳 Docker + docker-compose support for one-command setup
- 🔌 RESTful API with clear separation between frontend and backend

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript, CSS |
| Backend | Python, FastAPI, Uvicorn |
| Database | SQLite (dev) |
| Auth | JWT (JSON Web Tokens) |
| DevOps | Docker, docker-compose |

---

## ⚡ Quick Start (Docker)

> Make sure **Docker** and **docker-compose** are installed on your machine.

```bash
# Clone the repository
git clone https://github.com/Offonry1/workforce-management-system-full.git
cd workforce-management-system-full

# Build and run
docker-compose up --build
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **API Docs (Swagger):** http://localhost:8000/docs

---

## 💻 Local Development (Without Docker)

### Backend

```bash
cd backend
python -m venv .venv

# Activate virtual environment
source .venv/bin/activate        # Mac/Linux
.venv\Scripts\activate           # Windows

pip install -r requirements.txt
export DATABASE_URL=sqlite:///./dev.db
uvicorn app.main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Getting Started (First User)

Register your first admin user by sending a POST request to `/auth/register`:

```json
{
  "email": "admin@example.com",
  "name": "Admin",
  "password": "yourpassword"
}
```

Then log in via `/auth/token` (form data: `username` + `password`) to receive your JWT token.

---

## 📁 Project Structure

```
workforce-management-system-full/
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app entry point
│   │   ├── models/          # Database models
│   │   ├── routes/          # API route handlers
│   │   └── auth/            # JWT authentication logic
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   └── pages/           # Page views
│   └── package.json
└── docker-compose.yml
```

---

## 👨‍💻 Author

**Mandela Offonry**
- GitHub: [@Offonry1](https://github.com/Offonry1)
- LinkedIn: [mandelaoffonry](https://www.linkedin.com/in/mandelaoffonry)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
