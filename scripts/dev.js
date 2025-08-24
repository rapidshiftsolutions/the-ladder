// scripts/dev.js
// Custom development script that runs next dev with improved stability and debugging

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the directory where this script is located
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Configuration
const MAX_RESTARTS = 5;
const RESTART_DELAY = 1500; // milliseconds
const NODE_OPTIONS = '--max-old-space-size=4096 --inspect';

// State
let restartCount = 0;
let lastCrashTime = 0;

// Clear Next.js cache if it exists
const nextCacheDir = join(rootDir, '.next/cache');
if (fs.existsSync(nextCacheDir)) {
  try {
    console.log('🧹 Cleaning Next.js cache for fresh start...');
    fs.rmSync(join(nextCacheDir, 'development-server'), { recursive: true, force: true });
  } catch (err) {
    console.warn('⚠️ Unable to clean Next.js cache:', err.message);
  }
}

// Create a debug file to mark that we're in development mode - for service worker detection
try {
  fs.writeFileSync(join(rootDir, 'public', 'dev-mode.txt'), `Development mode flag - ${new Date().toISOString()}`);
  console.log('🚦 Created dev-mode marker for service worker detection');
} catch (err) {
  console.warn('⚠️ Unable to create dev-mode marker:', err.message);
}

// Function to start the Next.js dev server
function startDevServer() {
  console.log(`🚀 Starting Next.js development server (attempt ${restartCount + 1}/${MAX_RESTARTS + 1})...`);
  
  // Set environment variables
  const env = { 
    ...process.env, 
    NODE_OPTIONS,
    NEXT_TELEMETRY_DISABLED: '1',  // Disable telemetry
    NEXT_DISABLE_SOURCEMAPS: '1',  // Disable source maps in dev for better performance
  };
  
  // Spawn the Next.js dev server process
  const nextDev = spawn('next', ['dev'], {
    cwd: rootDir,
    env,
    stdio: 'inherit',
    shell: true
  });
  
  // Handle process exit
  nextDev.on('exit', (code) => {
    const now = Date.now();
    
    if (code !== 0) {
      console.log(`\n⚠️ Next.js dev server exited with code ${code}`);
      
      // If we've reached max restarts, quit
      if (restartCount >= MAX_RESTARTS) {
        console.error('❌ Maximum restart attempts reached. Please check for errors and restart manually.');
        process.exit(1);
      }
      
      // Detect crash frequency
      const timeSinceLastCrash = now - lastCrashTime;
      lastCrashTime = now;
      
      // If crashes are happening too quickly, quit
      if (timeSinceLastCrash < 10000 && restartCount > 1) {
        console.error('❌ Development server is crashing too frequently. Please check your code for errors.');
        process.exit(1);
      }
      
      // Restart the server
      restartCount++;
      console.log(`\n⏱️ Restarting in ${RESTART_DELAY/1000} seconds...`);
      setTimeout(startDevServer, RESTART_DELAY);
    } else {
      console.log('✅ Next.js dev server exited cleanly');
      // If it exited cleanly without being forced, we should restart it
      if (!nextDev.killed) {
        console.log(`\n🔄 Auto-restarting server...`);
        setTimeout(startDevServer, 500);
      } else {
        process.exit(0);
      }
    }
  });
  
  // Handle unexpected errors
  nextDev.on('error', (err) => {
    console.error('❌ Failed to start Next.js dev server:', err);
    process.exit(1);
  });
}

// Handle script termination
process.on('SIGINT', () => {
  console.log('\n👋 Development server stopped by user');
  
  // Remove the dev-mode marker when exiting
  try {
    fs.unlinkSync(join(rootDir, 'public', 'dev-mode.txt'));
  } catch (err) {
    // Ignore errors when removing the file
  }
  
  process.exit(0);
});

// Start the dev server
startDevServer();