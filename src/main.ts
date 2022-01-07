import { GM } from './game_manager.js';
// import { spinTheReels } from './spin_reel.js';

GM.GAMEMANAGER.logState();
GM.GAMEMANAGER.buildSlotMachine(3);
GM.GAMEMANAGER.logState();

GM.GAMEMANAGER.createReel(1);

// TODO: move to game manager
// spinTheReels();
GM.GAMEMANAGER.spinReels();