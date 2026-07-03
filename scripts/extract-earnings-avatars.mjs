import sharp from "sharp";
import path from "path";

const input = process.argv[2];
const outDir = "public/images/earnings";

const meta = await sharp(input).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;

const cols = 4;
const rows = 3;
const topOffset = Math.floor(h * 0.145);
const gridH = h - topOffset;
const cellW = w / cols;
const cellH = gridH / rows;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const index = row * cols + col + 1;
    const padX = Math.floor(cellW * 0.055);
    const padY = Math.floor(cellH * 0.05);
    const left = Math.floor(col * cellW + padX);
    const top = Math.floor(topOffset + row * cellH + padY);
    const width = Math.max(1, Math.floor(cellW - padX * 2));
    const height = Math.max(1, Math.floor(cellH - padY * 2));

    const card = await sharp(input)
      .extract({ left, top, width, height })
      .toBuffer();

    const cardMeta = await sharp(card).metadata();
    const cw = cardMeta.width ?? width;
    const ch = cardMeta.height ?? height;
    const avatarSize = Math.floor(Math.min(cw, ch) * 0.48);
    const avatarLeft = Math.floor((cw - avatarSize) / 2);
    const avatarTop = Math.floor(ch * 0.08);

    await sharp(card)
      .extract({
        left: avatarLeft,
        top: avatarTop,
        width: avatarSize,
        height: avatarSize,
      })
      .resize(200, 200)
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(path.join(outDir, `avatar-${String(index).padStart(2, "0")}.jpg`));
  }
}

console.log(`Extracted 12 avatars from ${w}x${h}`);
