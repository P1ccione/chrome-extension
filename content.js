// content.js
// document.body.style.backgroundColor = "orange";
console.log("CONTENT");

// Add a click event listener to the element with ID "test
document.getElementById("test").addEventListener("click", function () {
  console.log("clicked content.js");
  alert("Hello World!");
});

// Send a message to the background script on page load
chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  console.log(response.farewell);
});
