function injectScript() {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('injected.js');
  script.onload = () => {
    console.log('Injected script loaded successfully.');
  };
  script.onerror = () => {
    console.error('Error loading injected script.');
  };

  const head = document.head || document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(script);
  } else {
    console.error('No head element found to append the script.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectScript);
} else {
  injectScript();
}
