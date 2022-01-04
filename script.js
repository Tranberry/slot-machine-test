"use strict";
// get html elment by id #reels
const reels = document.getElementById("reels");
// symbols [id, name, image]
const slotSymbols = [
    [1, "Cherry", "./assets/png/cherry_512.png"],
    [2, "Lemon", "./assets/png/lemon_512.png"],
    [3, "Bell", "./assets/png/bell_512.png"],
    [4, "Seven", "./assets/png/seven_512.png"],
    [5, "Watermelon", "./assets/png/watermelon_512.png"],
    [6, "Crown", "./assets/png/crown_512.png"],
    [7, "Bar", "./assets/png/bar_512.png"],
    [8, "Plum", "./assets/png/plum_512.png"],
];
function generateReel(amount, symbols) {
    const reel = [];
    for (let i = 0; i < amount; i++) {
        reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return reel;
}
const reel1 = generateReel(20, slotSymbols);
const reel2 = generateReel(20, slotSymbols);
const reel3 = generateReel(20, slotSymbols);
// print <img> for each symbol in reel
if (reels) {
    const reel1div = document.createElement("div");
    reel1div.id = "reel1";
    reel1div.className = "reel";
    // reel1div.innerText = "Reel 1";
    reels.appendChild(reel1div);
    reel1.forEach((symbol) => {
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
    // reel2div.innerText = "Reel 2";
    reels.appendChild(reel2div);
    reel2.forEach((symbol) => {
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
    // reel3div.innerText = "Reel 3";
    reels.appendChild(reel3div);
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
// get button#spin and add event listener
const spinButton = document.getElementById("spin");
if (spinButton) {
    spinButton.addEventListener("click", () => {
        // set spin amount
        const spinAmount = Math.floor(Math.random() * reel1.length) * -100 + 100;
        // set style CSS variable for animation
        document.documentElement.style.setProperty("--reel1-position", `${spinAmount}%`);
        document.documentElement.style.setProperty("--reel2-position", `${spinAmount + Math.floor(Math.random() * 3) * 100}%`);
        document.documentElement.style.setProperty("--reel3-position", `${spinAmount - Math.floor(Math.random() * 3) * 100}%`);
    });
}
