import sharp from "sharp";

const input = process.argv[2];
const output = process.argv[3];

await sharp(input)
  .rotate()
  .resize({ width: 640, withoutEnlargement: true })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(output);

console.log(`Saved ${output}`);
