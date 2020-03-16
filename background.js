// chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
//   // if (localStorage.getItem('color')) {
//   //   chrome.runtime.sendMessage({color: localStorage.getItem('color')});
//   // }
//   chrome.tabs.executeScript({
//     file: "insert.js"
//   });
// });

chrome.runtime.onMessage.addListener(function (message, sender, reply) {
  chrome.tabs.executeScript({
    file: "insert.js"
  });
});
