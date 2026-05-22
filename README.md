# Personal Task List API

Minimal Node.js REST API built from the specification documents in `docs/`.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run the project

```bash
npm run dev
```

Or:

```bash
npm start
```

The API runs by default at `http://localhost:3000`.

## Run tests

```bash
npm test
```

## Main endpoints

- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`
- `PATCH /tasks/:id/complete`

## Project structure

- `docs/vision.md`: vision document
- `docs/user-stories.md`: user stories and acceptance criteria
- `docs/data-model.md`: task and API response model
- `docs/openapi.yml`: API contract
- `docs/implementation-plan.md`: implementation checklist
- `src/`: application source code
- `tests/`: API tests
