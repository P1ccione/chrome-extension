chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showAlert") {
    let btn = document.getElementById("chrome-extension-btn");

    if (btn) {
      btn.addEventListener("click", () => {
        console.log("Button clicked!");
        alert("Btn clicked!");
      });
    }
  }
});
