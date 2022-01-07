import { slotSymbolImages } from "./slot_symbols.js";
export { spinTheReels };
// get slot machine selector <section>
spinTheReels();
function spinTheReels() {
    const slotMachineSelector = document.querySelector('#reels');
    // get slot machine .reel
    if (slotMachineSelector) {
        const slotMachineReel = slotMachineSelector.querySelectorAll('.reel');
        // FIXME: this is currently throwing wrong results due to we not yet generating a known reel
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
                currentPosition += -128;
                // for (let i = 0; i < slotMachineReel.length; i++) {
                //   slotMachineReel[i].style.backgroundPositionY = `${currentPosition}px`;
                // }
                slotMachineReel.forEach(reel => {
                    reel.style.backgroundPositionY = `${currentPosition}px`;
                });
                const height = 128;
                const operationMinus = (currentPosition % (height * symbolList.length)) / 128;
                console.log(symbolList[-operationMinus]);
            });
        }
    }
}
//# sourceMappingURL=spin_reel.js.map