
function main(){
  document.getElementById("refresh-button").onclick = onRefreshButtonClicked; 
  refreshImage()
}

async function swapState () {
  const value = await chrome.storage.local.get(["active"])
  const val = value["active"];
  if (val === undefined) {
    await chrome.storage.local.set({ active: true });
  } else {
    await chrome.storage.local.set({ active: !val });
  }
  console.log(value)
}

async function refreshImage() {
  const isActive = (await chrome.storage.local.get(["active"]))["active"];
  const imgPath = isActive ? "iconon.png" : "iconoff.png";
  document.getElementById("popup-image").src = imgPath;
  document.getElementById("refresh-button").textContent = isActive ? "Disable" : "Enable"
  chrome.action.setIcon({path: imgPath});
}


async function onRefreshButtonClicked()  {
  await swapState();
  await refreshImage();
}


main();
