const out = document.getElementById("out");
const API_BASE = "http://localhost:3000";

const show = (data) => out.textContent = JSON.stringify(data, null, 2);

document.getElementById("btnFortune").onclick = async () => {
  const res = await fetch(`${API_BASE}/api/fortune`);
  show(await res.json());
};

document.getElementById("btnSmash").onclick = async () => {
  const res = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
  show(await res.json());
};

document.querySelectorAll(".btnMood").forEach(btn => {
  btn.onclick = async () => {
    const res = await fetch(`${API_BASE}/api/vibe?mood=${btn.dataset.mood}`);
    show(await res.json());
  };
});