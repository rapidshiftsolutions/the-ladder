const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const patchFile = path.join(projectRoot, 'node_modules/next/dist/build/generate-build-id.js');

console.log('Patching Next.js build file...');

if (fs.existsSync(patchFile)) {
  let content = fs.readFileSync(patchFile, 'utf8');

  // Check if the patch is already applied
  if (content.includes('if (typeof generate === "function")')) {
    console.log('✓ generate-build-id.js already patched');
    process.exit(0);
  }

  // Apply the patch - handle the case where generate might not be a function
  const originalCode = 'let buildId = await generate();';
  const patchedCode = `let buildId;
    if (typeof generate === "function") {
        buildId = await generate();
    } else {
        buildId = fallback();
    }`;

  if (content.includes(originalCode)) {
    content = content.replace(originalCode, patchedCode);
    fs.writeFileSync(patchFile, content, 'utf8');
    console.log('✅ Patched next/dist/build/generate-build-id.js');
  } else {
    console.log('⚠️ Could not find code to patch - Next.js version may have changed');
  }
} else {
  console.log('⚠️ generate-build-id.js not found - skipping patch');
}
