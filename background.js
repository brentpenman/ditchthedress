chrome.browserAction.onClicked.addListener(function(tab) {
7	  // No tabs or host permissions needed!
8	  chrome.tabs.executeScript(null, {file: "content.js"});
       console.log("ok");
11	  });
12	});
