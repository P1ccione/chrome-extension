chrome.runtime.onInstalled.addListener(() => {
  console.log("hello");

  // var callback = function () {
  //   //add what you want
  // };

  // var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  // var oneWeekAgo = new Date().getTime() - millisecondsPerWeek;

  // chrome.browsingData.remove(
  //   {
  //     since: oneWeekAgo,
  //   },
  //   { appcache: true, cache: true, cookies: true, downloads: true }
  // );

  //receiving a message
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
    if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
  });

  //create context menu
  chrome.contextMenus.create({
    id: "wikiped1ia",
    title: 'You selected "%s"',
    contexts: ["selection"],
  });

  // //create bookmark
  // chrome.bookmarks.create(
  //   {
  //     title: "Youtube",
  //     url: "https://www.youtube.com/",
  //   },
  //   function (newBookmark) {
  //     //callback function
  //     console.log("Bookmark created: " + newBookmark);
  //   }
  // );
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  //the URL that will be added to based on the selection
  baseURL = "http://en.wikipedia.org/wiki/";
  var newURL = baseURL + info.selectionText;
  //create the new URL in the user's browser
  chrome.tabs.create({ url: newURL });
});
