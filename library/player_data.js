// ==========================================================================================
// January 3, 2021
// @Author Manuel Sintos
//
// Mobile Dimension needed: 640x360
//
// To change your character's image to "GM" 
// just add "GM-" before the name of the player, like this: "GM-Marvin"
// 
// You can also change the GM_Level object below to true or false to use commands that are restricted to GMs only.
// 
// To change your job, select one of the following choices:
// - Novice
// - Swordsman
// - Knight
//
// Special jobs:
// - Santa Suit
// - Tuxedo
// ==========================================================================================

/**
 * Object representing a player's attributes and stats.
 */
player = {
    name:       "Max",          // Name of character
    job:        "Novice",       // job of character
    hp:         650,       	    // life of character
    sp:         110,          	// mana of character
    damage:     1150,			// damage of character
    exp:        1,              // Experience of character
    maxExp:     undefined,      // Max experience of character before to get a lvl up
    lvl:        1,              // current level of character
    maxLVL:     300,            // max level of character
    zeny:       0,              // Money of character
    maxZeny:    5000000000,     // max value of zeny is 5 Billion
    maxChat:    25,
    GM_level:   true,           // to used the all commands of GM (true/false) and other NPC that only restricted to use by GM only
                                // Note: this will override even it is false once the "GM-" subname is implemented
    savepoint: {                
        x:      35,
        y:      31
    },
};

// Status of Player GLOBAL Variables
let walking_x = 0;
let walking_y = 0;
let walking_direction = "down";
let isSit = false;
let isHalter = false; 
let isPlayerDead = false;

let player_weight_multiplyer = 51;
let player_current_weight = 1; // weight of player
let player_weight_max = player.lvl * player_weight_multiplyer;

// more info parameters
let more_info_param = false;

// Arena Status
let is_arena_active = false

// other Global variable
var date = new Date();
let hp_data_computation = (player.hp/1.5) / 1.5;
let sp_data_computation = (player.sp/1.5) / 2;
let hp_data = Math.floor((player.lvl * hp_data_computation));
let sp_data = Math.floor((player.lvl * sp_data_computation));

// more button data
let isOpenInventory = false;
let isOpenEquipments = false;
let isOpenSkills = false;
let isOpenStats = false;
let isOpenOptions = false;

// Inventory Data store at array
// for usable items         /**/    // for Equipment items      /**/    // for etc items
let con_itemIdNum = [];         /**/    let equ_itemIdNum = [];         /**/    let etc_itemIdNum = [];
let con_itemHTMLData = [];      /**/    let equ_itemHTMLData = [];      /**/    let etc_itemHTMLData = [];
let con_itemAmountData = [];    /**/    let equ_itemAmountData = [];    /**/    let etc_itemAmountData = [];


var inventory_per_tab_max_storage = 27; // 28 is the max
var inventory_max_slot = 83; // 28x3 con, equ, and etc.

let overAllItemInsideInventory = [];


let log_touch_ev = false;