const fs = require("fs");
const W = 1024, H = 576;
const raw = fs.readFileSync("C:/Users/Md Roushan/.gemini/antigravity/scratch/mdroushanalam-portfolio/public/bg_raw.raw");

// We create an RGBA buffer where only the bright warm yellow/amber light spots are kept, with alpha proportional to intensity
const out = Buffer.alloc(W * H * 4);

for (let i = 0; i < W * H; i++) {
  const r = raw[i * 3];
  const g = raw[i * 3 + 1];
  const b = raw[i * 3 + 2];

  // Yellow/amber glow: high red, medium-high green, lower blue
  // r > 140, g > 80, r > b + 30
  const isAmber = r > 130 && g > 75 && (r > b + 25);
  // Bright highlights in lamps: very high brightness
  const isBrightWarm = (r + g > 260) && (r > b + 15);

  if (isAmber || isBrightWarm) {
    const intensity = Math.min(255, Math.max(0, (r * 0.6 + g * 0.4) - 90));
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = Math.round(intensity);
  } else {
    out[i * 4] = 0;
    out[i * 4 + 1] = 0;
    out[i * 4 + 2] = 0;
    out[i * 4 + 3] = 0;
  }
}

fs.writeFileSync("C:/Users/Md Roushan/.gemini/antigravity/scratch/mdroushanalam-portfolio/public/lights.raw", out);
console.log("Extracted amber lighting map");
