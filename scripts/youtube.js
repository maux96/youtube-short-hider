


(async () => {
  const utils = await import(chrome.runtime.getURL("scripts/nodesRemover.mjs"));

  console.log("Removing shorts from webdesktop youtube.")
  utils.startRemovingElements(() => {
    const pathname = window.location.pathname
    if (/\/watch/.test(pathname)) {
      return [...document.getElementsByTagName("ytd-reel-shelf-renderer")]
    } else {
      return [...document.getElementsByTagName("ytd-rich-shelf-renderer")]
                                    .filter(el => el.hasAttribute("is-shorts"));
    }
  });
})()



