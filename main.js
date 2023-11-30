import kaboom from "./libs/unpkg.com_kaboom@3000.1.1_dist_kaboom.mjs";
import { uiManager } from "./utils/UiManager.js";
import { load } from "./utils/loader.js";
kaboom({
    width: 1280,
    height: 720,
    letterbox: true // makes sure when the user resizes aspect ratio is maintained 
})
load.assets()
//creating an object

const scenes = {
    // creating a key with arrow function
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {

    },
    1: () => {

    },
    2: () => {

    },
    3: () => {

    },
    gameover: () => {

    },
    end: () => {

    }

}

// to crreate a scene you need to have a scene function
// also helps to initalize
for (const key in scenes) {
    scene(key, scenes[key])
}

go("menu")