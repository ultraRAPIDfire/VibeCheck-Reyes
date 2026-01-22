const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const fortunes = ["Debug in 5 mins.", "Clean commits ahead.", "Vibe check passed. 😎"];
const jokes = ["Why did the dev go broke? Used all their cache.", "Code moods: works or why."];

app.get("/api/fortune", (req, res) => {
  const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: pick });
});

app.get("/api/joke", (req, res) => {
  const pick = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: pick });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));