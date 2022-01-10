class ReelSymbol {
    name: string;
    path: string;
    img: HTMLImageElement;
    constructor(name: string) {

      const assetPath = "./assets/symbols/";
      const assetName = `${name.toLowerCase()}_128.png`;

      this.name = name.toUpperCase();
      this.path = `${assetPath}${assetName}`;
      this.img = new Image();
      this.img.src = this.path;
      this.img.classList.add("reel-symbol");
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