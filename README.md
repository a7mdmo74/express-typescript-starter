# Express Typescript Starter

A minimal TypeScript-ready Express starter kit for building APIs without a database opinion.

## Features

- TypeScript + Express
- API routing structure
- Environment config via `.env`
- Request logging and error handling middleware
- Health check endpoint

## Getting started

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file (optional)

```bash
PORT=3000
NODE_ENV=development
```

3. Run in development

```bash
npm run dev
```

4. Build and start

```bash
npm run build
npm start
```

## Endpoints

- `GET /` — basic server health response
- `GET /api/health` — API health check

## Project structure

- `src/app.ts` — Express app setup
- `src/server.ts` — server bootstrap
- `src/routes` — application routes
- `src/middleware` — reusable middleware
- `src/config` — configuration loader
