// setup slot machine html elements
// 
/** 
 * Creates HTML elements for the slot machine.
 * @param reelsAmount Set amoun of reels to be created
 * @param htmlSelector The CSS-selector for the slot machine
 */
export function structureSlotMachine(reelsAmount = 3, htmlSelector = "body"): HTMLElement {
  const parent = document.querySelector(htmlSelector);
  const slotMachine = document.createElement("section");
  slotMachine.id = "slot-machine";
  const reels = document.createElement("div");
  reels.id = "reels";
  for (let i = 0; i < reelsAmount; i++) {
    const reel = document.createElement("div");
    const reelNumber = i + 1;
    reel.classList.add("reel");
    reel.classList.add("reel"+reelNumber);
    reels.appendChild(reel);
  }
  slotMachine.appendChild(reels);
  if (parent) {
    parent.appendChild(slotMachine);
  }
  return slotMachine;
}
 