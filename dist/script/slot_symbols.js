class ReelSymbol {
    constructor(name, weight = 1.0) {
        const assetPath = "./assets/symbols/";
        const assetName = `${name.toLowerCase()}_128.png`;
        this.name = name.toUpperCase();
        this.weight = weight;
        this.path = `${assetPath}${assetName}`;
        this.img = new Image();
        this.img.src = this.path;
        this.img.classList.add("reel-symbol");
        // experimental promises
        this.on_loaded = new Promise((resolve, reject) => {
            this.img.onload = () => {
                resolve(this.img);
            };
            this.img.onerror = () => {
                reject();
            };
        });
        // end experimental promises
    }
}
export const ReelSymbolImages = [
    new ReelSymbol("BAR"),
    new ReelSymbol("BELL"),
    new ReelSymbol("CHERRY"),
    new ReelSymbol("CROWN"),
    new ReelSymbol("LEMON"),
    new ReelSymbol("PLUM"),
    new ReelSymbol("SEVEN"),
    new ReelSymbol("WATERMELON"),
];
export function reelSymbolLoop(arraySymbols, loopTimes) {
    const length = arraySymbols.length;
    const loops = loopTimes;
    let j = 0;
    for (let i = 0; i < loops; i++) {
        console.log(arraySymbols[j]);
        j++;
        if (j === length) {
            j = 0;
        }
    }
    return j;
}
//# sourceMappingURL=slot_symbols.js.map