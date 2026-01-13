#!/usr/bin/env node
/**
 * Mobile & Visual Test Runner Script
 * 
 * Runs all mobile and visual tests and generates a comprehensive report.
 * 
 * Usage: node scripts/run-mobile-tests.js [--update-snapshots]
 */

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  testDirs: [
    'tests/mobile',
    'tests/visual',
  ],
  outputDir: './test-results/mobile-report',
  projects: ['Mobile Chrome', 'Mobile Safari'],
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

// Results tracking
const results = {
  passed: [],
  failed: [],
  skipped: [],
  issues: [],
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection(title) {
  console.log();
  log(`${'='.repeat(60)}`, colors.cyan);
  log(`  ${title}`, colors.bold);
  log(`${'='.repeat(60)}`, colors.cyan);
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  return {
    updateSnapshots: args.includes('--update-snapshots') || args.includes('-u'),
    verbose: args.includes('--verbose') || args.includes('-v'),
    help: args.includes('--help') || args.includes('-h'),
  };
}

function printHelp() {
  console.log(`
${colors.bold}Mobile & Visual Test Runner${colors.reset}

Usage: node scripts/run-mobile-tests.js [options]

Options:
  --update-snapshots, -u  Update visual regression snapshots
  --verbose, -v           Show detailed test output
  --help, -h              Show this help message

Tests run:
  - Mobile UX tests (touch targets, overflow, typography)
  - Mobile interaction tests (navigation, gestures)
  - Design quality tests (contrast, hierarchy, consistency)
  - Mobile visual regression tests (screenshots)
  `);
}

// Run Playwright tests
async function runTests(options) {
  return new Promise((resolve) => {
    const args = [
      'playwright', 'test',
      '--project=Mobile Chrome',
      '--reporter=json',
      ...CONFIG.testDirs,
    ];
    
    if (options.updateSnapshots) {
      args.push('--update-snapshots');
    }
    
    log(`\n  Running: npx ${args.join(' ')}`, colors.dim);
    
    const process = spawn('npx', args, {
      cwd: path.resolve(__dirname, '..'),
      shell: true,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    
    let stdout = '';
    let stderr = '';
    
    process.stdout.on('data', (data) => {
      stdout += data.toString();
      if (options.verbose) {
        console.log(data.toString());
      }
    });
    
    process.stderr.on('data', (data) => {
      stderr += data.toString();
      if (options.verbose) {
        console.error(data.toString());
      }
    });
    
    process.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });
    
    process.on('error', (err) => {
      resolve({ code: 1, stdout: '', stderr: err.message });
    });
  });
}

// Parse test results from JSON output
function parseResults(stdout) {
  try {
    // Find JSON in output
    const jsonMatch = stdout.match(/\{[\s\S]*"config"[\s\S]*\}/);
    if (!jsonMatch) {
      return null;
    }
    
    const report = JSON.parse(jsonMatch[0]);
    
    report.suites?.forEach(suite => {
      parseSuite(suite);
    });
    
    return report;
  } catch (error) {
    console.error('Error parsing results:', error.message);
    return null;
  }
}

function parseSuite(suite, parentTitle = '') {
  const title = parentTitle ? `${parentTitle} > ${suite.title}` : suite.title;
  
  suite.specs?.forEach(spec => {
    spec.tests?.forEach(test => {
      const testName = `${title} > ${spec.title}`;
      
      if (test.status === 'passed' || test.status === 'expected') {
        results.passed.push(testName);
      } else if (test.status === 'failed' || test.status === 'unexpected') {
        results.failed.push({
          name: testName,
          error: test.results?.[0]?.error?.message || 'Unknown error',
        });
        
        // Extract actionable issues
        extractIssues(testName, test.results?.[0]?.error?.message);
      } else if (test.status === 'skipped') {
        results.skipped.push(testName);
      }
    });
  });
  
  suite.suites?.forEach(childSuite => {
    parseSuite(childSuite, title);
  });
}

// Extract actionable issues from test failures
function extractIssues(testName, errorMessage) {
  const issue = { test: testName, message: '', fix: '' };
  
  if (testName.includes('touch target') || testName.includes('Touch')) {
    issue.message = 'Touch target too small';
    issue.fix = 'Increase button/link min-height and min-width to 44px';
  } else if (testName.includes('overflow') || testName.includes('horizontal scroll')) {
    issue.message = 'Horizontal overflow detected';
    issue.fix = 'Add overflow-x: hidden to body or fix element widths';
  } else if (testName.includes('font') && testName.includes('16px')) {
    issue.message = 'Font size too small for mobile inputs';
    issue.fix = 'Set input font-size to at least 16px to prevent iOS zoom';
  } else if (testName.includes('contrast')) {
    issue.message = 'Color contrast ratio too low';
    issue.fix = 'Increase contrast between text and background colors';
  } else if (testName.includes('screenshot') || testName.includes('visual')) {
    issue.message = 'Visual regression detected';
    issue.fix = 'Review screenshot diff and update baseline if intentional';
  } else if (errorMessage) {
    issue.message = errorMessage.slice(0, 100);
    issue.fix = 'Review test output for specific fix';
  }
  
  if (issue.message) {
    results.issues.push(issue);
  }
}

// Generate report
function generateReport() {
  logSection('TEST RESULTS');
  
  const total = results.passed.length + results.failed.length + results.skipped.length;
  
  log(`  Total Tests: ${total}`, colors.bold);
  log(`  ✓ Passed: ${results.passed.length}`, colors.green);
  log(`  ✗ Failed: ${results.failed.length}`, colors.red);
  log(`  ○ Skipped: ${results.skipped.length}`, colors.yellow);
  
  if (results.failed.length > 0) {
    console.log();
    log('  Failed Tests:', colors.red);
    results.failed.slice(0, 10).forEach(test => {
      log(`    ✗ ${test.name.slice(-80)}`, colors.red);
    });
    if (results.failed.length > 10) {
      log(`    ... and ${results.failed.length - 10} more`, colors.red);
    }
  }
  
  if (results.issues.length > 0) {
    logSection('ISSUES TO FIX');
    
    const uniqueIssues = [];
    const seen = new Set();
    
    results.issues.forEach(issue => {
      if (!seen.has(issue.message)) {
        seen.add(issue.message);
        uniqueIssues.push(issue);
      }
    });
    
    uniqueIssues.forEach((issue, i) => {
      log(`  ${i + 1}. ${issue.message}`, colors.yellow);
      log(`     Fix: ${issue.fix}`, colors.dim);
      console.log();
    });
  }
  
  // Save report to file
  const reportPath = path.join(CONFIG.outputDir, 'report.json');
  
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      total,
      passed: results.passed.length,
      failed: results.failed.length,
      skipped: results.skipped.length,
    },
    failed: results.failed,
    issues: results.issues,
  }, null, 2));
  
  log(`\n  Report saved to: ${reportPath}`, colors.blue);
  
  return results.failed.length === 0;
}

