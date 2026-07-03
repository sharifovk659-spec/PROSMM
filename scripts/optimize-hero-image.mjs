import sharp from "sharp";
import path from "path";

const input = process.argv[2];
const output = process.argv[3];

await sharp(input)
  .rotate()
  .resize({ height: 1200, withoutEnlargement: true })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(`Optimized: ${path.resolve(output)} (${meta.width}x${meta.height})`);
