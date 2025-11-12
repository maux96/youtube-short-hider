


(async () => {
  const utils = await import(chrome.runtime.getURL("scripts/nodesRemover.mjs"));

  console.log("Removing shorts from smartphone youtube.")
  utils.startRemovingElements(() => [
    ...document.getElementsByClassName("ytGridShelfViewModelHost"),
    ...document.getElementsByTagName("ytm-reel-shelf-renderer"),
  ]);
})()