// Main execution
async function main() {
  const options = parseArgs();
  
  if (options.help) {
    printHelp();
    process.exit(0);
  }
  
  console.log();
  log('╔══════════════════════════════════════════════════════════╗', colors.cyan);
  log('║     THE LADDER - MOBILE & VISUAL TEST RUNNER             ║', colors.cyan);
  log('║     Comprehensive Mobile Testing Suite                   ║', colors.cyan);
  log('╚══════════════════════════════════════════════════════════╝', colors.cyan);
  
  // Check if dev server is running
  logSection('Prerequisites');
  
  try {
    execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', { timeout: 5000 });
    log('  ✓ Dev server is running', colors.green);
  } catch {
    log('  ⚠ Dev server may not be running', colors.yellow);
    log('    Starting dev server automatically...', colors.dim);
  }
  
  // Run tests
  logSection('Running Mobile & Visual Tests');
  
  log('\n  Test categories:', colors.blue);
  log('    • Mobile UX (touch targets, overflow, fonts)', colors.dim);
  log('    • Mobile Interactions (nav, gestures, forms)', colors.dim);
  log('    • Design Quality (contrast, hierarchy, consistency)', colors.dim);
  log('    • Mobile Visual (screenshot comparisons)', colors.dim);
  
  const testResult = await runTests(options);
  
  if (testResult.stdout) {
    parseResults(testResult.stdout);
  }
  
  // If JSON parsing failed, try to get summary from list reporter
  if (results.passed.length === 0 && results.failed.length === 0) {
    // Run with list reporter for human-readable output
    log('\n  Running with list reporter for detailed output...', colors.dim);
    
    const listResult = await new Promise((resolve) => {
      const args = [
        'playwright', 'test',
        '--project=Mobile Chrome',
        '--reporter=list',
        ...CONFIG.testDirs,
      ];
      
      if (options.updateSnapshots) {
        args.push('--update-snapshots');
      }
      
      const proc = spawn('npx', args, {
        cwd: path.resolve(__dirname, '..'),
        shell: true,
        stdio: 'inherit',
      });
      
      proc.on('close', (code) => {
        resolve(code);
      });
    });
    
    // Exit with Playwright's exit code
    process.exit(listResult);
  }
  
  // Generate report
  const allPassed = generateReport();
  
  console.log();
  
  if (allPassed) {
    log('  🎉 All mobile & visual tests passed!', colors.green);
  } else {
    log('  ❌ Some tests failed. Review issues above.', colors.red);
  }
  
  console.log();
  
  process.exit(allPassed ? 0 : 1);
}

main().catch((error) => {
  console.error(`Fatal error: ${error.message}`);
  process.exit(1);
});
