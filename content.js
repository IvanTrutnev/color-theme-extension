console.log('content');

chrome.runtime.sendMessage({color: 'f1b174'});
localStorage.setItem('color', 'f1b174');