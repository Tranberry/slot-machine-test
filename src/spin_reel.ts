import { GameState, setState } from "./game_manager.js";
import { ReelSymbolImages } from "./slot_symbols.js";
export { spinTheReels };

// TODO: spin the reels unevenly
spinTheReels();
function spinTheReels() {
  const slotMachineSelector = document.querySelector("#slot-machine");
  const reelsSection = document.querySelector("#reels");
  // get slot machine .reel
  if (reelsSection && slotMachineSelector) {
    const slotMachineReel: NodeListOf<HTMLDivElement> = reelsSection.querySelectorAll(".reel");

    // FIXME: this is currently throwing wrong results due to we not yet generating a known reel
    // console.log(ReelSymbolImages);
    
    const symbolList = ReelSymbolImages.map((symbol) => symbol.name);

    // *****************************************************************************
    // for each index<symbolOrderIndex> get the element of symbolList at that index

    // const order:number[] = symbolOrderIndex;

    // // symbolList[order];

    // const testStore:string[] = [];   
    
    // order.forEach((symbol) => {
    //   // console.log(symbolList[symbol]);
    //   testStore.push(ReelSymbolImages[symbol]);
    // });
      
    // console.log(`
    //   symbolList: ${symbolList}
    //   order: ${order}
    //   testStore: ${testStore}
    //   `);
    
    
    // *****************************************************************************

    let currentPosition = 0; 

    if (slotMachineReel) {
      const spinButton = document.createElement("button");

      spinButton.id = "spin";
      spinButton.innerText = "Spin";
      spinButton.classList.add("button");
      spinButton.classList.add("spin-button");

      slotMachineSelector.appendChild(spinButton);

      spinButton.addEventListener("click", () => {
        setState(GameState.SPIN);

        currentPosition += -128 * 15;

        slotMachineReel.forEach((reel) => {
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

