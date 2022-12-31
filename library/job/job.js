/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 */

function idle_change_image() {
	let player_character = ELEM_SELECTOR(SELECT.PLAYER_IMG);

	/* Remove the button disabler and shadow of the player */
	$(".btn_controller_disabler").remove();
	$(".player_shadow").show();
	
	/* Change the sit status to false */
	isSit = false;

	/* remove the sit buff */
	$(SELECT.SIT_BUFF).remove();

	if (walking_direction == "left") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			player_character.src = character.img.gm.idle[2];
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				player_character.src = character.img.novice.idle[2];
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.idle[2]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.idle[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.idle[2]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.idle[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.idle[2]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.idle[2]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.idle[2]);
		}
		else {}
	}

	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.idle[3]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.idle[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.idle[3]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.idle[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.idle[3]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.idle[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.idle[3]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.idle[3]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.idle[3]);
		}
		else {}
	}

	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.idle[1]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.idle[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.idle[1]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.idle[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.idle[1]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.idle[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.idle[1]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.idle[1]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.idle[1]);
		}
		else {}
	}

	// this is for walking direction down
	else {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.idle[0]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.idle[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.idle[0]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.idle[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.idle[0]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.idle[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.idle[0]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.idle[0]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.idle[0]);
		}
		else {}
	}
}

function walking_change_image() {

	if (walking_direction == "left") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.walk[2]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.walk[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.walk[2]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.walk[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.walk[2]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.walk[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.walk[2]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.walk[2]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.walk[2]);
		}
		else {}
	}

	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.walk[3]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.walk[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.walk[3]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.walk[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.walk[3]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.walk[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.walk[3]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.walk[3]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.walk[3]);
		}
		else {}
	}

	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.walk[1]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.walk[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.walk[1]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.walk[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.walk[1]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.walk[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.walk[1]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.walk[1]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.walk[1]);
		}
		else {}
	}

	// this is for walking direction down
	else {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.walk[0]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.walk[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.walk[0]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.walk[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.walk[0]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.walk[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.walk[0]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.walk[0]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.walk[0]);
		}
		else {}
	}
}


function sit_change_image() {

	// and disabled the button controller since the player were sitting
	// and hide the player shadow
	$(".btn_controller_con").prepend("<div class='btn_controller_disabler'></div>");
	$(".player_shadow").hide();

	/* change the sit status to true */
	isSit = true;

	// display the sit buff
	$(".buff_container").append(
		'<div class="sit_buffs">' +
			'<img src="img/sit_buff.jpg">' +
		'</div>'
	);

	// for left walking direction
	if (walking_direction == "left") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.sit[2]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.halter.sit[2]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.halter.sit[2]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.halter.sit[2]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.santa_suit.sit[2]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.tuxedo.sit[2]);
		}
		else {}
	}

	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.sit[3]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.halter.sit[3]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.halter.sit[3]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.halter.sit[3]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.santa_suit.sit[3]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.tuxedo.sit[3]);
		}
		else {}
	}

	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.sit[1]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.halter.sit[1]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.halter.sit[1]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.halter.sit[1]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.santa_suit.sit[1]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.tuxedo.sit[1]);
		}
		else {}
	}

	// this is for walking direction down
	else {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.sit[0]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.novice.halter.sit[0]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.swordsman.halter.sit[0]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", player.img.knight.halter.sit[0]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.santa_suit.sit[0]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.tuxedo.sit[0]);
		}
		else {}
	}
}

function cast_change_image() {

	// now were changin the character image as casting skill
	if (walking_direction == "down") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.cast[2]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.novice.cast[2]);
		}
		else {}
	}
	
	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.cast[1]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.novice.cast[1]);
		}
		else {}
	}
	
	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.cast[3]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.novice.cast[3]);
		}
		else {}
	}

	// for left walking direction
	else  {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.gm.cast[2]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", player.img.novice.cast[2]);
		}
		else {}
	}
}

