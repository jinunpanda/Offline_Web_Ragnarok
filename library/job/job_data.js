/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 */

/* Job Id of every Img Character */
let jobID = [
	0, 		// Novice
	1, 		// Swordsman
	7, 		// Knight
	121, 	// Santa Suit
	122		// Tuxedo
];

//Note: Santa Suit and Tuxedo is just a character_changer
let jobName = [
	"Novice", 
	"Swordsman", 
	"Knight", 
	"Santa Suit", 
	"Tuxedo"
];

// Character Images
let character = {
	img: {
        // Novice image
        novice: {
            idle:   ["img/character/novice/novice_idle_down.png", "img/character/novice/novice_idle_up.png", "img/character/novice/novice_idle_left.png", "img/character/novice/novice_idle_right.png"],
            sit:    ["img/character/novice/novice_sit_down.png", "img/character/novice/novice_sit_up.png", "img/character/novice/novice_sit_left.png", "img/character/novice/novice_sit_right.png"],
            walk:   ["img/character/novice/novice_walk_down.gif", "img/character/novice/novice_walk_up.gif", "img/character/novice/novice_walk_left.gif", "img/character/novice/novice_walk_right.gif"],
            dead:   ["img/character/novice/novice_dead.png"],
            hit:    ["img/character/novice/novice_hit.png"],
            attack: ["img/character/novice/novice_attack.gif"],
            cast:   ["img/character/novice/novice_cast_down.gif", "img/character/novice/novice_cast_up.gif", "img/character/novice/novice_cast_left.gif", "img/character/novice/novice_cast_right.gif"],
            halter: {
                idle:   ["img/character/novice/novice_halter_idle_down.png", "img/character/novice/novice_halter_idle_up.png", "img/character/novice/novice_halter_idle_left.png", "img/character/novice/novice_halter_idle_right.png"],
                sit:    ["img/character/novice/novice_halter_sit_down.png", "img/character/novice/novice_halter_sit_up.png", "img/character/novice/novice_halter_sit_left.png", "img/character/novice/novice_halter_sit_right.png"],
                walk:   ["img/character/novice/novice_halter_walk_down.gif", "img/character/novice/novice_halter_walk_up.gif", "img/character/novice/novice_halter_walk_left.gif", "img/character/novice/novice_halter_walk_right.gif"],
            },
        },

       // Swordsman image
        swordsman: {
            idle:   ["img/character/swordsman/swordsman_idle_down.png", "img/character/swordsman/swordsman_idle_up.png", "img/character/swordsman/swordsman_idle_left.png", "img/character/swordsman/swordsman_idle_right.png"],
            sit:    ["img/character/swordsman/swordsman_sit_down.png", "img/character/swordsman/swordsman_sit_up.png", "img/character/swordsman/swordsman_sit_left.png", "img/character/swordsman/swordsman_sit_right.png"],
            walk:   ["img/character/swordsman/swordsman_walk_down.gif", "img/character/swordsman/swordsman_walk_up.gif", "img/character/swordsman/swordsman_walk_left.gif", "img/character/swordsman/swordsman_walk_right.gif"],
            dead:   ["img/character/swordsman/swordsman_dead.png"],
            hit:    ["img/character/swordsman/swordsman_hit.png"],
            attack: ["img/character/swordsman/swordsman_attack.gif"],
            cast:   ["img/character/swordsman/swordsman_cast_down.gif", "img/character/swordsman/swordsman_cast_up.gif", "img/character/swordsman/swordsman_cast_left.gif", "img/character/swordsman/swordsman_cast_right.gif"],
            halter: {
                idle:   ["img/character/swordsman/swordsman_halter_idle_down.png", "img/character/swordsman/swordsman_halter_idle_up.png", "img/character/swordsman/swordsman_halter_idle_left.png", "img/character/swordsman/swordsman_halter_idle_right.png"],
                sit:    ["img/character/swordsman/swordsman_halter_sit_down.png", "img/character/swordsman/swordsman_halter_sit_up.png", "img/character/swordsman/swordsman_halter_sit_left.png", "img/character/swordsman/swordsman_halter_sit_right.png"],
                walk:   ["img/character/swordsman/swordsman_halter_walk_down.gif", "img/character/swordsman/swordsman_halter_walk_up.gif", "img/character/swordsman/swordsman_halter_walk_left.gif", "img/character/swordsman/swordsman_halter_walk_right.gif"],
            },
        },
        
        // Knight image
        knight: {
            idle:   ["img/character/knight/knight_idle_down.png", "img/character/knight/knight_idle_up.png", "img/character/knight/knight_idle_left.png", "img/character/knight/knight_idle_right.png"],
            sit:    ["img/character/knight/knight_sit_down.png", "img/character/knight/knight_sit_up.png", "img/character/knight/knight_sit_left.png", "img/character/knight/knight_sit_right.png"],
            walk:   ["img/character/knight/knight_walk_down.gif", "img/character/knight/knight_walk_up.gif", "img/character/knight/knight_walk_left.gif", "img/character/knight/knight_walk_right.gif"],
            dead:   ["img/character/knight/knight_dead.png"],
            hit:    ["img/character/knight/knight_hit.png"],
            attack: ["img/character/knight/knight_attack.gif"],
            cast:   ["img/character/knight/knight_cast_down.gif", "img/character/knight/knight_cast_up.gif", "img/character/knight/knight_cast_left.gif", "img/character/knight/knight_cast_right.gif"],
            halter: {
                idle:   ["img/character/knight/knight_halter_idle_down.png", "img/character/knight/knight_halter_idle_up.png", "img/character/knight/knight_halter_idle_left.png", "img/character/knight/knight_halter_idle_right.png"],
                sit:    ["img/character/knight/knight_halter_sit_down.png", "img/character/knight/knight_halter_sit_up.png", "img/character/knight/knight_halter_sit_left.png", "img/character/knight/knight_halter_sit_right.png"],
                walk:   ["img/character/knight/knight_halter_walk_down.gif", "img/character/knight/knight_halter_walk_up.gif", "img/character/knight/knight_halter_walk_left.gif", "img/character/knight/knight_halter_walk_right.gif"],
            },
        },

        // Santa Suit image
        santa_suit: {
            idle:   ["img/character/santa_suit/santa_suit_idle_down.png", "img/character/santa_suit/santa_suit_idle_up.png", "img/character/santa_suit/santa_suit_idle_left.png", "img/character/santa_suit/santa_suit_idle_right.png"],
            walk:   ["img/character/santa_suit/santa_suit_walk_down.gif", "img/character/santa_suit/santa_suit_walk_up.gif", "img/character/santa_suit/santa_suit_walk_left.gif", "img/character/santa_suit/santa_suit_walk_right.gif"],
            sit:    ["img/character/santa_suit/santa_suit_sit_down.png", "img/character/santa_suit/santa_suit_sit_up.png", "img/character/santa_suit/santa_suit_sit_left.png", "img/character/santa_suit/santa_suit_sit_right.png"],
        },

        // Tuxedo image
        tuxedo: {
            idle:   ["img/character/tuxedo/tuxedo_idle_down.png", "img/character/tuxedo/tuxedo_idle_up.png", "img/character/tuxedo/tuxedo_idle_left.png", "img/character/tuxedo/tuxedo_idle_right.png"],
            walk:   ["img/character/tuxedo/tuxedo_walk_down.gif", "img/character/tuxedo/tuxedo_walk_up.gif", "img/character/tuxedo/tuxedo_walk_left.gif", "img/character/tuxedo/tuxedo_walk_right.gif"],
            sit:    ["img/character/tuxedo/tuxedo_sit_down.png", "img/character/tuxedo/tuxedo_sit_up.png", "img/character/tuxedo/tuxedo_sit_left.png", "img/character/tuxedo/tuxedo_sit_right.png"],
        },

        // Game Master image
        gm: {
            idle:   ["img/character/gm/gm_idle_down.png", "img/character/gm/gm_idle_up.png", "img/character/gm/gm_idle_left.png", "img/character/gm/gm_idle_right.png"],
            walk:   ["img/character/gm/gm_walk_down.gif", "img/character/gm/gm_walk_up.gif", "img/character/gm/gm_walk_left.gif", "img/character/gm/gm_walk_right.gif"],
            cast:   ["img/character/gm/gm_cast_down.gif", "img/character/gm/gm_cast_up.gif", "img/character/gm/gm_cast_left.gif", "img/character/gm/gm_cast_right.gif"],
            sit:    ["img/character/gm/gm_sit_down.png", "img/character/gm/gm_sit_up.png", "img/character/gm/gm_sit_left.png", "img/character/gm/gm_sit_right.png"],
            attack: ["img/character/gm/gm_attack_right.gif"],
            dead:   ["img/character/gm/gm_dead_left.png"],
            hit:    ["img/character/gm/gm_hit_left.png"],
        },
    },
}