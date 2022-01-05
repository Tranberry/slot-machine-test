type SymbolID = number;
type SymbolName = string;
type SymbolImagePath = string;
type SymbolInfo = [SymbolID, SymbolName, SymbolImagePath];
// type Slots = SymbolInfo[];

// slot symbols [id, name, image]
const slotSymbols: SymbolInfo[] = [
  [1, "Cherry", "./assets/png/cherry_512.png"],
  [2, "Lemon", "./assets/png/lemon_512.png"],
  [3, "Bell", "./assets/png/bell_512.png"],
  [4, "Seven", "./assets/png/seven_512.png"],
  [5, "Watermelon", "./assets/png/watermelon_512.png"],
  [6, "Crown", "./assets/png/crown_512.png"],
  [7, "Bar", "./assets/png/bar_512.png"],
  [8, "Plum", "./assets/png/plum_512.png"],
];

// generate a reel with X amount of symbols
function generateReel(amount: number, symbols: SymbolInfo[]): SymbolInfo[] {
  const reel: [number, string, string][] = [];
  for (let i = 0; i < amount; i++) {
    reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return reel;
}

const myReel1 = generateReel(20, slotSymbols);

// create canvas element inside #reels div
function createCanvasFromReel(
  reelNumber: number,
  reel: SymbolInfo[]
): HTMLCanvasElement {
  const reelContainer = document.getElementById("reels");
  const createCanvas = document.createElement("canvas");
  const ctx = createCanvas.getContext("2d");

  const size = 512;

  createCanvas.width = size;
  createCanvas.height = reel.length * size;
  // createCanvas.id = "reel" + reelNumber;
  createCanvas.classList.add("reel");

  // for every symbol in reel, create img element
  for (let i = 0; i < reel.length; i++) {
    const img = new Image();
    const offsetY = i * size;

    img.src = reel[i][2];
    img.width = size;
    img.height = size;

    if (ctx) {
      img.onload = function () {
        ctx.drawImage(img, 0, offsetY, size, size);
      };
    }
  }

  if (reelContainer) {
    reelContainer.appendChild(createCanvas);
  }
  return createCanvas;
}

const reelTest = createCanvasFromReel(1, myReel1);

// reelTest.toDataURL("image/png");

// add reel section to #reels div
function createReelSections(reelNumber: number, reel: HTMLCanvasElement): void {
  const reelContainer = document.getElementById("reels");
  if (reelContainer) {
    const sectionElement = document.createElement("section");
    sectionElement.id = "reel" + reelNumber;
    sectionElement.classList.add("reel");

    const _reel = reel.toDataURL("image/png");
    
    reelContainer.appendChild(sectionElement);
    // set background image from canvas
    sectionElement.style.backgroundImage =
      "url(" + _reel + ")";
  }
}
createReelSections(1, reelTest);