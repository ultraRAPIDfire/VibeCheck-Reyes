const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const fortunes = [
  "You will debug it in 5 minutes... after 55 minutes of panic.",
  "Your next commit will be clean and meaningful.",
  "A bug will disappear when you add one console.log().",
  "The documentation you need is in the first search result.",
  "A senior dev will compliment your variable naming today.",
  "You passed the vibe check. Proceed with confidence. 😎"
];

const jokes = [
  "Why did the developer go broke? Because they used up all their cache.",
  "My code has two moods: works or why-is-this-happening.",
  "I told my program a joke... it just threw an exception.",
  "Hardware: The part of a computer that you can kick.",
  "A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'"
];

const vibeMap = {
  happy: { emoji: "🚀", message: "Momentum is high! Ship it now!" },
  tired: { emoji: "🔋", message: "Low battery. Take a 15-minute power nap." },
  stressed: { emoji: "🧘", message: "Breathe. The bug is small, you are big." },
};

let smashes = 0;

app.get("/api/fortune", (req, res) => {
  const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: pick });
});

app.get("/api/joke", (req, res) => {
  const pick = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: pick });
});

app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood] || { emoji: "🤔", message: "Vibe status unknown." };
  res.json({ mood, ...vibe });
});

app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

app.get("/api/smashes", (req, res) => res.json({ smashes }));

app.get("/api/secret", (req, res) => {
  if (req.query.code === "411L") return res.json({ message: "🎉 NEON SECRET: Luck +100!" });
  res.status(403).json({ message: "Access Denied." });
});

app.listen(PORT, () => console.log(`Neon API running at http://localhost:${PORT}`));