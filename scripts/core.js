
function main(){
  document.getElementById("refresh-button").onclick = onRefreshButtonClicked; 
}

async function swap_state () {

}

function onRefreshButtonClicked()  {
  document.getElementById("test-field").innerText += JSON.stringify({})
  //chrome.action.setBadgeText({
  //  text: "x" 
  //})
}


main();
