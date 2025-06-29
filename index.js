console.log("💀 Evil DOM Scanner Injected");

// Flag scanner
setTimeout(() => {
  [...document.querySelectorAll("*")].forEach(e => {
    if (e.innerText?.includes("GPCSSI25")) {
      console.log("🎯 FLAG FOUND:", e.innerText);
    }
  });
}, 1000);

// Optionally re-run original legit features
// initializeDominionFeatures(); // Only if needed
