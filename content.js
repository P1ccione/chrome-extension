chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showAlert") {
    // In questo esempio, l'alert verrà mostrato al clic su un elemento con ID "mioPulsante"
    let btn = document.getElementById("chrome-extension-btn");

    if (btn) {
      btn.addEventListener("click", () => {
        alert("Btn clicked!");
      });
    }
  }
});
