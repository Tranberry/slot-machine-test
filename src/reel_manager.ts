export * as RM from "./reel_manager.js";
// import { slotSymbolImages } from "./slot_symbols.js";
// import { slotSymbols } from "./slot_symbols.js";


export const reelManager = {
  reel: [],
  reelID: 0,
  reelSymbols: [],

  /**
   * @param reelID set the `ID` of the reel
   */
  createReel: (reelID: number): void => {
    const parent = document.querySelector("#reels");
    reelManager.reelID = reelID;
    reelManager.reel = [];
    for (let i = 0; i < 3; i++) {
      const reelDiv = document.createElement("div");
      reelDiv.classList.add("reel");
      reelDiv.classList.add("debug");
      reelDiv.classList.add("reel" + reelID);
      reelDiv.id = "reel" + reelID;
      // reelManager.reel.push(reelDiv as never);
      if (parent) {
        parent.appendChild(reelDiv);
      }
    }
  },

  // addSymbol: (symbol: string): void => {
  //   const reel = document.querySelector("#reel" + reelManager.reelID);
  //   const symbolDiv = document.createElement("div");
  //   symbolDiv.classList.add("symbol");
  //   symbolDiv.classList.add(symbol);
  //   symbolDiv.style.backgroundImage = `url(${symbolImages[symbol]})`;
  //   symbolDiv.id = symbol;
  //   if (reel) {
  //     reel.appendChild(symbolDiv);
  //   }
  // },

  spinReel: (reelID: number): void => {
    const reel = document.querySelector("#reel" + reelID);
    if (reel) {
      reel.classList.add("spin");
    }
  },
};
