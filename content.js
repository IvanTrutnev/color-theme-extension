console.log('content');
const STORAGE = {
  color: '#a03',
  range: 0.8
};
const wrapperId = 'screen-wrapper';

class Main {
  constructor() {
    this.storage = STORAGE;
    this.initStorage();
    this.onStorageChanged();
  }

  initStorage() {
    chrome.storage.local.get(this.storage, storage => {
      this.storage = storage;
      this.run();
    });
  }

  saveStorage() {
    chrome.storage.local.set(this.storage);
  }

  run() {
    this.injectWrapper();
  }

  injectWrapper() {
    const div = document.createElement('div');
    div.id = wrapperId;
    div.setAttribute('style', this.styles);
    if (!document.getElementById(wrapperId)) {
      document.documentElement.appendChild(div);
    }
  }

  get styles() {
    return `
       z-index: 999999999;
       background: ${this.storage.color}; 
       pointer-events: none; 
       position: fixed; 
       top: 0%; 
       right: 0%; 
       width: 100%; 
       height: 100%; 
       opacity: ${(this.storage.range * 0.01 + 0.2).toFixed(4)};
       mix-blend-mode: multiply; 
     `;
  }

  onStorageChanged() {
    chrome.storage.onChanged.addListener(changes => {
      for (let key in changes) {
        this.storage[key] = changes[key].newValue;
      }
      document.getElementById(wrapperId).setAttribute('style', this.styles);
    });
  }
}

const content = new Main();
