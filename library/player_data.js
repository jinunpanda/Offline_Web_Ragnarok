/**
 *  January 3, 2021
 *  @Author Manuel Sintos
 * 
 * Mobile Dimension needed: 640x360
 * 
 * To change you character as "GM"
 * just add a "GM-" beside the name of the player
 * ex.
 * "GM-Marvin"
 * 
 * To Change your Job just change the job as the following choices:
 * - Novice
 * - Swordsman
 * - Knight
 */

player = {
    name:       "GM-MAXX",       // Name of character
    job:        "Knight",       // job of character
    hp:         1150,       	// life of character
    sp:         140,          	// mana of character
    damage:     1150,			// damage of character
    exp:        1,              // Experience of character 
    lvl:        270,            // current level of character
    maxLVL:     270,            // max level of character
    zeny:       2000000000,     // Money of character
    maxZeny:    2500000000,     // max value of zeny is 2.5 Billion
    maxChat:    25,
    savepoint: {
        x:      35,
        y:      31
    },
    img: 
    {
        // for novice image
        novice: {
            idle:   ["img/novice/novice_idle_down.png", "img/novice/novice_idle_up.png", "img/novice/novice_idle_left.png", "img/novice/novice_idle_right.png"],
            sit:    ["img/novice/novice_sit_down.png", "img/novice/novice_sit_up.png", "img/novice/novice_sit_left.png", "img/novice/novice_sit_right.png"],
            walk:   ["img/novice/novice_walk_down.gif", "img/novice/novice_walk_up.gif", "img/novice/novice_walk_left.gif", "img/novice/novice_walk_right.gif"],
            dead:   ["img/novice/novice_dead.png"],
            hit:    ["img/novice/novice_hit.png"],
            attack: ["img/novice/novice_attack.gif"],
            cast:   ["img/novice/novice_cast_down.gif", "img/novice/novice_cast_up.gif", "img/novice/novice_cast_left.gif", "img/novice/novice_cast_right.gif"],
            halter: {
                idle:   ["img/novice/novice_halter_idle_down.png", "img/novice/novice_halter_idle_up.png", "img/novice/novice_halter_idle_left.png", "img/novice/novice_halter_idle_right.png"],
                sit:    ["img/novice/novice_halter_sit_down.png", "img/novice/novice_halter_sit_up.png", "img/novice/novice_halter_sit_left.png", "img/novice/novice_halter_sit_right.png"],
                walk:   ["img/novice/novice_halter_walk_down.gif", "img/novice/novice_halter_walk_up.gif", "img/novice/novice_halter_walk_left.gif", "img/novice/novice_halter_walk_right.gif"],
            },
        },

       // for swordsman image
        swordsman: {
            idle:   ["img/swordsman/swordsman_idle_down.png", "img/swordsman/swordsman_idle_up.png", "img/swordsman/swordsman_idle_left.png", "img/swordsman/swordsman_idle_right.png"],
            sit:    ["img/swordsman/swordsman_sit_down.png", "img/swordsman/swordsman_sit_up.png", "img/swordsman/swordsman_sit_left.png", "img/swordsman/swordsman_sit_right.png"],
            walk:   ["img/swordsman/swordsman_walk_down.gif", "img/swordsman/swordsman_walk_up.gif", "img/swordsman/swordsman_walk_left.gif", "img/swordsman/swordsman_walk_right.gif"],
            dead:   ["img/swordsman/swordsman_dead.png"],
            hit:    ["img/swordsman/swordsman_hit.png"],
            attack: ["img/swordsman/swordsman_attack.gif"],
            cast:   ["img/swordsman/swordsman_cast_down.gif", "img/swordsman/swordsman_cast_up.gif", "img/swordsman/swordsman_cast_left.gif", "img/swordsman/swordsman_cast_right.gif"],
            halter: {
                idle:   ["img/swordsman/swordsman_halter_idle_down.png", "img/swordsman/swordsman_halter_idle_up.png", "img/swordsman/swordsman_halter_idle_left.png", "img/swordsman/swordsman_halter_idle_right.png"],
                sit:    ["img/swordsman/swordsman_halter_sit_down.png", "img/swordsman/swordsman_halter_sit_up.png", "img/swordsman/swordsman_halter_sit_left.png", "img/swordsman/swordsman_halter_sit_right.png"],
                walk:   ["img/swordsman/swordsman_halter_walk_down.gif", "img/swordsman/swordsman_halter_walk_up.gif", "img/swordsman/swordsman_halter_walk_left.gif", "img/swordsman/swordsman_halter_walk_right.gif"],
            },
        },
        
        // for knight image
        knight: {
            idle:   ["img/knight/knight_idle_down.png", "img/knight/knight_idle_up.png", "img/knight/knight_idle_left.png", "img/knight/knight_idle_right.png"],
            sit:    ["img/knight/knight_sit_down.png", "img/knight/knight_sit_up.png", "img/knight/knight_sit_left.png", "img/knight/knight_sit_right.png"],
            walk:   ["img/knight/knight_walk_down.gif", "img/knight/knight_walk_up.gif", "img/knight/knight_walk_left.gif", "img/knight/knight_walk_right.gif"],
            dead:   ["img/knight/knight_dead.png"],
            hit:    ["img/knight/knight_hit.png"],
            attack: ["img/knight/knight_attack.gif"],
            cast:   ["img/knight/knight_cast_down.gif", "img/knight/knight_cast_up.gif", "img/knight/knight_cast_left.gif", "img/knight/knight_cast_right.gif"],
            halter: {
                idle:   ["img/knight/knight_halter_idle_down.png", "img/knight/knight_halter_idle_up.png", "img/knight/knight_halter_idle_left.png", "img/knight/knight_halter_idle_right.png"],
                sit:    ["img/knight/knight_halter_sit_down.png", "img/knight/knight_halter_sit_up.png", "img/knight/knight_halter_sit_left.png", "img/knight/knight_halter_sit_right.png"],
                walk:   ["img/knight/knight_halter_walk_down.gif", "img/knight/knight_halter_walk_up.gif", "img/knight/knight_halter_walk_left.gif", "img/knight/knight_halter_walk_right.gif"],
            },
        },

        // for GM image
        gm: {
            idle:   ["img/gm/gm_idle_down.png", "img/gm/gm_idle_up.png", "img/gm/gm_idle_left.png", "img/gm/gm_idle_right.png"],
            walk:   ["img/gm/gm_walk_down.gif", "img/gm/gm_walk_up.gif", "img/gm/gm_walk_left.gif", "img/gm/gm_walk_right.gif"],
            cast:   ["img/gm/gm_cast_down.gif", "img/gm/gm_cast_up.gif", "img/gm/gm_cast_left.gif", "img/gm/gm_cast_right.gif"],
            sit:    ["img/gm/gm_sit_down.png", "img/gm/gm_sit_up.png", "img/gm/gm_sit_left.png", "img/gm/gm_sit_right.png"],
            attack: ["img/gm/gm_attack_right.gif"],
            dead:   ["img/gm/gm_dead_left.png"],
            hit:    ["img/gm/gm_hit_left.png"],
        },
    },

   
};

