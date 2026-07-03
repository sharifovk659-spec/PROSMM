import sharp from "sharp";

const input = process.argv[2];
const output = process.argv[3];

const meta = await sharp(input).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;

const cropW = Math.floor(w * 0.28);
const cropH = Math.floor(h * 0.52);
const left = Math.floor((w - cropW) / 2);
const top = Math.floor(h * 0.1);

await sharp(input)
  .extract({ left, top, width: cropW, height: cropH })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Cropped hero center: ${output}`);
