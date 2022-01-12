import { ReelSymbolImages } from "./slot_symbols";
// scaffolding a refactored reel builder, each function will be in its own file
ReelSymbolImages;
export function _preloadImages(ReelSymbolImages) {
    // loop trough all symbols and append them as images to the body
    // perhaps not needing to pass trough the ReelSymbolImages.
    const htmlBody = document.getElementsByTagName("body")[0];
    ReelSymbolImages.forEach((symbol) => {
        const img = new Image();
        img.src = symbol.path;
        img.id = `symbol${symbol.name}`;
        img.classList.add("reel-symbol");
        img.classList.add("preload");
        htmlBody.appendChild(img);
    });
    // Probably don't need to return anything.
    return ReelSymbolImages;
}
export function _chooseReelSymbols(ReelSymbolImages, ReelSymbolAmount, TToggleRandomSwitch) {
    // loop trough all symbols or randomly choose them to fill the reel
    // depending on the amount of symbols on the reel it is vital that we can
    // extract which symbols are on the reel and where they are on the reel.
    const reelSymbols = [];
    const reelSymbolOrderIndex = [];
    let loop = 0;
    if (TToggleRandomSwitch) {
        // randomize the order of the symbols
        for (let i = 0; i < ReelSymbolAmount; i++) {
            const symbolSelector = Math.floor(Math.random() * ReelSymbolImages.length);
            reelSymbolOrderIndex.push(symbolSelector);
        }
    }
    else {
        // use the order of the symbols
        for (let i = 0; i < ReelSymbolAmount; i++) {
            reelSymbolOrderIndex.push(loop);
            loop++;
            if (loop === ReelSymbolImages.length) {
                loop = 0;
            }
        }
    }
    reelSymbolOrderIndex.forEach((symbolSelector) => {
        reelSymbols.push(ReelSymbolImages[symbolSelector]);
    });
    return reelSymbols;
}
export function _makeCanvasImage(ChoosenReelSymbols) {
    // Preferably we would pick the symbols from _chooseReelSymbols and return a
    // promise that resolves to a canvas image.
    return Promise.all(ChoosenReelSymbols);
}
//# sourceMappingURL=new_reel_builder.js.map