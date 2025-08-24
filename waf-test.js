// Simple utility to test our WAF configuration
// This is for development and testing purposes only

// Import dependency as ES module
import fetch from 'node-fetch';

// Base URL - Netlify Dev usually runs on port 8888 by default
const baseUrl = 'http://localhost:8888';

// Test cases - simulating various attacks
const testCases = [
  // SQL Injection attempts
  {
    name: 'SQL Injection Test 1',
    path: '/api/data?id=1%27%20OR%20%271%27=%271',
    description: 'Basic SQL injection attempt with single quotes',
  },
  {
    name: 'SQL Injection Test 2',
    path: '/api/data?id=1%20UNION%20SELECT%20*%20FROM%20users',
    description: 'UNION-based SQL injection attempt',
  },
  
  // XSS attack attempts
  {
    name: 'XSS Test 1',
    path: '/search?q=%3Cscript%3Ealert(1)%3C/script%3E',
    description: 'Basic XSS attempt with script tags',
  },
  {
    name: 'XSS Test 2',
    path: '/search?q=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E',
    description: 'XSS attempt using img tag',
  },
  
  // Path traversal attempts
  {
    name: 'Path Traversal Test',
    path: '/file?path=../../../etc/passwd',
    description: 'Basic path traversal attempt',
  },
  
  // Normal legitimate request (should not be blocked)
  {
    name: 'Legitimate Request',
    path: '/about',
    description: 'Normal legitimate request that should not be blocked',
  },
];

// Main function to run tests
async function runTests() {
  console.log('Starting WAF tests against Netlify Dev server...');
  console.log('='.repeat(50));
  console.log(`Testing against: ${baseUrl}`);
  console.log('Make sure to run "npm run dev" in another terminal first!');
  console.log('='.repeat(50));
  
  for (const test of testCases) {
    try {
      console.log(`Testing: ${test.name}`);
      console.log(`Description: ${test.description}`);
      console.log(`URL: ${baseUrl}${test.path}`);
      
      const response = await fetch(`${baseUrl}${test.path}`);
      const status = response.status;
      
      console.log(`Status: ${status}`);
      
      if (test.name === 'Legitimate Request') {
        if (status === 200 || status === 404) { // 404 is OK for testing if the page doesn't exist
          console.log('✅ PASS: Legitimate request was allowed as expected');
        } else {
          console.log('❌ FAIL: Legitimate request was incorrectly blocked');
        }
      } else {
        if (status === 403) {
          console.log('✅ PASS: Attack was correctly blocked by WAF');
        } else {
          console.log('❌ FAIL: Attack was not blocked by WAF');
        }
      }
    } catch (error) {
      console.error(`Error testing ${test.name}:`, error.message);
    }
    
    console.log('-'.repeat(50));
  }
  
  console.log('WAF tests completed');
}

// Run the tests
runTests();