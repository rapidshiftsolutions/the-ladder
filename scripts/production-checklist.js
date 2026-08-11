#!/usr/bin/env node
/**
 * Production Checklist Script
 * 
 * Comprehensive validation checks for The Ladder website before deployment.
 * Run this script to ensure all critical components are properly configured.
 * 
 * Usage: node scripts/production-checklist.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  requiredEnvVars: [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET',
  ],
  optionalEnvVars: [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_GOOGLE_VERIFICATION',
    'NEXT_PUBLIC_SANITY_TOKEN',
    'SANITY_API_TOKEN',
  ],
  criticalAssets: [
    'public/TheLadder/logos/The Ladder - Logo.png',
    'public/TheLadder/photos/Jamil.jpg',
    'public/icon-192x192.png',
    'public/icon-512x512.png',
    'public/icon-maskable-192x192.png',
    'public/icon-maskable-512x512.png',
    'public/apple-touch-icon.png',
    'public/site.webmanifest',
    'public/robots.txt',
    'public/sw.js',
    'public/forms/assistance-application.html',
  ],
  criticalPages: [
    '/',
    '/about',
    '/contact',
    '/donate',
    '/monthly-giving',
    '/get-help',
    '/guest-portal',
    '/how-we-help',
    '/success-stories',
    '/leadership-team',
    '/events',
    '/partners',
  ],
  maxBundleSize: 500 * 1024, // 500KB
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

// Results tracking
const results = {
  passed: [],
  failed: [],
  warnings: [],
};

// Utility functions
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection(title) {
  console.log();
  log(`${'='.repeat(60)}`, colors.cyan);
  log(`  ${title}`, colors.bold);
  log(`${'='.repeat(60)}`, colors.cyan);
}

function pass(check) {
  results.passed.push(check);
  log(`  ✓ ${check}`, colors.green);
}

function fail(check, reason) {
  results.failed.push({ check, reason });
  log(`  ✗ ${check}`, colors.red);
  log(`    → ${reason}`, colors.red);
}

function warn(check, reason) {
  results.warnings.push({ check, reason });
  log(`  ⚠ ${check}`, colors.yellow);
  log(`    → ${reason}`, colors.yellow);
}

// Check functions
function checkEnvironmentVariables() {
  logSection('Environment Variables');
  
  // Required variables
  for (const envVar of CONFIG.requiredEnvVars) {
    if (process.env[envVar]) {
      pass(`Required: ${envVar} is set`);
    } else {
      fail(`Required: ${envVar} is missing`, 'This variable is required for production');
    }
  }
  
  // Optional variables
  for (const envVar of CONFIG.optionalEnvVars) {
    if (process.env[envVar]) {
      pass(`Optional: ${envVar} is set`);
    } else {
      warn(`Optional: ${envVar} is not set`, 'Consider setting this for full functionality');
    }
  }
}

function checkCriticalAssets() {
  logSection('Critical Assets');
  
  for (const asset of CONFIG.criticalAssets) {
    const assetPath = path.join(process.cwd(), asset);
    if (fs.existsSync(assetPath)) {
      const stats = fs.statSync(assetPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      pass(`${asset} exists (${sizeKB} KB)`);
    } else {
      fail(`${asset} is missing`, 'This file is required for production');
    }
  }
}

function checkManifest() {
  logSection('Web App Manifest');
  
  const manifestPath = path.join(process.cwd(), 'public/site.webmanifest');
  
  if (!fs.existsSync(manifestPath)) {
    fail('site.webmanifest exists', 'Manifest file not found');
    return;
  }
  
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    // Check required fields
    const requiredFields = ['name', 'short_name', 'start_url', 'display', 'icons'];
    for (const field of requiredFields) {
      if (manifest[field]) {
        pass(`Manifest has ${field}`);
      } else {
        fail(`Manifest has ${field}`, `Missing required field: ${field}`);
      }
    }
    
    // Check for maskable icons
    if (manifest.icons && Array.isArray(manifest.icons)) {
      const hasMaskable = manifest.icons.some(icon => 
        icon.purpose && icon.purpose.includes('maskable')
      );
      if (hasMaskable) {
        pass('Manifest has maskable icon');
      } else {
        fail('Manifest has maskable icon', 'No icon with purpose="maskable" found');
      }
      
      // Check for 512x512 icon
      const has512 = manifest.icons.some(icon => icon.sizes === '512x512');
      if (has512) {
        pass('Manifest has 512x512 icon');
      } else {
        fail('Manifest has 512x512 icon', 'PWA requires 512x512 icon');
      }
    }
  } catch (error) {
    fail('Manifest is valid JSON', error.message);
  }
}

function checkBuildOutput() {
  logSection('Build Output');
  
  const nextDir = path.join(process.cwd(), '.next');
  
  if (!fs.existsSync(nextDir)) {
    fail('Build exists', 'Run "npm run build" first');
    return;
  }
  
  pass('Build directory exists');
  
  // Check for static assets
  const staticDir = path.join(nextDir, 'static');
  if (fs.existsSync(staticDir)) {
    pass('Static assets directory exists');
    
    // Check media (fonts)
    const mediaDir = path.join(staticDir, 'media');
    if (fs.existsSync(mediaDir)) {
      const fontFiles = fs.readdirSync(mediaDir).filter(f => f.endsWith('.woff2'));
      if (fontFiles.length > 0) {
        pass(`Self-hosted fonts found (${fontFiles.length} files)`);
      } else {
        warn('No self-hosted fonts found', 'Fonts may be loading from external sources');
      }
    }
    
    // Check JS bundle sizes
    const chunksDir = path.join(staticDir, 'chunks');
    if (fs.existsSync(chunksDir)) {
      const jsFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
      let totalSize = 0;
      let largestFile = { name: '', size: 0 };
      
      for (const file of jsFiles) {
        const filePath = path.join(chunksDir, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        if (stats.size > largestFile.size) {
          largestFile = { name: file, size: stats.size };
        }
      }
      
      const totalKB = (totalSize / 1024).toFixed(2);
      const largestKB = (largestFile.size / 1024).toFixed(2);
      
      if (totalSize < CONFIG.maxBundleSize) {
        pass(`Total JS bundle size: ${totalKB} KB`);
      } else {
        warn(`Total JS bundle size: ${totalKB} KB`, `Consider code splitting (target: <${CONFIG.maxBundleSize / 1024} KB)`);
      }
      
      log(`    Largest chunk: ${largestFile.name} (${largestKB} KB)`, colors.blue);
    }
  }
}

function checkServiceWorker() {
  logSection('Service Worker');
  
  const swPath = path.join(process.cwd(), 'public/sw.js');
  
  if (!fs.existsSync(swPath)) {
    fail('Service worker exists', 'public/sw.js not found');
    return;
  }
  
  const swContent = fs.readFileSync(swPath, 'utf8');
  
  pass('Service worker file exists');
  
  // Check for essential SW features
  if (swContent.includes('install')) {
    pass('Service worker has install handler');
  } else {
    warn('Service worker install handler', 'Missing install event listener');
  }
  
  if (swContent.includes('fetch')) {
    pass('Service worker has fetch handler');
  } else {
    warn('Service worker fetch handler', 'Missing fetch event listener');
  }
  
  if (swContent.includes('activate')) {
    pass('Service worker has activate handler');
  } else {
    warn('Service worker activate handler', 'Missing activate event listener');
  }
}

function checkRobotsTxt() {
  logSection('SEO Files');
  
  const robotsPath = path.join(process.cwd(), 'public/robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    fail('robots.txt exists', 'public/robots.txt not found');
    return;
  }
  
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  pass('robots.txt exists');
  
  if (robotsContent.includes('Sitemap:')) {
    pass('robots.txt references sitemap');
  } else {
    warn('robots.txt sitemap reference', 'Consider adding Sitemap: directive');
  }
  
  // Check for sitemap
  const sitemapPath = path.join(process.cwd(), 'public/sitemap-fallback.xml');
  if (fs.existsSync(sitemapPath)) {
    pass('Sitemap fallback exists');
  } else {
    warn('Sitemap fallback', 'Consider adding a static sitemap fallback');
  }
}

function checkImageOptimization() {
  logSection('Image Optimization');
  
  const photosDir = path.join(process.cwd(), 'public/TheLadder/photos');
  
  if (!fs.existsSync(photosDir)) {
    fail('Photos directory exists', 'public/TheLadder/photos not found');
    return;
  }
  
  const images = fs.readdirSync(photosDir).filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );
  
  pass(`Found ${images.length} images in photos directory`);
  
  // Check image sizes
  const largeImages = [];
  for (const image of images) {
    const imagePath = path.join(photosDir, image);
    const stats = fs.statSync(imagePath);
    const sizeKB = stats.size / 1024;
    
    if (sizeKB > 500) {
      largeImages.push({ name: image, size: sizeKB.toFixed(2) });
    }
  }
  
  if (largeImages.length === 0) {
    pass('All images under 500KB');
  } else {
    warn(`${largeImages.length} images over 500KB`, 'Consider optimizing:');
    for (const img of largeImages.slice(0, 3)) {
      log(`      - ${img.name} (${img.size} KB)`, colors.yellow);
    }
  }
}

function checkSecurityHeaders() {
  logSection('Security Configuration');
  
  // Check for security-related files
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  
  if (fs.existsSync(nextConfigPath)) {
    const configContent = fs.readFileSync(nextConfigPath, 'utf8');
    
    if (configContent.includes('headers')) {
      pass('next.config.js has headers configuration');
    } else {
      warn('Security headers', 'Consider adding security headers in next.config.js');
    }
  }
  
  // Check for HTTPS in site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  if (siteUrl.startsWith('https://')) {
    pass('Site URL uses HTTPS');
  } else if (siteUrl) {
    fail('Site URL uses HTTPS', `Current URL: ${siteUrl}`);
  } else {
    warn('Site URL not configured', 'Set NEXT_PUBLIC_SITE_URL environment variable');
  }
}

async function checkPageResponses() {
  logSection('Page Response Checks');
  
  if (!CONFIG.baseUrl.includes('localhost')) {
    log('  Skipping HTTP checks (not localhost)', colors.blue);
    log('  Run the dev server to test page responses', colors.blue);
    return;
  }
  
  log('  Testing pages against local server...', colors.blue);
  
  for (const page of CONFIG.criticalPages.slice(0, 5)) {
    try {
      const url = `${CONFIG.baseUrl}${page}`;
      const response = await fetchWithTimeout(url, 5000);
      
      if (response.statusCode === 200) {
        pass(`${page} returns 200`);
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        pass(`${page} redirects (${response.statusCode})`);
      } else {
        fail(`${page} returns ${response.statusCode}`, 'Expected 200 or redirect');
      }
    } catch (error) {
      warn(`${page} check failed`, error.message);
    }
  }
}

function fetchWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.get(url, { timeout }, (res) => {
      resolve(res);
    });
    
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Summary
function printSummary() {
  logSection('SUMMARY');
  
  const total = results.passed.length + results.failed.length + results.warnings.length;
  
  log(`  Total Checks: ${total}`, colors.bold);
  log(`  ✓ Passed: ${results.passed.length}`, colors.green);
  log(`  ✗ Failed: ${results.failed.length}`, colors.red);
  log(`  ⚠ Warnings: ${results.warnings.length}`, colors.yellow);
  
  console.log();
  
  if (results.failed.length === 0) {
    log('  🎉 All critical checks passed! Ready for production.', colors.green);
  } else {
    log('  ❌ Some critical checks failed. Please fix before deploying.', colors.red);
    console.log();
    log('  Failed Checks:', colors.red);
    for (const { check, reason } of results.failed) {
      log(`    - ${check}: ${reason}`, colors.red);
    }
  }
  
  if (results.warnings.length > 0) {
    console.log();
    log('  Warnings (optional fixes):', colors.yellow);
    for (const { check, reason } of results.warnings.slice(0, 5)) {
      log(`    - ${check}`, colors.yellow);
    }
    if (results.warnings.length > 5) {
      log(`    ... and ${results.warnings.length - 5} more`, colors.yellow);
    }
  }
  
  console.log();
  
  // Exit code based on failures
  process.exit(results.failed.length > 0 ? 1 : 0);
}

// Main execution
async function main() {
  console.log();
  log('╔══════════════════════════════════════════════════════════╗', colors.cyan);
  log('║     THE LADDER - PRODUCTION CHECKLIST                    ║', colors.cyan);
  log('║     Comprehensive Pre-Deployment Validation              ║', colors.cyan);
  log('╚══════════════════════════════════════════════════════════╝', colors.cyan);
  
  // Load environment variables from .env.local if available
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const [key, ...valueParts] = line.split('=');
      if (key && !key.startsWith('#')) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    }
  }
  
  // Run all checks
  checkEnvironmentVariables();
  checkCriticalAssets();
  checkManifest();
  checkBuildOutput();
  checkServiceWorker();
  checkRobotsTxt();
  checkImageOptimization();
  checkSecurityHeaders();
  await checkPageResponses();
  
  printSummary();
}

main().catch(console.error);
