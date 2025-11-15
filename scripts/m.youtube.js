


(async () => {
  const utils = await import(chrome.runtime.getURL("scripts/nodesRemover.mjs"));

  console.log("Removing shorts from smartphone youtube.")
  utils.startRemovingElements((localStor) => {

    var sol = [
      ...document.getElementsByClassName("ytGridShelfViewModelHost"),
      ...document.getElementsByTagName("ytm-reel-shelf-renderer"),
    ]

    if (localStor["removePosts"]) {
      sol = [
        ...sol,
        ...document.getElementsByTagName("ytm-backstage-post-thread-renderer")
      ];
    }

    return sol;
  });
})()



