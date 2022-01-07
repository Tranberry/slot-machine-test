export var slotSymbols;
(function (slotSymbols) {
    slotSymbols[slotSymbols["BAR"] = 0] = "BAR";
    slotSymbols[slotSymbols["BELL"] = 1] = "BELL";
    slotSymbols[slotSymbols["CHERRY"] = 2] = "CHERRY";
    slotSymbols[slotSymbols["CROWN"] = 3] = "CROWN";
    slotSymbols[slotSymbols["LEMON"] = 4] = "LEMON";
    slotSymbols[slotSymbols["PLUM"] = 5] = "PLUM";
    slotSymbols[slotSymbols["SEVEN"] = 6] = "SEVEN";
    slotSymbols[slotSymbols["WATERMELON"] = 7] = "WATERMELON";
})(slotSymbols || (slotSymbols = {}));
export const slotSymbolImages = {
    getSlotSymbolList: () => {
        return ['BAR', 'BELL', 'CHERRY', 'CROWN', 'LEMON', 'PLUM', 'SEVEN', 'WATERMELON',];
    },
    BAR: './assets/symbols/Bar_512.png',
    BELL: './assets/symbols/Bell_512.png',
    CHERRY: './assets/symbols/Cherry_512.png',
    CROWN: './assets/symbols/Crown_512.png',
    LEMON: './assets/symbols/Lemon_512.png',
    PLUM: './assets/symbols/Plum_512.png',
    SEVEN: './assets/symbols/Seven_512.png',
    WATERMELON: './assets/symbols/Watermelon_512.png'
};
//# sourceMappingURL=slot_symbols.js.map