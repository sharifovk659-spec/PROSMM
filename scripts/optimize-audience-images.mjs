import sharp from "sharp";
import path from "path";

const pairs = [
  ["C:\\Users\\admin\\Downloads\\IMG_8317.jpg", "public/images/audience/audience-1.jpg"],
  ["C:\\Users\\admin\\Downloads\\IMG_8295.jpg", "public/images/audience/audience-2.jpg"],
  ["C:\\Users\\admin\\Downloads\\IMG_8290.jpg", "public/images/audience/audience-3.jpg"],
  ["C:\\Users\\admin\\Downloads\\IMG_8322.jpg", "public/images/audience/audience-4.jpg"],
];

for (const [input, output] of pairs) {
  await sharp(input)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(output);

  const meta = await sharp(output).metadata();
  const size = (await import("fs")).statSync(output).size;
  console.log(`${path.basename(output)}: ${meta.width}x${meta.height}, ${Math.round(size / 1024)}KB`);
}
