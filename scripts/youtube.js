


(async () => {
  const utils = await import(chrome.runtime.getURL("scripts/nodesRemover.mjs"));

  console.log("Removing shorts from webdesktop youtube.")
  utils.startRemovingElements(() => {
    const posibleElements = [...document.getElementsByTagName("ytd-rich-shelf-renderer")];
    return posibleElements.filter(el => el.hasAttribute("is-shorts"));
  }, 3000);
})()



