/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 */
let DOM = document;
ELEM_SELECTOR=(elem_select)=> {
	this.elem_select = elem_select;
	return DOM.querySelector(elem_select);
}
ELEM_SELECTOR_ALL=(elem_select_all)=> {
	this.elem_select_all = elem_select_all;
	return DOM.querySelectorAll(elem_select_all);
}


var SELECT = {
	PLAYER: 				".player",
	PLAYER_IMG:  			".player_img",
	PLAYER_HP: 				"#player_hp",
	PLAYER_SP: 				"#player_sp",

	PLAYER_NAME_DISPLAY: 	"#player_name_display",
	PLAYER_LVL_DISPLAY: 	"#player_lvl_display",
	PLAYER_JOB_DISPLAY: 	"#player_job_display",
	PLAYER_EXP_DISPLAY: 	"#player_exp_display",

	PLAYER_HP_DISPLAY:  	"#hp_current",
	PLAYER_HP_DISPLAY_MAX:  "#hp_max",
	PLAYER_SP_DISPLAY:  	"#sp_current",
	PLAYER_SP_DISPLAY_MAX:  "#sp_max",

	SIT_BUFF: 				".sit_buffs",
	ZENY: 					"#zeny",

	ANNOUNCEMENT:  			".announcement",

	MAP: 					".map",
	WALKING_X_DISPLAY: 		"#walking_x_display",
	WALKING_Y_DISPLAY: 		"#walking_y_display",
	MINI_ARROW: 			".mini_arrow",
	
    TCC0:               	"player_text_chat_color",
    TCC1:               	"event_text_chat_color",
    TCC2:               	"lvlup_text_chat_color",
    TCC3:               	"error_text_chat_color",
    TCC4:               	"other_text_chat_color",
    TCC5:               	"gm_text_chat_color",
    TCC6:               	"announcement_text_chat_color",
    TCC7:              		"gained_exp_txt_chat_color",

    BODY: 					"body",
    FADEOUT_EFFECT: 		".fadeOut_effect",

    ERROR_MESSAGE: 			"Unabled to used this command.",

    ERROR_MESSAGE_INVENTORY: {
    	[0]: 				"Generating Item is failed!! You are exceeding to your weight limit.",
    	[1]: 				"The Inventory is full.",
    },

    SKILL_SLOT_1: 			"#skill_1",
    SKILL_SLOT_2: 			"#skill_2",
    SKILL_SLOT_3: 			"#skill_3",
    SKILL_SLOT_4: 			"#skill_4",
    SKILL_SLOT_5: 			"#skill_5",
    SKILL_SLOT_6: 			"#skill_6",
    SKILL_SLOT_7: 			"#skill_7",

    RECIEVE_ITEM_POPUP: 	".recieve_items_popup",
    
	// is the player name has a GM sub name
	HAS_GM_STATUS:  		player.name.substr(0, 3),

	// CHAT SELECT ELEMENT
	CHAT_CONTAINER:     	".chat_container",
	ID_CHAT_CONTAINER:     	"#chat_container",

	// MORE BTN
	PLAYER_INFO_BOX: 		".plyr_informations_box",
	MORE_INFO_BTN: 			".more_info_btn",
	MORE_INFO_CON: 			".more_player_info_con",
	MORE_JOB_NAME: 			".more_job_name",
	PROG_MORE_HP_INFO: 		"#prog_more_hp_info",
	PROG_MORE_MP_INFO: 		"#prog_more_mp_info",
	MORE_INFO_LVL: 			"#more_info_lvl",
};

