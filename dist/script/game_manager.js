export * as GM from "./game_manager.js";
import { structureSlotMachine } from "./html_structure.js";
import { reelManager } from "./reel_manager.js";
import { spinTheReels } from "./spin_reel.js";
// setup a game manager state machine
export var GameState;
(function (GameState) {
    GameState[GameState["INIT"] = 0] = "INIT";
    GameState[GameState["BUILD_SLOT_MACHINE"] = 1] = "BUILD_SLOT_MACHINE";
    GameState[GameState["MAKE_REEL"] = 2] = "MAKE_REEL";
    GameState[GameState["READY"] = 3] = "READY";
    GameState[GameState["SPIN"] = 4] = "SPIN";
    GameState[GameState["SPIN_COMPLETE"] = 5] = "SPIN_COMPLETE";
    GameState[GameState["SCORE"] = 6] = "SCORE";
    GameState[GameState["SCORE_COMPLETE"] = 7] = "SCORE_COMPLETE";
})(GameState || (GameState = {}));
export function setState(state) {
    console.log(`Game State: ${state}`);
    return GAMEMANAGER.state = state;
}
export const GAMEMANAGER = {
    state: GameState.INIT,
    logState: function () {
        console.log(`Game State: ${this.state}`);
    },
    buildSlotMachine: (amountReels, selector) => {
        if (amountReels) {
            setState(GameState.BUILD_SLOT_MACHINE);
            // GameState.BUILD_SLOT_MACHINE;
            structureSlotMachine(amountReels, selector);
            setState(GameState.READY);
        }
    },
    createReel: (reelID) => {
        setState(GameState.MAKE_REEL);
        reelManager.createReel(reelID);
        setState(GameState.READY);
    },
    spinReels: () => {
        setState(GameState.SPIN);
        spinTheReels();
    }
};
//# sourceMappingURL=game_manager.js.map