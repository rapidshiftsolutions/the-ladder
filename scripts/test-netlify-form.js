#!/usr/bin/env node
/**
 * Netlify Form Testing Script
 * 
 * Tests form submission to Netlify Forms endpoint
 * Run with: node scripts/test-netlify-form.js
 */

const https = require('https');
const http = require('http');

const testFormData = {
  'form-name': 'contact',
  name: 'Test User',
  email: 'test@example.com',
  phone: '(205) 555-1234',
  subject: 'general',
  message: 'This is a test message from the form testing script.',
};

const formBody = new URLSearchParams(testFormData).toString();

console.log('Testing Netlify Form Submission...\n');
console.log('Form Data:', testFormData);
console.log('\nEncoded Body:', formBody);
console.log('\n');

// Test with local dev server
const testLocal = () => {
  return new Promise((resolve, reject) => {
    console.log('Testing local dev server (http://localhost:3000)...');
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(formBody),
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers:`, res.headers);
        
        if (res.statusCode === 200 || res.statusCode === 302) {
          console.log('✅ Form submission appears successful (redirect expected)');
          resolve({ success: true, status: res.statusCode });
        } else {
          console.log('❌ Form submission failed');
          console.log('Response:', data.substring(0, 500));
          reject({ success: false, status: res.statusCode, data });
        }
      });
    });

    req.on('error', (error) => {
      console.log('❌ Connection error:', error.message);
      reject({ success: false, error: error.message });
    });

    req.write(formBody);
    req.end();
  });
};

// Test with production URL (if provided)
const testProduction = (url) => {
  return new Promise((resolve, reject) => {
    console.log(`Testing production URL (${url})...`);
    
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname || '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(formBody),
      },
    };

    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        
        if (res.statusCode === 200 || res.statusCode === 302) {
          console.log('✅ Form submission appears successful');
          resolve({ success: true, status: res.statusCode });
        } else {
          console.log('❌ Form submission failed');
          reject({ success: false, status: res.statusCode });
        }
      });
    });

    req.on('error', (error) => {
      console.log('❌ Connection error:', error.message);
      reject({ success: false, error: error.message });
    });

    req.write(formBody);
    req.end();
  });
};

// Main execution
(async () => {
  try {
    // Test local first
    await testLocal();
    
    // Test production if URL provided
    const productionUrl = process.argv[2];
    if (productionUrl) {
      console.log('\n');
      await testProduction(productionUrl);
    }
    
    console.log('\n✅ All tests completed');
  } catch (error) {
    console.error('\n❌ Test failed:', error);
    process.exit(1);
  }
})();