function sit_change_image() {

	// Disabled the button controller since the player were sitting
	// And hide the player shadow
	$(".btn_controller_con").prepend("<div class='btn_controller_disabler'></div>");
	$(".player_shadow").hide();

	/* change the sit status to true */
	isSit = true;

	// display the sit buff
	$(".buff_container").append(
		'<div class="sit_buffs">' +
			'<img src="img/sit_buff.jpg">' +
		'</div>'
	);

	// for left walking direction
	if (walking_direction == "left") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.sit[2]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.sit[2]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.sit[2]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.sit[2]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.sit[2]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.sit[2]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.sit[2]);
		}
		else {}
	}

	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.sit[3]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.sit[3]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.sit[3]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.sit[3]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.sit[3]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.sit[3]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.sit[3]);
		}
		else {}
	}

	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.sit[1]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.sit[1]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.sit[1]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.sit[1]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.sit[1]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.sit[1]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.sit[1]);
		}
		else {}
	}

	// this is for walking direction down
	else {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.sit[0]);
		}
		else if (player.job == "Novice") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.novice.halter.sit[0]);
			}
		}
		else if (player.job == "Swordsman") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.swordsman.halter.sit[0]);
			}
		}
		else if (player.job == "Knight") {
			if (isHalter == false) {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.sit[0]);
			}
			else {
				$(SELECT.PLAYER_IMG).attr("src", character.img.knight.halter.sit[0]);
			}
		}
		else if (player.job == "Santa Suit") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.santa_suit.sit[0]);
		}
		else if (player.job == "Tuxedo") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.tuxedo.sit[0]);
		}
		else {}
	}
}

function cast_change_image() {
	// now were changin the character image as casting skill
	if (walking_direction == "down") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.cast[2]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.novice.cast[2]);
		}
		else {}
	}
	
	else if (walking_direction == "up") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.cast[1]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.novice.cast[1]);
		}
		else {}
	}
	
	else if (walking_direction == "right") {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.cast[3]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.novice.cast[3]);
		}
		else {}
	}

	// for left walking direction
	else  {
		// changing the image base on the job or if he is GM
		if (SELECT.HAS_GM_STATUS == "GM-") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.gm.cast[2]);
		}
		else if (player.job == "Novice") {
			$(SELECT.PLAYER_IMG).attr("src", character.img.novice.cast[2]);
		}
		else {}
	}
}





/* IMPORTANT: ALL CODE BELOW ARE NEED TO RECODED */

/* inside the arena image of player */
function arena_idle_change_image() {
	var player_name = $(".player_name");
	var player_sub_name = player_name.html().substr(0, 3);
	var player_job = document.getElementById("player_job");
	var arena_player_img = document.getElementById("arena_player_img");

	if (player_sub_name == "GM-") {
		arena_player_img.src = character.img.gm.idle[3];
	}
	else if (player_job.innerHTML == "Novice") {
		arena_player_img.src = character.img.idle[3];	
	}
	else {}
}

function arena_walk_change_image() {
	var player_name = $(".player_name");
	var player_sub_name = player_name.html().substr(0, 3);
	var player_job = document.getElementById("player_job");
	var arena_player_img = document.getElementById("arena_player_img");

	if (player_sub_name == "GM-") {
		arena_player_img.src = character.img.gm.walk[3];
	}
	else if (player_job.innerHTML == "Novice") {
		arena_player_img.src = character.img.walk[3];	
	}
	else {}
}

function arena_hit_change_image() {
	var player_name = $(".player_name");
	var player_sub_name = player_name.html().substr(0, 3);
	var player_job = document.getElementById("player_job");
	var arena_player_img = document.getElementById("arena_player_img");

	if (player_sub_name == "GM-") {
		arena_player_img.src = character.img.gm.hit[0];
	}
	else if (player_job.innerHTML == "Novice") {
		arena_player_img.src = character.img.hit[0];	
	}
	else {}
}

function arena_dead_change_image() {
	var player_name = $(".player_name");
	var player_sub_name = player_name.html().substr(0, 3);
	var player_job = document.getElementById("player_job");
	var arena_player_img = document.getElementById("arena_player_img");

	if (player_sub_name == "GM-") {
		arena_player_img.src = character.img.gm.dead[0];
	}
	else if (player_job.innerHTML == "Novice") {
		arena_player_img.src = character.img.dead[0];	
	}
	else {}
}

function arena_attack_change_image() {
	var player_name = $(".player_name");
	var player_sub_name = player_name.html().substr(0, 3);
	var player_job = document.getElementById("player_job");
	var arena_player_img = document.getElementById("arena_player_img");

	if (player_sub_name == "GM-") {
		arena_player_img.src = character.img.gm.attack[0];
	}
	else if (player_job.innerHTML == "Novice") {
		arena_player_img.src = character.img.attack[0];	
	}
	else {}
}