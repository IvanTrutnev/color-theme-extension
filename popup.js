const saveColor = (color) => {
  chrome.storage.local.set({
    color,
    range: 0.8
  });
};
document.addEventListener('DOMContentLoaded', function () {
  const color = document.getElementById('color-theme');
  const colorsWrapper = document.getElementById('colors-wrapper');

  const colors = ['#fac563', '#ff8100', '#ff9329', '#ffa500', '#c5b791', '#90d6f2'];
  for (let i = 0; i < colors.length; ++i) {
    const item = document.createElement('div');
    const colorItem = `<div>
      <div class='color-item' style='background: ${colors[i]}' data-color=${colors[i]}></div>
    </div>`;
    item.innerHTML = colorItem;
    colorsWrapper.appendChild(item);
  }

  chrome.storage.local.get(this.storage, storage => {
    color.value = storage.color;
  });

  color.addEventListener('change', (e) => {
    saveColor(e.target.value)
  });
  colorsWrapper.addEventListener('click', (e) => {
    saveColor(e.target.dataset.color);
  })
});
