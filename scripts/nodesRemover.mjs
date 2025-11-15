
const DEFAULT_TIMEOUT_TIME = 2000

function verifyForShorts(elems) {
  console.log("Trying to removing elements (extension)")
  if (elems.length !== 0) {
    console.log("Elements to remove:", elems)
    elems.forEach(el => el?.remove());
  }
}

export async function startRemovingElements(selectorFunction) {
  while (true) {
      const localStor = await chrome.storage.local.get()
      const timeout = localStor['timeout'] ?? DEFAULT_TIMEOUT_TIME
      
      await new Promise((resolve) => { setTimeout(resolve, timeout) });

      if(localStor["active"]) {
        const elems = selectorFunction(localStor)
        verifyForShorts(elems);
      }

      if (localStor["oneTimeExecution"]) {
        break;
      }
  }
}