var map_data = {
    x_limit: 66,
    y_limit: 65,
    speedWalk: "0.3s",
    
    // 66 for x and 65 for y coordinates
    x_coordinate: [
        0, 0, -40, -80, -120, -160, -200, -240, -280, -320, -360, -400, 
        -440, -480, -520, -560, -600, -640, -680, -720, -760, -800, -840, -880, 
        -920, -960, -1000, -1040, -1080, -1120, -1160, -1200, -1240, -1280, 
        -1320, -1360, -1400, -1440, -1480, -1520, -1560, -1600, -1640, -1680, 
        -1720, -1760, -1800, -1840, -1880, -1920, -1960, -2000, -2040, -2080, -2120, 
        -2160, -2200, -2240, -2280, -2320, -2360, -2400, -2440, -2480, -2520, -2560, -2600
    ],
    y_coordinate: [
        0, 0, -40, -80, -120, -160, -200, -240, -280, -320, -360, -400, -440, -480,
        -520, -560, -600, -640, -680, -720, -760, -800, -840, -880, -920, -960, -1000, 
        -1040, -1080, -1120, -1160, -1200, -1240, -1280, -1320, -1360, -1400, -1440, 
        -1480, -1520, -1560, -1600, -1640, -1680, -1720, -1760, -1800, -1840, -1880, 
        -1920, -1960, -2000, -2040, -2080, -2120, -2160, -2200, -2240, -2280, -2320, 
        -2360, -2400, -2440, -2480, -2520, -2560,
    ],
};

