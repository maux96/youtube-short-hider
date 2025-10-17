


(async () => {
  const utils = await import(chrome.runtime.getURL("scripts/nodesRemover.mjs"));

  console.log("Removing shorts from webdesktop youtube.")
  utils.startRemovingElements(() => [
    document.getElementById("dismissible"),
  ], 3000);
})()



