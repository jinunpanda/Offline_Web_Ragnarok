/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 */

window.onload = function(ev) {
	$(SELECT.MAP).html(
		"<div class='player'>" +
			"<img id='player_img' class='player_img' />" +
			'<div class="player_shadow">' + 
		   		'<img src="img/shadow.gif">' +
		  	'</div>' +

		  	/* generating hp and mp of the player */
		  	'<div class="hp_and_mp_container">' +
		  		'<progress value="0" max="2" class="player_hp" id="player_hp"></progress><br>' +
		  		'<progress value="0" max="2" class="player_mp" id="player_sp"></progress>' +
		  	'</div>' +
		"</div>" +

		// player informations container
		'<div id="plyr_informations_box" class="plyr_informations_box">' +
			'<button class="more_info_btn"></button>' +
			'<div class="player_info_con">' +
				'<div id="player_info_con_title" class="player_info_con_title">' +
					// player name
					'<span id="player_name_display" class="player_name"></span>' +
				'</div>' +

				// player lvl, job, experience
				'<div class="player_lvl_job_exp">' +
					'Lv<span id="player_lvl_display" class="player_lvl"></span> / ' +
					'<span id="player_job_display" class="player_job"></span> / ' +
					'Exp <span id="player_exp_display" class="player_exp"></span>' +
				'</div>' +

				// player hp, mp
				'<div class="player_hp_mp_info">' +
					'HP  <span id="hp_current" class="hp_current"></span> / ' +
					'<span id="hp_max" class="hp_max"></span> | ' +
					'SP  <span id="sp_current" class="mp_current"></span> / ' +
					'<span id="sp_max" class="mp_max"></span>' +
				'</div>' +

				// dropdown button for more option
				'<div class="moreBtn"><img class="moreBtnImg" src="img/arrow_down_2.png" /></div>' +
			'</div>' +

			'<div class="moreBtnOptions">' +
				'<button id="openInventory">Items</button>' +
				'<button id="openEquipment">Equips</button>' +
				'<button id="openSkillTree">Skills</button>' +
				'<button id="openStats">Stats</button>' +
				'<button id="openOptions">Options</button>' +
			'</div>' +
		'</div>' +

		// for button controller
		'<div class="btn_controller_con">' +
			'<button class="up" id="up"></button>' +
			'<button class="down" id="down"></button>' +
			'<button class="left" id="left"></button>' +
			'<button class="right" id="right"></button>' +
		'</div>' +

		// mini map indicator
		'<div class="coordinates_container">' +
			'<div class="mini_map_con">' +
				'<div class="mini_map">' +
					'<img class="mini_arrow" src="img/arrow_down.png" />' +
				'</div>' +
			'</div>' +
			'<span id="walking_x_display"></span> <span id="walking_y_display"></span>' +
		'</div>' +

		// skill container 
		'<div id="skill_container" class="skill_container">' +
			'<div id="skill_1" class="skill_icon"></div>' +
			'<div id="skill_2" class="skill_icon"></div>' +
			'<div id="skill_3" class="skill_icon"></div>' +
			'<div id="skill_4" class="skill_icon"></div>' +
			'<div id="skill_5" class="skill_icon"></div>' +
			'<div id="skill_6" class="skill_icon"></div>' +
			'<div id="skill_7" class="skill_icon"><img onclick="oncast_teleport()" src="img/skill_icon/teleport.gif" /></div>' +
		'</div>' +

		// buffs container 
		'<div id="buff_container" class="buff_container"></div>' +

		// chatbox
		'<div id="cht_con" class="cht_con">' +
			'<div id="chat_container" class="chat_container"></div>' +
			'<form class="myform" name="myForm" autocomplete="off" action="javascript:void(0)" method="get" onsubmit="return command()">' +
				'<input data-role="none" placeholder="Type here ..." type="text" name="chat_box" maxlength="28" />' +
			'</form>' +
		'</div>'
	);

	idle_change_image();
	
	// Message from creator of this game
	OnStartMessage = new onStartMessage();
	OnStartMessage.init();

	$(SELECT.MORE_INFO_BTN).on("click", function() {
		var hp_percentage = Math.floor($(SELECT.PLAYER_HP_DISPLAY).html()/$(SELECT.PLAYER_HP_DISPLAY_MAX).html()*100);
		var sp_percentage = Math.floor($(SELECT.PLAYER_SP_DISPLAY).html()/$(SELECT.PLAYER_SP_DISPLAY_MAX).html()*100);
		var zeny = player.zeny;

		if (more_info_param == false) {
			/* set tot true */
			more_info_param = true;
			/* append the more info of the player */
			$(SELECT.PLAYER_INFO_BOX).append(
				"<div class='more_player_info_con'>" +
					"<div id='more_player_info_con_title' class='player_info_con_title'>Basic information</div>" +
					"<div class='more_p_name'>" + player.name + "</div>" +
					"<div class='more_job_name'>" + player.job + "</div>" +
					"<div style='margin-left:5px' class='more_hp_info'>" +
						"HP<progress style='margin-left:10px' id='prog_more_hp_info' value='" + $(SELECT.PLAYER_HP).val() + "' max='" + $(SELECT.PLAYER_HP_DISPLAY_MAX).html() + "' class='prog_more_hp_info'></progress>" +
						"<span id='hp_percentage'> " + hp_percentage + "%</span>" +
					"</div>" +
					"<div style='margin-left:5px' class='more_mp_info'>" +
						"SP<progress style='margin-left:11px' id='prog_more_mp_info' style='margin-left:-1px' value='" + $(SELECT.PLAYER_SP_DISPLAY).html() + "' max='" + $(SELECT.PLAYER_SP_DISPLAY_MAX).html() + "' class='prog_more_hp_info'></progress>" +
						"<span id='mp_percentage'> " + sp_percentage + "%</span>" +
					"</div>" +
					"<div class='more_lvl_info'>Base Lvl <span id='more_info_lvl'>" + $("#player_lvl_display").html() + "</span></div>" +
					"<div class='zeny_and_weight_con'>" +
						"<span id='weight_con'>Weight : <span id='weight'>" + player_current_weight + "</span> / <span id='weight_max'>" + player_weight_max + "</span></span> " +
						"Zeny : <span id='zeny'>" + zeny.toLocaleString() + "</span>z" +
					"</div>" +
				"</div>"
			);

			/* prevent to overcap the zeny from the maxZeny */
			if (zeny > player.maxZeny || zeny == player.maxZeny) {
				$("#zeny").html(player.maxZeny.toLocaleString());
			}
		}
		else {
			/* remove the more information of the player and set to false the param */
			$(SELECT.MORE_INFO_CON).remove();
			more_info_param = false;
		}
	});

	// function to show the more options of player
	isMoreOptionOpen = false;
	$(".moreBtn").on("click", function() {
		var moreBtnImg = document.getElementsByClassName("moreBtnImg")[0];
		if (isMoreOptionOpen == false) {
			isMoreOptionOpen = true;
			$(".moreBtnOptions").toggle();
			$(".moreBtnImg").attr("src", "img/arrow_down_3.png");
		}
		else {
			isMoreOptionOpen = false;
			$(".moreBtnOptions").toggle();
			$(".moreBtnImg").attr("src", "img/arrow_down_2.png");
		}
	});

	// options button functions for toggle full screen and return to save point
	isFullScreen = false;
	
	$("#openOptions").on("click", function() {
		switch(isOpenOptions) {
			case true:
				isOpenOptions = false;
				$(".game_option_con").remove();
			break;
			case false:
				isOpenOptions = true;
				if (isPlayerDead == true) {
					$("body").append(
						'<div id="game_option" class="game_option_con">' +
							'<div class="game_option_con_title">Game option</div>' +
							'<div class="game_option_btn_con">' +
								'<button id="go_to_savepoint" class="game_option_btn">Return to save point</button>' +
								'<button id="return_to_game" class="game_option_btn">Return to game</button>' +
							'</div>' +
						'</div>'
					);
				}
				else {
					$("body").append(
						'<div id="game_option" class="game_option_con">' +
							'<div class="game_option_con_title">Game option</div>' +
							'<div class="game_option_btn_con">' +
								'<button id="fullscreen" class="game_option_btn">Toggle fullscreen (On/Off)</button>' +
								'<button id="return_to_game" class="game_option_btn">Return to game</button>' +
							'</div>' +
						'</div>'
					);
				}
				// ondrag function (identifyClassNmae)
				DragThisContainer("game_option_con");

				// fullscreen functions
				var fullscreen = document.getElementById("fullscreen");
				fullscreen.addEventListener("click", fullScreenVid);

				$("#return_to_game").on("click", function() {
					isOpenOptions = false;
					$(".game_option_con").remove();
				});
			break;
		}
	});

	// open inventory
	$("#openInventory").on("click", function() {
		display_inventory();
	});

	var up = document.getElementById("up");
	var down = document.getElementById("down");
	var left = document.getElementById("left");
	var right = document.getElementById("right");

	left.addEventListener("touchstart", touchstart_left);
	left.addEventListener("touchend", touchend_left);
	right.addEventListener("touchstart", touchstart_right);
	right.addEventListener("touchend", touchend_right);
	up.addEventListener("touchstart", touchstart_up);
	up.addEventListener("touchend", touchend_up);
	down.addEventListener("touchstart", touchstart_down);
	down.addEventListener("touchend", touchend_down);

	// GENERATING HP AND SP OF THE PLAYER BASE FROM HIS LVL
	// and prevent the overlapping of hp from maxLVL limit
	var hp_data_PFO = Math.floor((player.maxLVL * player.hp/1.5) / 1.5); // HP data for preventing overflow from maxLvl
	var sp_data_PFO = Math.floor((player.maxLVL * player.sp/1.5) / 2); // SP data for preventing overflow from maxLvl
	if (player.lvl > player.maxLVL) {
		$(SELECT.PLAYER_HP).val(hp_data_PFO);
		$(SELECT.PLAYER_SP).val(sp_data_PFO);
		$(SELECT.PLAYER_HP).attr("max", hp_data_PFO);
		$(SELECT.PLAYER_SP).attr("max", sp_data_PFO);

		// PLAYER INFO
		$(SELECT.PLAYER_NAME_DISPLAY).html(player.name);
		$(SELECT.PLAYER_LVL_DISPLAY).html(player.maxLVL);
		$(SELECT.PLAYER_JOB_DISPLAY).html(player.job);
		$(SELECT.PLAYER_EXP_DISPLAY).html("1%");

		$(SELECT.PLAYER_HP_DISPLAY).html(hp_data_PFO);
		$(SELECT.PLAYER_HP_DISPLAY_MAX).html(hp_data_PFO);
		$(SELECT.PLAYER_SP_DISPLAY).html(sp_data_PFO);
		$(SELECT.PLAYER_SP_DISPLAY_MAX).html(sp_data_PFO);
	}
	else {
		$(SELECT.PLAYER_HP).val(hp_data);
		$(SELECT.PLAYER_SP).val(sp_data);
		$(SELECT.PLAYER_HP).attr("max", hp_data);
		$(SELECT.PLAYER_SP).attr("max", sp_data);

		// PLAYER INFO
		$(SELECT.PLAYER_NAME_DISPLAY).html(player.name);
		$(SELECT.PLAYER_LVL_DISPLAY).html(player.lvl);
		$(SELECT.PLAYER_JOB_DISPLAY).html(player.job);
		$(SELECT.PLAYER_EXP_DISPLAY).html("1%");

		$(SELECT.PLAYER_HP_DISPLAY).html(hp_data);
		$(SELECT.PLAYER_HP_DISPLAY_MAX).html(hp_data);
		$(SELECT.PLAYER_SP_DISPLAY).html(sp_data);
		$(SELECT.PLAYER_SP_DISPLAY_MAX).html(sp_data);
	}
}

