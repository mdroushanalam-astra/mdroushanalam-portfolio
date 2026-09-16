const fs = require("fs");
const size = 360;
const rMax = 153;
const rMin = 146;
const cx = 180;
const cy = 180;

const header = "P5\n" + size + " " + size + "\n255\n";
const buf = Buffer.alloc(header.length + size * size);
buf.write(header, 0, "ascii");
let offset = header.length;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const dist = Math.hypot(x - cx, y - cy);
    let val = 0;
    if (dist <= rMin) {
      val = 255;
    } else if (dist < rMax) {
      val = Math.round(255 * (1 - (dist - rMin) / (rMax - rMin)));
    }
    buf[offset++] = val;
  }
}

fs.writeFileSync("C:/Users/Md Roushan/.gemini/antigravity/scratch/mdroushanalam-portfolio/public/mask.pgm", buf);
console.log("PGM mask created successfully");
