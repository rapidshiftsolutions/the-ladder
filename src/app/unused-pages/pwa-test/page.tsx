import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PWA Test - English Mountain Raceway',
  description: 'Test Progressive Web App functionality'
}

export default function PWATestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-anton font-black uppercase mb-8">
          PWA Test Page
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Installation Status */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-anton font-bold mb-4">Installation</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Service Worker:</span>
                <span id="sw-status" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>Installable:</span>
                <span id="install-status" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>Display Mode:</span>
                <span id="display-mode" className="text-yellow-400">Checking...</span>
              </div>
            </div>
          </div>

          {/* Cache Status */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-anton font-bold mb-4">Cache</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Cache API:</span>
                <span id="cache-api" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>Cached Resources:</span>
                <span id="cached-count" className="text-yellow-400">0</span>
              </div>
              <button 
                id="clear-cache"
                className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Clear Cache
              </button>
            </div>
          </div>

          {/* Network Status */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-anton font-bold mb-4">Network</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Online Status:</span>
                <span id="online-status" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>Connection Type:</span>
                <span id="connection-type" className="text-yellow-400">Unknown</span>
              </div>
              <button 
                id="test-offline"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Test Offline Mode
              </button>
            </div>
          </div>

          {/* Storage Status */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-anton font-bold mb-4">Storage</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>LocalStorage:</span>
                <span id="localstorage" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>IndexedDB:</span>
                <span id="indexeddb" className="text-yellow-400">Checking...</span>
              </div>
              <div className="flex justify-between">
                <span>Storage Quota:</span>
                <span id="storage-quota" className="text-yellow-400">Checking...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Test Results */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-anton font-bold mb-4">Test Results</h2>
          <div id="test-results" className="space-y-2 font-mono text-sm">
            <div>Running PWA tests...</div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // PWA Test Script
          (function() {
            const log = (message, type = 'info') => {
              const results = document.getElementById('test-results');
              const div = document.createElement('div');
              div.className = type === 'error' ? 'text-red-400' : type === 'success' ? 'text-green-400' : 'text-gray-300';
              div.textContent = message;
              results.appendChild(div);
            };

            const updateStatus = (id, status, success = true) => {
              const element = document.getElementById(id);
              if (element) {
                element.textContent = status;
                element.className = success ? 'text-green-400' : 'text-red-400';
              }
            };

            // Test Service Worker
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistration().then(registration => {
                if (registration) {
                  updateStatus('sw-status', 'Active', true);
                  log('✓ Service Worker is registered and active', 'success');
                } else {
                  updateStatus('sw-status', 'Not Registered', false);
                  log('✗ Service Worker is not registered', 'error');
                }
              });
            } else {
              updateStatus('sw-status', 'Not Supported', false);
              log('✗ Service Workers not supported', 'error');
            }

            // Test Installation
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
              deferredPrompt = e;
              updateStatus('install-status', 'Can Install', true);
              log('✓ App can be installed', 'success');
            });

            // Test Display Mode
            const displayMode = window.matchMedia('(display-mode: standalone)').matches ? 'Standalone' : 'Browser';
            updateStatus('display-mode', displayMode, displayMode === 'Standalone');
            log(\`Display mode: \${displayMode}\`, displayMode === 'Standalone' ? 'success' : 'info');

            // Test Cache API
            if ('caches' in window) {
              updateStatus('cache-api', 'Supported', true);
              log('✓ Cache API is supported', 'success');
              
              // Count cached resources
              caches.keys().then(cacheNames => {
                let totalCount = 0;
                const promises = cacheNames.map(cacheName => 
                  caches.open(cacheName).then(cache => cache.keys())
                );
                
                Promise.all(promises).then(allKeys => {
                  allKeys.forEach(keys => totalCount += keys.length);
                  updateStatus('cached-count', totalCount.toString(), true);
                  log(\`Found \${totalCount} cached resources in \${cacheNames.length} caches\`, 'success');
                });
              });
            } else {
              updateStatus('cache-api', 'Not Supported', false);
              log('✗ Cache API not supported', 'error');
            }

            // Test Network Status
            const updateNetworkStatus = () => {
              const online = navigator.onLine;
              updateStatus('online-status', online ? 'Online' : 'Offline', online);
              log(\`Network status: \${online ? 'Online' : 'Offline'}\`, online ? 'success' : 'error');
            };
            
            updateNetworkStatus();
            window.addEventListener('online', updateNetworkStatus);
            window.addEventListener('offline', updateNetworkStatus);

            // Test Connection
            if (navigator.connection) {
              updateStatus('connection-type', navigator.connection.effectiveType || 'Unknown', true);
              log(\`Connection type: \${navigator.connection.effectiveType || 'Unknown'}\`, 'info');
            }

            // Test Storage
            if (typeof Storage !== 'undefined') {
              updateStatus('localstorage', 'Supported', true);
              log('✓ LocalStorage is supported', 'success');
            } else {
              updateStatus('localstorage', 'Not Supported', false);
              log('✗ LocalStorage not supported', 'error');
            }

            if ('indexedDB' in window) {
              updateStatus('indexeddb', 'Supported', true);
              log('✓ IndexedDB is supported', 'success');
            } else {
              updateStatus('indexeddb', 'Not Supported', false);
              log('✗ IndexedDB not supported', 'error');
            }

            // Test Storage Quota
            if (navigator.storage && navigator.storage.estimate) {
              navigator.storage.estimate().then(estimate => {
                const used = Math.round(estimate.usage / 1024 / 1024);
                const total = Math.round(estimate.quota / 1024 / 1024);
                updateStatus('storage-quota', \`\${used}MB / \${total}MB\`, true);
                log(\`Storage usage: \${used}MB of \${total}MB available\`, 'info');
              });
            } else {
              updateStatus('storage-quota', 'Not Available', false);
              log('✗ Storage quota API not available', 'error');
            }

            // Clear Cache Button
            document.getElementById('clear-cache').addEventListener('click', async () => {
              if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
                log('✓ All caches cleared', 'success');
                updateStatus('cached-count', '0', true);
              }
            });

            // Test Offline Button
            document.getElementById('test-offline').addEventListener('click', () => {
              log('Testing offline functionality by navigating to /offline', 'info');
              window.location.href = '/offline';
            });

            log('PWA test suite completed', 'success');
          })();
        `
      }} />
    </div>
  )
}
