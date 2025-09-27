async function fetchStats() {
  try {
    // Example endpoint you need to replace with real API
    const resp = await fetch("/api/bstats");  // your backend route
    const data = await resp.json();
    // Suppose data = { servers: 123, players: 4567 }
    document.getElementById("stat-servers").textContent = data.servers.toLocaleString();
    document.getElementById("stat-players").textContent = data.players.toLocaleString();
  } catch (err) {
    console.error("Failed to fetch stats:", err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchStats();
});
