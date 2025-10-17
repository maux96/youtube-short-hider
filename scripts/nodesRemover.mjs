
const TIMEOUT_TIME = 2000

function verifyForShorts(selectorFunction) {
  const elems = selectorFunction()
  if (elems) {
    // console.log("Elements to remove:", elems)
    elems.forEach(el => el?.remove());
  }
}

export async function startRemovingElements(selectorFunction, timeout=TIMEOUT_TIME) {
  while (true) {
      await new Promise((resolve) => { setTimeout(resolve, timeout) });
      verifyForShorts(selectorFunction);
  }
}
