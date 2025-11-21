# Workforce Management & Scheduling System

## Quick start (docker)

1. Ensure Docker & docker-compose are installed.
2. From repo root run:

```bash
docker-compose up --build
```

3. Frontend will be at http://localhost:5173 and backend at http://localhost:8000

## Local dev (without Docker)

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate    # or .venv\Scripts\activate on Windows
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

## Notes

- To create a first user, POST to /auth/register with JSON:
  {"email":"admin@example.com","name":"Admin","password":"secret"}
- Then get token via /auth/token (form data username & password).

