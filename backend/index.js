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

let smashes = 0;
const vibeMap = {
  happy: { emoji: "😄", message: "Shipping greatness!" },
  tired: { emoji: "🥱", message: "Hydrate. Stretch. Commit." },
  stressed: { emoji: "😵‍💫", message: "Breathe. One bug at a time." },
};

app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood] || { emoji: "🤔", message: "Try happy/tired/stressed." };
  res.json({ mood, ...vibe });
});

app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

app.get("/api/smashes", (req, res) => res.json({ smashes }));

app.get("/api/secret", (req, res) => {
  if (req.query.code === "411L") return res.json({ message: "🎉 Secret unlocked!" });
  res.status(403).json({ message: "Nope 😄" });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));