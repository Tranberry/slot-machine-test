"use strict";
// type SymbolID = number;
// type SymbolName = string;
// type SymbolImagePath = string;
// type SymbolInfo = [SymbolID, SymbolName, SymbolImagePath];
// // type Slots = SymbolInfo[];
// // slot symbols [id, name, image]
// const slotSymbols: SymbolInfo[] = [
//   [1, "Cherry", "./assets/png/cherry_512.png"],
//   [2, "Lemon", "./assets/png/lemon_512.png"],
//   [3, "Bell", "./assets/png/bell_512.png"],
//   [4, "Seven", "./assets/png/seven_512.png"],
//   [5, "Watermelon", "./assets/png/watermelon_512.png"],
//   [6, "Crown", "./assets/png/crown_512.png"],
//   [7, "Bar", "./assets/png/bar_512.png"],
//   [8, "Plum", "./assets/png/plum_512.png"],
// ];
// // generate a reel with X amount of symbols
// function generateReel(amount: number, symbols: SymbolInfo[]): SymbolInfo[] {
//   const reel: [number, string, string][] = [];
//   for (let i = 0; i < amount; i++) {
//     reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
//   }
//   return reel;
// }
// push 3 symbols to 3 reels
const preLoadedReel1 = generateReel(10, slotSymbols);
const preLoadedReel2 = generateReel(10, slotSymbols);
const preLoadedReel3 = generateReel(10, slotSymbols);
// self-executing function, to populate html with reels
(function populateReels() {
    const reels = document.getElementById("reels");
    if (reels) {
        const reel1div = document.createElement("div");
        reel1div.id = "reel1";
        reel1div.className = "reel";
        reels.appendChild(reel1div);
        preLoadedReel1.forEach((symbol) => {
            const img = document.createElement("img");
            img.classList.add("slot-symbol");
            img.classList.add("reel1");
            img.src = symbol[2];
            img.alt = symbol[1];
            img.title = symbol[1];
            reel1div.appendChild(img);
        }, []);
        const reel2div = document.createElement("div");
        reel2div.id = "reel2";
        reel2div.classList.add("reel");
        reels.appendChild(reel2div);
        preLoadedReel2.forEach((symbol) => {
            const img = document.createElement("img");
            img.classList.add("slot-symbol");
            img.classList.add("reel2");
            img.src = symbol[2];
            img.alt = symbol[1];
            img.title = symbol[1];
            reel2div.appendChild(img);
        }, []);
        const reel3div = document.createElement("div");
        reel3div.id = "reel3";
        reel3div.classList.add("reel");
        reels.appendChild(reel3div);
        preLoadedReel3.forEach((symbol) => {
            const img = document.createElement("img");
            img.classList.add("slot-symbol");
            img.classList.add("reel3");
            img.src = symbol[2];
            img.alt = symbol[1];
            img.title = symbol[1];
            reel3div.appendChild(img);
        }, []);
    }
})();
let reel1pos = 0;
let reel2pos = 0;
let reel3pos = 0;
// add event listener to #spin <button>
const htmlButtonSpin = document.getElementById("spin");
if (htmlButtonSpin) {
    // add 500 to each reel position
    htmlButtonSpin.addEventListener("click", () => {
        reel1pos += 500;
        reel2pos += 400;
        reel3pos += 600;
        // add css variables to html for each reel
        const htmlRoot = document.documentElement;
        if (htmlRoot) {
            htmlRoot.style.setProperty("--reel1-speed", `${reel1pos}%`);
            htmlRoot.style.setProperty("--reel2-speed", `${reel2pos}%`);
            htmlRoot.style.setProperty("--reel3-speed", `${reel3pos}%`);
        }
        // add 20 symbols to each reel
        const reel1 = generateReel(20, slotSymbols);
        const reel2 = generateReel(20, slotSymbols);
        const reel3 = generateReel(20, slotSymbols);
        const reel1div = document.getElementById("reel1");
        const reel2div = document.getElementById("reel2");
        const reel3div = document.getElementById("reel3");
        // populate html with new symbols
        if (reel1div) {
            reel1.forEach((symbol) => {
                const img = document.createElement("img");
                img.classList.add("slot-symbol");
                img.classList.add("reel1");
                img.src = symbol[2];
                img.alt = symbol[1];
                img.title = symbol[1];
                reel1div.appendChild(img);
            });
        }
        if (reel2div) {
            reel2.forEach((symbol) => {
                const img = document.createElement("img");
                img.classList.add("slot-symbol");
                img.classList.add("reel2");
                img.src = symbol[2];
                img.alt = symbol[1];
                img.title = symbol[1];
                reel2div.appendChild(img);
            });
        }
        if (reel3div) {
            reel3.forEach((symbol) => {
                const img = document.createElement("img");
                img.classList.add("slot-symbol");
                img.classList.add("reel3");
                img.src = symbol[2];
                img.alt = symbol[1];
                img.title = symbol[1];
                reel3div.appendChild(img);
            });
        }
    });
}
