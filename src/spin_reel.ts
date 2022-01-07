import { GameState, setState } from "./game_manager.js";
import { slotSymbolImages } from "./slot_symbols.js";
export { spinTheReels };

// get slot machine selector <section>
spinTheReels();
function spinTheReels() {
  const slotMachineSelector = document.querySelector('#slot-machine');
  const reelsSection = document.querySelector('#reels');
  // get slot machine .reel
  if (reelsSection && slotMachineSelector) {
    const slotMachineReel: NodeListOf<HTMLDivElement> = reelsSection.querySelectorAll('.reel');

    // FIXME: this is currently throwing wring results due to we not yet generating a known reel
    // an array of slot symbols ex: ["BAR", "BELL", "CHERRY", "CROWN", "LEMON", "PLUM", "SEVEN", "WATERMELON"]
    const symbolList = slotSymbolImages.getSlotSymbolList();

    let currentPosition = 0;

    // add button element to slot machine selector
    if (slotMachineReel) {
      const spinButton = document.createElement("button");

      spinButton.id = "spin";
      spinButton.innerText = "Spin";
      spinButton.classList.add("button");
      spinButton.classList.add("spin-button");

      slotMachineSelector.appendChild(spinButton);

      // add event listener to spin button
      spinButton.addEventListener("click", () => {
        setState(GameState.SPIN);

        currentPosition += -128 * 15;

        slotMachineReel.forEach(reel => {
          reel.style.backgroundPositionY = `${currentPosition}px`;
        });

        const height = 128;
        const operationMinus = (currentPosition % (height * symbolList.length)) / 128;
        console.log(symbolList[-operationMinus]);

        setState(GameState.READY);
      });
    }
  }
}

