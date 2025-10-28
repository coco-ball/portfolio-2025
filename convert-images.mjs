import fg from "fast-glob";
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const ROOT = "public/images/projects";

const SIZES = [800, 1600];
const GENERATE_AVIF = false;

function outPath(p, width, ext) {
  const dir = path.dirname(p);
  const base = path.basename(p, path.extname(p));
  return path.join(dir, `${base}-${width}.${ext}`);
}

const files = await fg(`${ROOT}/**/*.{png,jpg,jpeg}`, { dot: false });

for (const file of files) {
  const buf = await fs.readFile(file);
  const img = sharp(buf, { limitInputPixels: false });
  const meta = await img.metadata();

  // 1️⃣ 800 / 1600 webp 생성
  for (const w of SIZES) {
    if (meta.width && w > meta.width) continue; // 업스케일 방지
    const webpOut = outPath(file, w, "webp");
    await img.resize({ width: w }).webp({ quality: 78 }).toFile(webpOut);
    console.log("webp:", webpOut);
  }

  // 2️⃣ "thumbnail"일 때만 동일 이름 webp 생성
  const basename = path.basename(file, path.extname(file)).toLowerCase();
  if (basename === "thumbnail") {
    const sameWebp = path.join(
      path.dirname(file),
      `${path.basename(file, path.extname(file))}.webp`
    );
    await sharp(buf).webp({ quality: 78 }).toFile(sameWebp);
    console.log("same-webp:", sameWebp);
  }
}
