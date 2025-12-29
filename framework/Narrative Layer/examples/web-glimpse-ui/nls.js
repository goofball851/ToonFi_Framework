// NLS: Continuous Motion via attention + time drift.
// No play buttons. No reset. No "select a mode". Only noticing.

const observe = document.getElementById("observe");
const glimpse = document.getElementById("glimpse");
const hotspots = Array.from(document.querySelectorAll(".hotspot"));

// Revisit ≠ repeat: seed drift from localStorage.
const key = "nls_drift_seed_v1";
let seed = Number(localStorage.getItem(key));
if (!seed || Number.isNaN(seed)) {
  seed = Math.floor(Math.random() * 1_000_000);
  localStorage.setItem(key, String(seed));
}

let focusZone = "ambient";
let t0 = performance.now();

function note(text) {
  observe.textContent = text;
}

hotspots.forEach(h => {
  h.addEventListener("mouseenter", () => {
    focusZone = h.dataset.zone;
    note(observationFor(focusZone));
    glimpse.dataset.focus = focusZone; // drives CSS changes
  });
  h.addEventListener("mouseleave", () => {
    focusZone = "ambient";
    note("You looked away. It keeps going.");
    glimpse.dataset.focus = "ambient";
  });
});

// Click = perspective motion (reframe), not "play".
glimpse.addEventListener("click", (e) => {
  // Toggle a subtle “reframe” state
  const current = glimpse.dataset.reframe === "1";
  glimpse.dataset.reframe = current ? "0" : "1";
  note(current ? "Back to the surface." : "Closer now. Still not the whole story.");
});

function observationFor(zone) {
  switch (zone) {
    case "left-eye": return "This part becomes aware first.";
    case "right-eye": return "This side notices you last.";
    case "float-1": return "It drifts when ignored. It doesn’t like being centered.";
    default: return "You caught it mid-existence.";
  }
}

function loop(now) {
  const t = (now - t0) / 1000;

  // Time drift: subtle continuous motion always running.
  // Motion is "state continuity" not a show.
  const driftX = Math.sin(t * 0.25 + seed) * 0.6;
  const driftY = Math.cos(t * 0.18 + seed) * 0.6;
  glimpse.style.setProperty("--drift-x", `${driftX}px`);
  glimpse.style.setProperty("--drift-y", `${driftY}px`);

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
