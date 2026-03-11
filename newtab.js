const REMOTE_QUOTES_URL = "https://weddlemedia.github.io/per-my-last-tab/quotes.json";
const CACHE_KEY = "pmlt-remote-quotes";
const FETCH_TIMEOUT_MS = 3000;

async function fetchRemoteQuotes() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(REMOTE_QUOTES_URL, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      await chrome.storage.local.set({ [CACHE_KEY]: data });
      return data;
    }
    return [];
  } catch {
    clearTimeout(timeout);
    try {
      const cached = await chrome.storage.local.get(CACHE_KEY);
      return cached[CACHE_KEY] || [];
    } catch {
      return [];
    }
  }
}

function mergeQuotes(local, remote) {
  const seen = new Set(local.map((q) => q.text));
  const merged = [...local];
  for (const q of remote) {
    if (q.text && !seen.has(q.text)) {
      merged.push(q);
      seen.add(q.text);
    }
  }
  return merged;
}

document.addEventListener("DOMContentLoaded", async () => {

  // ---- Gradient background ----

  const gradients = [
    ["#2c3e50", "#4ca1af"],
    ["#4b3832", "#be9b7b"],
    ["#2c3e50", "#bdc3c7"],
    ["#1a2a6c", "#b21f1f", "#fdbb2d"],
    ["#0f2027", "#203a43", "#2c5364"],
    ["#3a1c71", "#d76d77", "#ffaf7b"],
    ["#355c7d", "#6c5b7b", "#c06c84"],
    ["#141e30", "#243b55"],
    ["#232526", "#414345"],
    ["#4e4376", "#2b5876"],
    ["#485563", "#29323c"],
    ["#2b5876", "#4e4376"],
    ["#0b486b", "#f56217"],
    ["#3e5151", "#decba4"],
    ["#614385", "#516395"],
  ];

  const colors = gradients[Math.floor(Math.random() * gradients.length)];
  const direction = Math.floor(Math.random() * 360);
  document.body.style.background =
    `linear-gradient(${direction}deg, ${colors.join(", ")})`;
  document.body.style.backgroundSize = "300% 300%";

  // ---- Quote (local + remote merged) ----

  const remoteQuotes = await fetchRemoteQuotes();
  const allQuotes = mergeQuotes(quotes, remoteQuotes);
  const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  document.getElementById("quote-text").textContent = quote.text;

  // ---- Clock + Date ----

  const clockEl = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clockEl.textContent = `${hours}:${minutes} ${period}`;

    dateEl.textContent =
      `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // ---- Search ----

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim();
    if (!query) return;

    if (/^(https?:\/\/|[\w-]+\.\w{2,})/.test(query)) {
      const url = query.startsWith("http") ? query : `https://${query}`;
      window.location.href = url;
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  });

  // ---- Top Sites ----

  const MAX_SITES = 10;

  function faviconUrl(url) {
    try {
      const host = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${host}&sz=32`;
    } catch {
      return "";
    }
  }

  if (chrome && chrome.topSites) {
    chrome.topSites.get().then((sites) => {
      const container = document.getElementById("top-sites");
      sites.slice(0, MAX_SITES).forEach((site) => {
        const a = document.createElement("a");
        a.className = "top-site";
        a.href = site.url;
        a.title = site.title || site.url;

        const icon = document.createElement("img");
        icon.src = faviconUrl(site.url);
        icon.alt = "";
        icon.loading = "lazy";
        a.appendChild(icon);

        container.appendChild(a);
      });
    });
  }
});
