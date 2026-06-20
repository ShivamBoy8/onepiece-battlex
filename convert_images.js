// convert_images.js
// Run with: node convert_images.js
// Converts all PNGs over 300KB in src/assets to WebP at 80% quality

import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = "./src/assets"; // adjust if your power card images live elsewhere

function findPngs(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(findPngs(fullPath));
    } else if (item.name.toLowerCase().endsWith(".png")) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convert() {
  const pngs = findPngs(ASSETS_DIR);
  console.log(`Found ${pngs.length} PNG files`);

  for (const filePath of pngs) {
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;

    if (sizeKB < 300) {
      console.log(`Skipping (already small): ${filePath} (${sizeKB.toFixed(0)}KB)`);
      continue;
    }

    const outputPath = filePath.replace(/\.png$/i, ".webp");

    await sharp(filePath)
      .resize({ width: 1000, withoutEnlargement: true }) // cap max width — card images don't need to be huge
      .webp({ quality: 80 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeKB = newStats.size / 1024;

    console.log(
      `${filePath} : ${sizeKB.toFixed(0)}KB -> ${outputPath} : ${newSizeKB.toFixed(0)}KB (${(100 - (newSizeKB / sizeKB) * 100).toFixed(0)}% smaller)`
    );
  }

  console.log("\nDone. Now update your imports from .png to .webp manually.");
}

convert();