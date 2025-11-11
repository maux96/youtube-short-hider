
const TIMEOUT_TIME = 2000

function verifyForShorts(selectorFunction) {
  const elems = selectorFunction()
  console.log("Trying to removing elements (extension)")
  if (elems.length !== 0) {
    console.log("Elements to remove:", elems)
    elems.forEach(el => el?.remove());
  }
}

export async function startRemovingElements(selectorFunction, timeout=TIMEOUT_TIME) {
  while (true) {
      await new Promise((resolve) => { setTimeout(resolve, timeout) });

      const value = await chrome.storage.local.get()
      value["active"] && verifyForShorts(selectorFunction);

      if (value["oneTimeExecution"]) {
        break;
      }
  }
}
