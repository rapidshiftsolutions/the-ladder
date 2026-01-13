#!/usr/bin/env node
/**
 * Lighthouse CI Script
 * 
 * Automated Lighthouse testing for The Ladder website.
 * Runs Lighthouse audits against specified pages and reports results.
 * 
 * Usage:
 *   npm run lighthouse-ci
 *   node scripts/lighthouse-ci.js [--url=<url>] [--output=<dir>]
 * 
 * Prerequisites:
 *   npm install -g lighthouse
 *   or
 *   npx lighthouse
 */

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: process.env.LIGHTHOUSE_URL || 'http://localhost:3000',
  outputDir: process.env.LIGHTHOUSE_OUTPUT || './lighthouse-reports',
  
  // Pages to audit
  pages: [
    { path: '/', name: 'homepage' },
    { path: '/about', name: 'about' },
    { path: '/contact', name: 'contact' },
    { path: '/donate', name: 'donate' },
  ],
  
  // Performance budgets (thresholds for passing)
  budgets: {
    performance: 90,
    accessibility: 100,
    bestPractices: 95,
    seo: 100,
    pwa: 90,
  },
  
  // Lighthouse configuration
  lighthouseConfig: {
    extends: 'lighthouse:default',
    settings: {
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1638.4,
        cpuSlowdownMultiplier: 4,
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        disabled: false,
      },
      emulatedUserAgent: 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse',
    },
  },
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
  dim: '\x1b[2m',
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (const arg of args) {
    if (arg.startsWith('--url=')) {
      options.url = arg.replace('--url=', '');
    } else if (arg.startsWith('--output=')) {
      options.output = arg.replace('--output=', '');
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
  }
  
  return options;
}

function printHelp() {
  console.log(`
${colors.bold}Lighthouse CI Script${colors.reset}

Usage: node scripts/lighthouse-ci.js [options]

Options:
  --url=<url>      Base URL to test (default: http://localhost:3000)
  --output=<dir>   Output directory for reports (default: ./lighthouse-reports)
  --help, -h       Show this help message

Environment Variables:
  LIGHTHOUSE_URL      Base URL to test
  LIGHTHOUSE_OUTPUT   Output directory for reports

Examples:
  node scripts/lighthouse-ci.js
  node scripts/lighthouse-ci.js --url=https://the-ladder.org
  node scripts/lighthouse-ci.js --output=./reports
  `);
}

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection(title) {
  console.log();
  log(`${'─'.repeat(60)}`, colors.cyan);
  log(`  ${title}`, colors.bold);
  log(`${'─'.repeat(60)}`, colors.cyan);
}

