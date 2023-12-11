chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { code: 'alert("Btn clicked!");' });
});