var mini_map = {
    x_limit: 66,
    y_limit: 65,

   // 66 for x and 65 for y coordinates
    x_coordinate: [
        0, 1.9, 3.86, 5.79, 7.72, 9.65, 11.58, 13.51, 15.44, 16.74, 18.6, 20.46, 
        22.32, 24.18, 26.04, 27.9, 29.76, 31.62, 33.48, 35.34, 37.2, 
        39.06, 40.92, 42.78, 44.64, 46.5, 48.36, 50.22, 52.08, 53.94, 55.80, 57.66, 
        59.52, 61.38, 63.24, 65.10, 66.96, 68.82, 70.68, 72.54, 74.4, 
        76.26, 78.12, 79.98, 81.84, 83.7, 85.56, 87.42, 89.28, 91.14, 93, 94.86, 96.72, 
        98.58, 100.44, 102.30, 104.16, 106.02, 107.88, 109.74, 111.60, 
        113.46, 115.32, 117.18, 119.04, 120.9, 122.76, 
    ],
    y_coordinate: [
        0, 1.4, 2.8, 4.2, 5.6, 7, 8.4, 9.8, 11.2, 12.6, 14, 15.4, 
        16.8, 18.2, 19.6, 21, 22.4, 23.8, 25.2, 26.6, 28, 
        29.4, 30.8, 32.2, 33.6, 35, 36.4, 37.8, 39.8, 40.6, 40, 43.4, 
        44.8, 46.2, 47.6, 49, 50.4, 51.8, 53.2, 54.6, 56, 
        57.4, 58.8, 60.2, 61.6, 63, 64.4, 65.8, 67.2, 68.6, 70, 
        71.4, 72.8, 74.2, 75.6, 77, 78.4, 79.8, 81.2, 82.6, 84, 
        85.4, 86.8, 88.2, 89.6, 91, 
    ],
};

var npc_coordinates = {
     xPos: [
            300, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 
            780, 820, 860, 900, 940, 980, 1020, 1060, 1100, 1140, 1180, 1220, 1260,
            1300, 1340, 1380, 1420, 1460, 1500, 1540, 1580, 1620, 1660, 1700, 
            1740, 1780, 1820, 1860, 1900, 1940, 1980, 2020, 2060, 2100, 2140, 2180,
            2220, 2260, 2300, 2340, 2380, 2420, 2460, 2500, 2540, 2580, 2620, 2660, 
            2700, 2740, 2780, 2820, 2860
     ],     // 66 x
     yPos: [
            190, 190, 230, 270, 310, 350, 390, 430, 470, 510, 550, 590, 630, 670, 
            710, 750, 790, 830, 870, 910, 950, 990, 1030, 1070, 1110, 1150,
            1190, 1230, 1270, 1310, 1350, 1390, 1430, 1470, 1510, 1550, 1590, 1630, 
            1670, 1710, 1750, 1790, 1830, 1870, 1910, 1950, 1990, 2030, 2070, 2110, 2150,
            2190, 2230, 2270, 2310, 2350, 2390, 2430, 2470, 2510, 2550, 2590, 
            2630, 2670, 2710 
    ], // 65 y
};

// Status of Player GLOBAL Variables
walking_x = 0;
walking_y = 0;
walking_direction = "down";
isSit = false;
isHalter = false; 
isPlayerDead = false;
player_current_weight = 1; // weight of player
player_weight_max = player.lvl * 50;

// Arena Status
is_arena_active = false

// other Global variable
var date = new Date();
hp_data = Math.floor((player.lvl * player.hp/1.5) / 1.5);
sp_data = Math.floor((player.lvl * player.sp/1.5) / 2);

// more button data
isOpenInventory = false;
isOpenEquipments = false;
isOpenSkills = false;
isOpenStats = false;
isOpenOptions = false;

// Inventory Data store at array
// for usable items         /**/    // for Equipment items      /**/    // for etc items
con_itemIdNum = [];         /**/    equ_itemIdNum = [];         /**/    etc_itemIdNum = [];
con_itemHTMLData = [];      /**/    equ_itemHTMLData = [];      /**/    etc_itemHTMLData = [];
con_itemAmountData = [];    /**/    equ_itemAmountData = [];    /**/    etc_itemAmountData = [];


// Experiment Database management
// etc items storage map
etc_storage             = new Map(); // item_id and item_id_amount
etc_storage_html_data   = new Map(); // item html data (ex. img)


var inventory_per_tab_max_storage = 27;

overAllItemInsideInventory = [];