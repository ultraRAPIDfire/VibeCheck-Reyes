const out = document.getElementById("out");
const API_BASE = "http://localhost:3000";

function renderOutput(data) {
  let message = data.fortune || data.joke || data.message || 
                (data.smashes ? `TOTAL SMASHES: ${data.smashes}` : null) ||
                (data.emoji ? `${data.emoji} ${data.message}` : JSON.stringify(data));

  out.innerHTML = `<span class="output-text">${message}</span>`;
}

async function callApi(path, method = "GET") {
  try {
    const res = await fetch(`${API_BASE}${path}`, { method });
    renderOutput(await res.json());
  } catch (err) {
    renderOutput({ message: "OFFLINE: Start Node Server" });
  }
}

document.getElementById("btnFortune").onclick = () => callApi("/api/fortune");
document.getElementById("btnJoke").onclick = () => callApi("/api/joke");
document.getElementById("btnSmash").onclick = () => callApi("/api/smash", "POST");
document.getElementById("btnSecret").onclick = () => callApi("/api/secret?code=411L");
document.querySelectorAll(".btnMood").forEach(btn => {
  btn.onclick = () => callApi(`/api/vibe?mood=${btn.dataset.mood}`);
});