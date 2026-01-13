// Patch console.error to capture stack traces
const originalError = console.error;
console.error = function(...args) {
  originalError.apply(console, args);
  if (args[0] instanceof Error) {
    originalError('Stack trace:', args[0].stack);
  } else if (typeof args[0] === 'string' && args[0].includes('generate')) {
    originalError('Stack trace:', new Error().stack);
  }
};

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  console.error('Stack:', err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  if (reason instanceof Error) {
    console.error('Stack:', reason.stack);
  }
});

// Now require next build
const { execSync } = await import('child_process');
try {
  execSync('npx next build', { stdio: 'inherit', env: process.env });
} catch (e) {
  console.error('Build failed:', e);
}
