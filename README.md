# Todo App - Local Setup

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

## Set up the backend

cd backend
npm install
npx prisma migrate dev --name init
npm run start:dev

Server runs at http://localhost:3000 (make sure this port is free)

## Database Setup

SQLite database will be automatically created at:
backend/prisma/dev.db

## Set up the frontend (in a new Terminal)

cd ../frontend
npm install
npm run dev

App runs at http://localhost:3001

todo-app/
├── backend/ # NestJS backend
│ ├── src/ # Source files
│ ├── prisma/ # Database schema
│ └── package.json
│
├── frontend/ # Next.js frontend
│ ├── src/ # Source files
│ ├── public/ # Static assets
│ └── package.json
│
└── README.md # This file
