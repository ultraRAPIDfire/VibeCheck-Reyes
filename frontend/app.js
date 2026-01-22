const out = document.getElementById("out");
const API_BASE = "http://localhost:3000";

const show = (data) => {
  out.style.opacity = 0;
  setTimeout(() => {
    out.textContent = JSON.stringify(data, null, 2);
    out.style.opacity = 1;
  }, 150);
};

async function callApi(path, method = "GET") {
  try {
    const res = await fetch(`${API_BASE}${path}`, { method });
    const data = await res.json();
    show(data);
  } catch (err) {
    show({ error: "Server Offline", message: "Ensure backend is running on port 3000" });
  }
}

document.getElementById("btnFortune").onclick = () => callApi("/api/fortune");
document.getElementById("btnJoke").onclick = () => callApi("/api/joke");
document.getElementById("btnSmash").onclick = () => callApi("/api/smash", "POST");
document.getElementById("btnSecret").onclick = () => callApi("/api/secret?code=411L");

document.querySelectorAll(".btnMood").forEach(btn => {
  btn.onclick = () => callApi(`/api/vibe?mood=${btn.dataset.mood}`);
});