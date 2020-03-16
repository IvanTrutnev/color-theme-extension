if (!document.getElementById('color-theme')) {
  document.body.hidden = true;
  const div = document.createElement("div");
  document.body.insertAdjacentHTML('beforebegin',
    `<div id="color-theme" style="position: fixed; top: 0%; left: 0%; height: 100%; width: 100%; 
    background: #f1b174; z-index: 9999999999; opacity: 0.273; pointer-events: none"></div>`);
  div.id = 'color-theme';
  div.style.position = 'fixed';
  div.style.top = '0%';
  div.style.left = '0%';
  div.style.background = '#f1b174';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.zIndex = '99999999999';
  div.style.opacity = '0.273';
  div.style.pointerEvents = 'none';
  document.body.hidden = false;
}
