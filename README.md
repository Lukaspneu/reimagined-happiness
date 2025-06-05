# Zenet AI Demo

This is a simple full-stack demo of **Zenet AI**, a SaaS platform for managing voice agents.

## Stack

- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Auth**: JWT

## Setup

### Prerequisites

- Node.js >= 18
- MongoDB

### Backend

```bash
cd server
cp .env.example .env
npm install
npm run seed # optional, seed database with sample data
npm run dev
```

The API will run on `http://localhost:5000`.

### Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

The app will start on `http://localhost:3000`.

## Usage

- Register or log in using the seeded user (`test@example.com` / `password`).
- Explore overview, usage analytics, agent settings, and billing pages.
- Billing cost is calculated using a mock rate of **9 CZK/minute**.

This project is meant as an MVP demo and does not include production-ready features or integrations.
