# VibeCheck-Reyes (CPE 411L)

A simple Node.js + Express API with a frontend UI to practice GitHub workflows.

## Endpoints
- `GET /api/fortune`: Random dev fortune
- `GET /api/joke`: Random dev joke
- `GET /api/vibe?mood=...`: Get an emoji based on mood (happy, tired, stressed)
- `POST /api/smash`: Increase the smash counter
- `GET /api/smashes`: View total smashes
- `GET /api/secret?code=411L`: Unlock a secret message

## Setup Instructions
1. Navigate to `backend/` and run `npm install`.
2. Start the server with `node index.js`.
3. Open `frontend/index.html` in your browser.