import { GM } from "./game_manager.js";
import { makeCanvasImage } from "./reel_builder.js";
// import { GameMNG } from "./testing_classes.js";
// Builds the html slot machine with X number of reels
GM.GAMEMANAGER.buildSlotMachine(1);
// adds a spin button and manage the spin 'animation'
GM.GAMEMANAGER.spinReels();
// const imgSrc = makeCanvasImage();
// GameMNG.logState();
// GameMNG.setState(GameMNG.listStates()[1]);
// console.log(GameMNG);
// *****************************************************************************
makeCanvasImage().then((canvas) => {
    const dataURL = canvas.toDataURL("image/png");
    const testImg = document.createElement("img");
    const reelDiv = document.querySelector(".reel");
    testImg.src = dataURL;
    testImg.id = "testImg";
    if (reelDiv) {
        // set url to css variable
        // document.body.style.setProperty("--reel-image", `url(${dataURL})`);
        // set background to --reel-image
        reelDiv.style.backgroundImage = `url(${dataURL})`;
    }
    document.body.appendChild(testImg);
});
//# sourceMappingURL=main.js.map