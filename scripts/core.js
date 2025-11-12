
function main(){
  document.getElementById("refresh-button").onclick = onRefreshButtonClicked; 
  document.getElementById("one-time-execution-checkbox").onchange = onChangeOneTimeExecution; 
  document.getElementById("timeout-value").oninput = onChangeTimeout; 

  refreshVisualValues()
}

async function swapState () {
  const value = await chrome.storage.local.get();
  let isActive = value["active"];
  if (isActive === undefined) {
    await chrome.storage.local.set({ active: true });
    isActive = true;
  } else {
    await chrome.storage.local.set({ active: !isActive });
    isActive = !isActive;
  }

  if (isActive) {
    // do something 
  }
}

async function refreshVisualValues() {
  const obj = await chrome.storage.local.get();

  const imgPath = obj["active"] ? "iconon.png" : "iconoff.png";

  document.getElementById("popup-image").src = imgPath;
  document.getElementById("refresh-button").textContent = obj["active"] ? "Disable" : "Enable";

  document.getElementById("one-time-execution-checkbox").checked = obj["oneTimeExecution"]; 
  document.getElementById("timeout-value").value = obj["timeout"]; 
  document.getElementById("timeout-label").innerText = `Timeout: (${obj["timeout"]})` 

  chrome.action.setIcon({path: imgPath});
}


async function onRefreshButtonClicked()  {
  await swapState();
  await refreshVisualValues();
}

async function onChangeOneTimeExecution(event) {
  const val = event.target.checked;
  await chrome.storage.local.set({ oneTimeExecution: val });
}

async function onChangeTimeout(event) {
  const val = event.target.value;
  await chrome.storage.local.set({ timeout: val });
  refreshVisualValues();
}

main();
