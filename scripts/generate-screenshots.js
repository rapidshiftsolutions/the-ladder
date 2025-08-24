import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generateScreenshots() {
  try {
    const logoPath = join(projectRoot, 'public/EngMtn/logo-dark.webp');
    const screenshotsDir = join(projectRoot, 'public/screenshots');
    
    // Create a mock desktop screenshot (1280x720)
    await sharp({
      create: {
        width: 1280,
        height: 720,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
    .composite([
      {
        input: logoPath,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(join(screenshotsDir, 'desktop-screenshot.png'));
    
    // Create a mock mobile screenshot (390x844)
    await sharp({
      create: {
        width: 390,
        height: 844,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
    .composite([
      {
        input: logoPath,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(join(screenshotsDir, 'mobile-screenshot.png'));
    
    console.log('Screenshots generated successfully!');
    
  } catch (error) {
    console.error('Error generating screenshots:', error);
  }
}

generateScreenshots();
