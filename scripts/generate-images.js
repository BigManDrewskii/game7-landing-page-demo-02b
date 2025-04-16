import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate front card image
const frontBuffer = Buffer.from(`
<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="frontGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f3460;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00f5a0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00d9f5;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#frontGradient)" />
  <polygon points="150,100 175,138 158,175 142,175 125,138" fill="url(#logoGradient)" />
  <text x="150" y="220" font-family="Arial" font-size="36" fill="url(#logoGradient)" text-anchor="middle" font-weight="bold">GAME7</text>
  <text x="150" y="260" font-family="Arial" font-size="18" fill="rgba(255,255,255,0.8)" text-anchor="middle">INTERACTIVE</text>
  <text x="150" y="320" font-family="Arial" font-size="14" fill="rgba(255,255,255,0.6)" text-anchor="middle">FLIP CARD</text>
</svg>
`);

// Generate back card image
const backBuffer = Buffer.from(`
<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="backGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f3460;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#5f3dc4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7048e8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#backGradient)" />
  <polygon points="150,100 175,125 175,150 150,175 125,150 125,125" fill="url(#highlightGradient)" />
  <text x="150" y="220" font-family="Arial" font-size="24" fill="url(#highlightGradient)" text-anchor="middle" font-weight="bold">WEB3 GAMING</text>
  <text x="150" y="260" font-family="Arial" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">Game7 is accelerating the adoption</text>
  <text x="150" y="280" font-family="Arial" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">of blockchain-enabled game economies</text>
  <text x="150" y="300" font-family="Arial" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">through grants, education, and</text>
  <text x="150" y="320" font-family="Arial" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle">open-source software.</text>
</svg>
`);

// Save front image
sharp(frontBuffer)
  .toFormat('jpeg')
  .toFile(path.join(imagesDir, 'card-front.jpg'), (err) => {
    if (err) {
      console.error('Error creating front image:', err);
    } else {
      console.log('Front card image created successfully!');
    }
  });

// Save back image
sharp(backBuffer)
  .toFormat('jpeg')
  .toFile(path.join(imagesDir, 'card-back.jpg'), (err) => {
    if (err) {
      console.error('Error creating back image:', err);
    } else {
      console.log('Back card image created successfully!');
    }
  });
