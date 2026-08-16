# React + FastAPI Fullstack Demo

This project demonstrates a complete React frontend with routing, nested & dynamic routes, search params, API integration, and a Python (FastAPI) backend.

## Structure

- `backend/` - FastAPI backend
- `frontend/` - React (Vite) frontend

## Run backend

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r backend/requirements.txt
uvicorn backend.app:app --reload --port 8000
```

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend expects backend at `http://localhost:8000`.
