// import { buildSlotMachine } from "./add_element.js";
// import { spinTheReels } from "./spin_reel.js";
class Manager {
    constructor(states) {
        this.states = states;
        this.state = this.states[0];
    }
    logState() {
        return console.log(`Game State: ${this.state}`);
    }
    setState(state) {
        console.log(`Changing state from ${this.state} to ${state}`);
        return (this.state = state);
    }
    listStates() {
        return this.states;
    }
    getStateIndex() {
        return this.states.indexOf(this.state);
    }
    BuildSlotMachine(reels) {
        this.state = this.states[1];
        return reels
            ? console.log(`Building ${reels} reels`)
            : console.log("Building 1 reel");
    }
    SpinReels() {
        this.state = this.states[4];
        return console.log("Spinning the reels");
    }
}
const GameStates = [
    "INIT",
    "BUILD_SLOT_MACHINE",
    "MAKE_REEL",
    "READY",
    "SPIN",
    "SPIN_COMPLETE",
    "SCORE",
    "SCORE_COMPLETE",
];
export const GameMNG = new Manager(GameStates);
//# sourceMappingURL=testing_classes.js.map