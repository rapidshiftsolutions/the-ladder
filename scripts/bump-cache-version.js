#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to update
const FILES_TO_UPDATE = [
  'public/sw.js',
  'src/app/api/version/route.js'
];

// Generate new version based on current timestamp
const generateNewVersion = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  
  return `v${year}.${month}.${day}.${hour}${minute}${second}`;
};

// Update cache version in a file
const updateCacheVersion = (filePath, newVersion) => {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Update version patterns
    content = content.replace(
      /const CACHE_VERSION = '[^']*'/g,
      `const CACHE_VERSION = '${newVersion}'`
    );
    
    // Update build timestamp
    content = content.replace(
      /const BUILD_TIMESTAMP = [^;]*/g,
      `const BUILD_TIMESTAMP = ${Date.now()}`
    );
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated ${filePath} to version ${newVersion}`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
};

// Clear Next.js cache
const clearNextCache = () => {
  try {
    const nextCacheDir = path.join(__dirname, '..', '.next', 'cache');
    if (fs.existsSync(nextCacheDir)) {
      fs.rmSync(nextCacheDir, { recursive: true, force: true });
      console.log('✅ Cleared Next.js cache');
    }
  } catch (error) {
    console.log('⚠️  Could not clear Next.js cache:', error.message);
  }
};

// Main function
const main = () => {
  console.log('🚀 Bumping cache version...');
  
  const newVersion = generateNewVersion();
  console.log(`📦 New version: ${newVersion}`);
  
  let success = true;
  
  FILES_TO_UPDATE.forEach(filePath => {
    if (!updateCacheVersion(filePath, newVersion)) {
      success = false;
    }
  });
  
  // Clear Next.js cache to ensure fresh build
  clearNextCache();
  
  if (success) {
    console.log(`\n✅ Cache version successfully bumped to ${newVersion}`);
    console.log('💡 The service worker will auto-update and reload pages');
    console.log('⚠️  Remember to deploy these changes to production');
    console.log('\n📌 What happens next:');
    console.log('   1. Service worker will detect the new version');
    console.log('   2. It will install the new version immediately');
    console.log('   3. Pages will auto-reload to show new content');
    console.log('   4. All old caches will be cleared automatically');
  } else {
    console.log('\n❌ Some files failed to update');
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { updateCacheVersion, generateNewVersion };