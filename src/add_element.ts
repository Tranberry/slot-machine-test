export * as add_element from './add_element.js';

// setup slot machine html elements
// 
/** 
 * Creates HTML elements for the slot machine.
 * @param amountReels Set amoun of reels to be created
 * @param selector The CSS-selector for the slot machine
 */
export function buildSlotMachine(amountReels = 3, selector = "body"): HTMLElement {
  const body = document.querySelector(selector);
  const slotMachine = document.createElement("section");
  slotMachine.id = "slot-machine";
  const reels = document.createElement("div");
  reels.id = "reels";
  for (let i = 0; i < amountReels; i++) {
    const reel = document.createElement("div");
    const reelID = i + 1;
    reel.classList.add("reel");
    reel.classList.add("reel"+reelID);
    reels.appendChild(reel);
  }
  slotMachine.appendChild(reels);
  if (body) {
    body.appendChild(slotMachine);
  }
  return slotMachine;
}
 