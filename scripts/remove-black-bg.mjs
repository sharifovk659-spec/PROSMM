import sharp from "sharp";
import path from "path";

const input = process.argv[2];
const output = process.argv[3];
const threshold = Number(process.argv[4] ?? 42);

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);
const visited = new Uint8Array(width * height);
const queue = [];

function isBackground(idx) {
  const base = idx * channels;
  const r = pixels[base];
  const g = pixels[base + 1];
  const b = pixels[base + 2];
  return r <= threshold && g <= threshold && b <= threshold;
}

function seed(idx) {
  if (!visited[idx] && isBackground(idx)) {
    visited[idx] = 1;
    queue.push(idx);
  }
}

for (let x = 0; x < width; x++) {
  seed(x);
  seed((height - 1) * width + x);
}
for (let y = 0; y < height; y++) {
  seed(y * width);
  seed(y * width + (width - 1));
}

while (queue.length) {
  const idx = queue.pop();
  const x = idx % width;
  const y = (idx - x) / width;

  for (const [nx, ny] of [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const nidx = ny * width + nx;
    if (!visited[nidx] && isBackground(nidx)) {
      visited[nidx] = 1;
      queue.push(nidx);
    }
  }
}

for (let idx = 0; idx < width * height; idx++) {
  if (visited[idx]) {
    pixels[idx * channels + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Saved transparent PNG: ${path.resolve(output)} (${width}x${height})`);
