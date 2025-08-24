import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generatePWAIcons() {
  try {
    const logoPath = join(projectRoot, 'public/EngMtn/logo-dark.webp');
    const publicDir = join(projectRoot, 'public');
    
    // Generate different sized icons
    const sizes = [
      { size: 192, name: 'icon-192x192.png' },
      { size: 512, name: 'icon-512x512.png' },
      { size: 192, name: 'icon-maskable-192x192.png', maskable: true },
      { size: 512, name: 'icon-maskable-512x512.png', maskable: true }
    ];
    
    for (const icon of sizes) {
      console.log(`Generating ${icon.name}...`);
      
      let pipeline = sharp(logoPath)
        .resize(icon.size, icon.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        });
        
      // For maskable icons, add padding and background
      if (icon.maskable) {
        pipeline = sharp(logoPath)
          .resize(Math.round(icon.size * 0.8), Math.round(icon.size * 0.8), {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .extend({
            top: Math.round(icon.size * 0.1),
            bottom: Math.round(icon.size * 0.1),
            left: Math.round(icon.size * 0.1),
            right: Math.round(icon.size * 0.1),
            background: { r: 34, g: 197, b: 94, alpha: 1 } // Primary green color
          });
      }
      
      await pipeline
        .png()
        .toFile(join(publicDir, icon.name));
    }
    
    console.log('PWA icons generated successfully!');
    
  } catch (error) {
    console.error('Error generating PWA icons:', error);
  }
}

generatePWAIcons();
