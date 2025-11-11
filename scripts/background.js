



chrome.runtime.onInstalled.addListener(() => {
  //console.log("Hello world!!!!!")
  // chrome.action.setBadgeText({
  //   text: "OFF"
  // });


  console.log("XDDDD")
})


function reddenPage() {
  console.log("waca wacaa")
  document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('brave://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: reddenPage
    });
  }
});
