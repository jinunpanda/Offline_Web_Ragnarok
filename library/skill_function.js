/**
 *	Dec 25, 2022
 *	@Author Manuel Sintos
 */

var skill = {
	teleport: {
		sp_consumption: 100,
		cooldown: 2 * 1000, // 2 seconds
	},
};

/* ========================== SKILLS FUNCTION ==================================== */
/* Teleport skill */
function teleport() {
	let x = Math.floor(Math.random() * map_data.x_limit);
	let y = Math.floor(Math.random() * map_data.y_limit);
	/* callback the fadeOut effect */
	fadeOut_effect();
	/* Set the position of player */
	let map = ELEM_SELECTOR(SELECT.MAP);
	map.style.left = map_data.x_coordinate[x] + "px";
	map.style.top = map_data.y_coordinate[y] + "px";
	map.style.transition = "0s";

	/* Set the value of x and y coordinates */
	walking_x = x;
	walking_y = y;

	/* Display the value of x and y coordinates on mini-map */
	let walkingXDisplay = ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY);
	let walkingYDisplay = ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY);
	walkingXDisplay.innerHTML = walking_x;
	walkingYDisplay.innerHTML = walking_y;

	/* Set the position of mini arrow */
	let miniArrow = ELEM_SELECTOR(SELECT.MINI_ARROW);
	miniArrow.style.left = mini_map.x_coordinate[x] + "px";
	miniArrow.style.top = mini_map.y_coordinate[y] + "px";
	miniArrow.style.transition = "0s";

	/* Change the image of the player base from his job */
	idle_change_image();
	/* Add a message warp status */
	mes("Warped.", "self");
	return "You are teleported at " + walking_x + ", " + walking_y + " coordinates.";
}

let rand_teleport = "Random Area"; 
function oncast_teleport() {
	let player_sp = $(SELECT.PLAYER_SP).val();

	if (isHalter == true) {
		mes("Unabled to use this skill.", "error");
	}
	else {
		/* Check if the SP of player are not enought to used this skill */
		if (player_sp == 0 || player_sp < skill.teleport.sp_consumption) {
			// go back to idle position of player
			idle_change_image();
			mes("You have low SP!! Unabled to use this skill.", "error");
		}
		else {
			/* Then used this is skil if the SP have enought SP */
			if (player_sp > skill.teleport.sp_consumption || player_sp == skill.teleport.sp_consumption) {
				$(SELECT.PLAYER_SP).val(player_sp - skill.teleport.sp_consumption);

				/* append the popup option */
				$(SELECT.BODY).append(
					'<div class="window">' +
						'<div class="box_container_teleport">' +
							'<div class="box_con_in_border">' +
								'<div class="box_con_title_teleport">Select an Area to Warp</div>' +
									'<div class="box_con_option_teleport">' +
										'<div id="random" class="option_teleport option_teleport_active">Random Area</div>' +
										'<div id="cancel" class="option_teleport">Cancel</div>' +
									'</div>' +
								'<div class="btn_con_teleport">' +
									'<button class="ok_button">OK</button>' +
									'<button class="cancel_button">cancel</button>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>'
				);

				
				/* add a drag feature for the container note: class name of container*/
				DragThisContainer("box_container_teleport");



				/* ok button function */
				$(".ok_button").on("click", function() {

					switch(rand_teleport) {
						case "Random Area":
							$(".window").remove();
							teleport();
						break;
						case "Cancel":
							$(".window").remove();
						break;
					}	
				});
				/* cancel button function */
				$(".cancel_button").on("click", function() {
					$(".window").remove();
				});
			}
		}
	}
}