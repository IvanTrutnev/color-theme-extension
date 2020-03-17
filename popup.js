document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');
  const color = document.getElementById('color-theme');
  color.addEventListener('change', (e) => {
    chrome.storage.local.set({
      color: e.target.value,
      range: 0.8
    });
  });
});
