import { ReelSymbolImages } from "./slot_symbols.js";

// export const symbolOrderIndex = []

export function makeCanvasImage(): Promise<HTMLCanvasElement> {
  const htmlBody = document.getElementsByTagName("body")[0];

  // get symbols from ReelSymbolImages into an array
  const symbols = ReelSymbolImages.map((symbol) => symbol.path);
  const symbolList: HTMLImageElement[] = [];
  // <array>.forEach((item, index) => {})
  symbols.forEach((symbol, index) => {
    const img = new Image();
    img.src = symbol;
    img.id = `symbol${index}`;
    img.classList.add("reel-symbol");
    img.classList.add("preload");
    htmlBody.appendChild(img);
    symbolList.push(img);
  });

  // console.log(symbolList);

  const symbolHeight = 128;
  const symbolWidth = 128;
  const amountOfSymbolsOnReel = 11;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.id = "reelTEST";

  htmlBody.appendChild(canvas);

  canvas.width = symbolWidth;
  canvas.height = symbolHeight * amountOfSymbolsOnReel;

  const randomSymbol = () => {
    return Math.floor(Math.random() * symbols.length);
  };

  const displayedSymbols = [];
  for (let i = 0; i < amountOfSymbolsOnReel; i++) {
    const symbolSelector = randomSymbol();
    // symbolOrderIndex.push(symbolSelector);

    const img = symbolList[symbolSelector].cloneNode(false) as HTMLImageElement;
    if (img && ctx) {
      displayedSymbols.push(
        new Promise((resolve, reject) => {
          img.onload = function () {
            ctx.drawImage(img, 0, i * symbolHeight);
            resolve(undefined); // have to provide it with some value
          };
          img.onerror = function (err) {
            reject(err);
          };
        })
      );
    }
  }
  // console.log(symbolOrderIndex);
  
  return Promise.all(displayedSymbols).then(
    () => canvas
  ) as Promise<HTMLCanvasElement>;
}
