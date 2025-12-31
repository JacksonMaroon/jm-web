import { mkdir, access, readFile, writeFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const publicDir = path.resolve('public');
const sourceSvg = path.join(publicDir, 'icon.svg');

async function ensurePublicDir() {
  try {
    await access(publicDir, fsConstants.R_OK | fsConstants.W_OK);
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      await mkdir(publicDir, { recursive: true });
    } else {
      throw error;
    }
  }
}

async function generatePng(size) {
  const filename = `icon-${size}.png`;
  const outputPath = path.join(publicDir, filename);

  await sharp(sourceSvg)
    .resize(size, size, { fit: 'contain' })
    .png()
    .toFile(outputPath);

  return outputPath;
}

async function generateAppleTouch() {
  const size = 180;
  const outputPath = path.join(publicDir, 'apple-touch-icon.png');

  await sharp(sourceSvg)
    .resize(size, size, { fit: 'contain', background: '#ffffff' })
    .png()
    .toFile(outputPath);

  return outputPath;
}

async function generateIco() {
  const outputPath = path.join(publicDir, 'favicon.ico');
  const pngBuffers = await Promise.all([
    readFile(path.join(publicDir, 'icon-16.png')),
    readFile(path.join(publicDir, 'icon-32.png')),
    readFile(path.join(publicDir, 'icon-48.png')),
    readFile(path.join(publicDir, 'icon-96.png')),
  ]);

  const icoBuffer = await pngToIco(pngBuffers);
  await writeFile(outputPath, icoBuffer);
}

async function main() {
  await ensurePublicDir();

  const sizes = [16, 32, 48, 96, 144];
  const pngPromises = sizes.map(generatePng);
  await Promise.all([...pngPromises, generateAppleTouch()]);

  await generateIco();
}

main().catch((error) => {
  console.error('Failed to generate favicons:', error);
  process.exitCode = 1;
});
