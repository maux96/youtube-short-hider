
function main(){
  document.getElementById("refresh-button").onclick = onRefreshButtonClicked; 
  document.getElementById("one-time-execution-checkbox").onchange = onChangeOneTimeExecution; 

  refreshVisualValues()
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

async function refreshVisualValues() {
  const obj = await chrome.storage.local.get();
  const imgPath = obj["active"] ? "iconon.png" : "iconoff.png";
  document.getElementById("popup-image").src = imgPath;
  document.getElementById("refresh-button").textContent = obj["active"] ? "Disable" : "Enable"

  document.getElementById("one-time-execution-checkbox").checked = obj["oneTimeExecution"]; 

  chrome.action.setIcon({path: imgPath});
}


async function onRefreshButtonClicked()  {
  await swapState();
  await refreshVisualValues();
}

async function onChangeOneTimeExecution(event) {
  await chrome.storage.local.set({ oneTimeExecution: event.target.checked });
}


main();