// Check if Lighthouse is available
function checkLighthouse() {
  try {
    execSync('npx lighthouse --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

// Run Lighthouse audit
async function runLighthouse(url, outputPath) {
  return new Promise((resolve, reject) => {
    const args = [
      'lighthouse',
      url,
      '--output=json',
      '--output=html',
      `--output-path=${outputPath}`,
      '--chrome-flags="--headless --no-sandbox --disable-gpu"',
      '--only-categories=performance,accessibility,best-practices,seo,pwa',
      '--quiet',
    ];
    
    log(`  Running: npx ${args.join(' ')}`, colors.dim);
    
    const process = spawn('npx', args, {
      shell: true,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    
    let stdout = '';
    let stderr = '';
    
    process.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    process.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Lighthouse exited with code ${code}: ${stderr}`));
      }
    });
    
    process.on('error', (err) => {
      reject(err);
    });
  });
}

// Parse Lighthouse JSON report
function parseReport(reportPath) {
  const jsonPath = reportPath + '.report.json';
  
  if (!fs.existsSync(jsonPath)) {
    return null;
  }
  
  try {
    const content = fs.readFileSync(jsonPath, 'utf8');
    const report = JSON.parse(content);
    
    return {
      performance: Math.round((report.categories?.performance?.score || 0) * 100),
      accessibility: Math.round((report.categories?.accessibility?.score || 0) * 100),
      bestPractices: Math.round((report.categories?.['best-practices']?.score || 0) * 100),
      seo: Math.round((report.categories?.seo?.score || 0) * 100),
      pwa: Math.round((report.categories?.pwa?.score || 0) * 100),
      metrics: {
        FCP: report.audits?.['first-contentful-paint']?.numericValue,
        LCP: report.audits?.['largest-contentful-paint']?.numericValue,
        CLS: report.audits?.['cumulative-layout-shift']?.numericValue,
        TBT: report.audits?.['total-blocking-time']?.numericValue,
        TTI: report.audits?.['interactive']?.numericValue,
        SI: report.audits?.['speed-index']?.numericValue,
      },
    };
  } catch (error) {
    console.error(`Error parsing report: ${error.message}`);
    return null;
  }
}

// Check if scores meet budgets
function checkBudgets(scores) {
  const results = [];
  
  for (const [category, budget] of Object.entries(CONFIG.budgets)) {
    const score = scores[category];
    const passed = score >= budget;
    
    results.push({
      category,
      score,
      budget,
      passed,
    });
  }
  
  return results;
}

// Format score with color
function formatScore(score, budget) {
  if (score >= budget) {
    return `${colors.green}${score}${colors.reset}`;
  } else if (score >= budget - 10) {
    return `${colors.yellow}${score}${colors.reset}`;
  } else {
    return `${colors.red}${score}${colors.reset}`;
  }
}

// Print results table
function printResults(pageName, scores, budgetResults) {
  console.log();
  log(`  Page: ${pageName}`, colors.bold);
  console.log();
  
  // Category scores
  log('  Category Scores:', colors.cyan);
  console.log('  ┌────────────────────┬────────┬────────┬────────┐');
  console.log('  │ Category           │ Score  │ Budget │ Status │');
  console.log('  ├────────────────────┼────────┼────────┼────────┤');
  
  for (const result of budgetResults) {
    const status = result.passed ? `${colors.green}✓ Pass${colors.reset}` : `${colors.red}✗ Fail${colors.reset}`;
    const scoreDisplay = formatScore(result.score, result.budget);
    const category = result.category.padEnd(18);
    
    console.log(`  │ ${category} │ ${scoreDisplay.padEnd(14)} │ ${result.budget.toString().padEnd(6)} │ ${status.padEnd(16)} │`);
  }
  
  console.log('  └────────────────────┴────────┴────────┴────────┘');
  
  // Core Web Vitals
  if (scores.metrics) {
    console.log();
    log('  Core Web Vitals:', colors.cyan);
    
    const metrics = [
      { name: 'FCP', value: scores.metrics.FCP, unit: 'ms', good: 1800 },
      { name: 'LCP', value: scores.metrics.LCP, unit: 'ms', good: 2500 },
      { name: 'CLS', value: scores.metrics.CLS, unit: '', good: 0.1 },
      { name: 'TBT', value: scores.metrics.TBT, unit: 'ms', good: 200 },
      { name: 'TTI', value: scores.metrics.TTI, unit: 'ms', good: 3800 },
      { name: 'SI', value: scores.metrics.SI, unit: 'ms', good: 3400 },
    ];
    
    for (const metric of metrics) {
      if (metric.value !== undefined) {
        const value = metric.name === 'CLS' 
          ? metric.value.toFixed(3)
          : `${metric.value.toFixed(0)}${metric.unit}`;
        
        const isGood = metric.name === 'CLS'
          ? metric.value <= metric.good
          : metric.value <= metric.good;
        
        const indicator = isGood ? colors.green + '●' : colors.red + '●';
        log(`    ${indicator}${colors.reset} ${metric.name}: ${value}`, colors.reset);
      }
    }
  }
}

// Generate summary report
function generateSummary(allResults) {
  logSection('SUMMARY');
  
  let totalPassed = 0;
  let totalChecks = 0;
  
  for (const [page, results] of Object.entries(allResults)) {
    if (results.budgetResults) {
      for (const result of results.budgetResults) {
        totalChecks++;
        if (result.passed) totalPassed++;
      }
    }
  }
  
  const passRate = totalChecks > 0 ? ((totalPassed / totalChecks) * 100).toFixed(1) : 0;
  
  log(`  Total Checks: ${totalChecks}`, colors.bold);
  log(`  Passed: ${totalPassed}`, colors.green);
  log(`  Failed: ${totalChecks - totalPassed}`, colors.red);
  log(`  Pass Rate: ${passRate}%`, totalPassed === totalChecks ? colors.green : colors.yellow);
  
  console.log();
  
  if (totalPassed === totalChecks) {
    log('  🎉 All Lighthouse audits passed!', colors.green);
    return true;
  } else {
    log('  ❌ Some audits failed. Review the reports for details.', colors.red);
    return false;
  }
}

// Main execution
async function main() {
  const options = parseArgs();
  
  const baseUrl = options.url || CONFIG.baseUrl;
  const outputDir = options.output || CONFIG.outputDir;
  
  console.log();
  log('╔══════════════════════════════════════════════════════════╗', colors.cyan);
  log('║     THE LADDER - LIGHTHOUSE CI                           ║', colors.cyan);
  log('║     Automated Performance Auditing                       ║', colors.cyan);
  log('╚══════════════════════════════════════════════════════════╝', colors.cyan);
  
  // Check prerequisites
  logSection('Prerequisites');
  
  if (!checkLighthouse()) {
    log('  ✗ Lighthouse not found', colors.red);
    log('  Install with: npm install -g lighthouse', colors.yellow);
    process.exit(1);
  }
  log('  ✓ Lighthouse is available', colors.green);
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  log(`  ✓ Output directory: ${outputDir}`, colors.green);
  
  log(`  ✓ Base URL: ${baseUrl}`, colors.green);
  
  // Run audits
  logSection('Running Audits');
  
  const allResults = {};
  
  for (const page of CONFIG.pages) {
    const url = `${baseUrl}${page.path}`;
    const outputPath = path.join(outputDir, `${page.name}-${Date.now()}`);
    
    log(`\n  Auditing: ${page.name} (${url})`, colors.blue);
    
    try {
      await runLighthouse(url, outputPath);
      const scores = parseReport(outputPath);
      
      if (scores) {
        const budgetResults = checkBudgets(scores);
        allResults[page.name] = { scores, budgetResults };
        printResults(page.name, scores, budgetResults);
      } else {
        log(`  ✗ Failed to parse report for ${page.name}`, colors.red);
        allResults[page.name] = { error: 'Failed to parse report' };
      }
    } catch (error) {
      log(`  ✗ Error auditing ${page.name}: ${error.message}`, colors.red);
      allResults[page.name] = { error: error.message };
    }
  }
  
  // Generate summary
  const allPassed = generateSummary(allResults);
  
  // Save summary JSON
  const summaryPath = path.join(outputDir, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    baseUrl,
    budgets: CONFIG.budgets,
    results: allResults,
  }, null, 2));
  
  log(`\n  Reports saved to: ${outputDir}`, colors.blue);
  
  console.log();
  
  // Exit with appropriate code
  process.exit(allPassed ? 0 : 1);
}

main().catch((error) => {
  console.error(`Fatal error: ${error.message}`);
  process.exit(1);
});
