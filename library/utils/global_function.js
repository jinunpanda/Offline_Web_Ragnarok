/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 * 
 * Change log date:
 * First update - September 26, 2022 by @Author Manuel Sintos
 */

/* Savepoint function */
savepoint=(x, y)=> {
	let savepoint = {};
	savepoint.x = x;
	savepoint.y = y;
	let time_delay = 100;
	setTimeout(()=> {
		/* Set the position of player */
		ELEM_SELECTOR(SELECT.MAP).style.left = map_data.x_coordinate[x] + "px";
		ELEM_SELECTOR(SELECT.MAP).style.top = map_data.y_coordinate[y] + "px";
		ELEM_SELECTOR(SELECT.MAP).style.transition = "0s";
		/* Set the value of x and y coordinates */
		walking_x = x;
		walking_y = y;
		/* Display the value of x and y coordinates on mini-map */
		ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY).innerHTML = x;
		ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY).innerHTML = y;
		/* Set the position of mini arrow */
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.left = mini_map.x_coordinate[x] + "px";
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.top = mini_map.y_coordinate[y] + "px";
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.transition = "0s";
		/* Change the image of the player base from his job */
		idle_change_image();
	},time_delay);
	return savepoint;
}
savepoint(player.savepoint.x, player.savepoint.y);

/* Warp function */
warp=(x, y)=> {
	this.x = x;
	this.y = y;
	let time_delay = 100;
	setTimeout(()=> {
		/* Set the position of player */
		ELEM_SELECTOR(SELECT.MAP).style.left = map_data.x_coordinate[x] + "px";
		ELEM_SELECTOR(SELECT.MAP).style.top = map_data.y_coordinate[y] + "px";
		ELEM_SELECTOR(SELECT.MAP).style.transition = "0s";
		/* Set the value of x and y coordinates */
		walking_x = x;
		walking_y = y;
		/* Display the value of x and y coordinates on mini-map */
		ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY).innerHTML = x;
		ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY).innerHTML = y;
		/* Set the position of mini arrow */
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.left = mini_map.x_coordinate[x] + "px";
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.top = mini_map.y_coordinate[y] + "px";
		ELEM_SELECTOR(SELECT.MINI_ARROW).style.transition = "0s";
		/* Change the image of the player base from his job */
		idle_change_image();
	},time_delay);
	return "You are warped in coordinates of " + x + ", " + y;
}

/* Add_comma to numbers function */
add_comma=(num)=> {
	let number = num;
	return number.toLocaleString();
}

/* Sending command function */
send_chat=()=> {
	let forms_input = document.forms["myForm"]["chat_box"];
	let chat_date = new Date();
	try {
		switch(forms_input.value.toLowerCase()) {
			case null:
			case "":
			break;
			case "@time":
				mes("Current time : " + chat_date.toLocaleString(), "self");
			break;
			case "@halter":
			case "@mount":
				switch(SELECT.HAS_GM_STATUS) {
					case "GM-":
						mes("There is no halter for GM.", "self");
					break;
					default:
						halter();
					break;
				}
			break;
			case "/where":
				mes("Current coordinates : " + walking_x + ", " + walking_y, "gm");
			break;
			case "/stand":
				idle_change_image();
			break;
			case "/sit":
				switch(isSit) {
					case false:
						sit_change_image();
					break;
					default:
						idle_change_image();
					break;
				}
			break;
			default:
				switch(SELECT.HAS_GM_STATUS) {
					case "GM-":
						gm_commands();
					break;
					default:
						mes(player.name + " : " + forms_input.value, "self");
					break;
				}
			break;
		}
	}
	catch(err) {
		mes(err.stack, "error");
	}
	finally {
		/* Reset the chat input value */
		forms_input.value = "";
	}
}

/* Halter function */
halter=()=> {
	try {
		switch(isHalter) {
			case false:
				isHalter = true;
				idle_change_image();
			break;
			default:
				isHalter = false;
				idle_change_image();
			break;
		}
	}
	catch(err) {
		mes(err.stack, "error");
	}
}

/* Different types of messages design
 * How to use?
 * Ans: mes("your message", "types");
 * For types: self, normal, error, event, lvlup, exp, gm
 */
mes=(mes, type)=> {
	let message 			= {};
	message.mes 			= mes;
	message.type 			= type;
	let max_length_chat 		= player.maxChat;
	let curr_length_chat		= ELEM_SELECTOR_ALL(SELECT.CHAT_CONTAINER + " div").length;
	let child_num 			= ELEM_SELECTOR(SELECT.CHAT_CONTAINER);
	let chat_container 		= ELEM_SELECTOR_ALL(SELECT.CHAT_CONTAINER);
	let forms_input 		= document.forms["myForm"]["chat_box"];
	let types 			= ["self", "event", "lvlup", "error", "normal", "gm", "exp"];

	try {
		switch(type) {
			case types[0]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC0 +'">' + mes + '</div>';
			break;
			case types[1]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC1 +'">' + mes + '</div>';
			break;
			case types[2]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC2 +'">' + mes + '</div>';
			break;
			case types[3]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC3 +'">' + mes + '</div>';
			break;
			case types[4]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC4 +'">' + mes + '</div>';
			break;
			case types[5]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC5 +'">' + mes + '</div>';
			break;
			case types[6]:
				ELEM_SELECTOR(SELECT.CHAT_CONTAINER).innerHTML += '<div class="'+ SELECT.TCC7 +'">' + mes + '</div>';
			break;
			default:
				mes("Undefined! Please checked the error at global_function.js at \"mes function\"", "error");
			break;
		}
	}
	catch(err) {
		mes(err.stack, "error");
	}
	finally {
		/* Remove the first child element once it reach to max length limit of chat */
		switch(curr_length_chat) {
			case max_length_chat:
				child_num.removeChild(child_num.firstElementChild);
			break;
		}
		/* always move to the top once you hit the enter */
		chat_container[0].scrollTop = chat_container[0].scrollHeight;
	}
	return message;
}

/* Onstart message function */
onStartMessage=()=> {
	let first_time_interval 	= 2000;
	let second_time_interval 	= 4000;
	mes(date, "self");
	mes("For more information, kindly visit the player_data.js", "lvlup");
	setTimeout(()=> {
		announce("Game Alert : This is an offline game!");
		setTimeout(()=> {
			announce("Game Alert : I hope you will like it!");
			setTimeout(()=> {
				announce("Game Alert : Have a nice day :)");
			}, second_time_interval);
		}, second_time_interval);
	}, first_time_interval);
}

/* Game loop message function for every 1 hr */
let one_hour_time_interval = 1000*60*60;
onLoopMessageInHour=()=> {
	announce("Game Alert : This is an offline game. have a nice day!");
}
setInterval(onLoopMessageInHour, one_hour_time_interval);

/* Fade out effect function */
fadeOut_effect=()=> {
	$(SELECT.BODY).append("<div class='fadeOut_effect'></div>");
	$(SELECT.FADEOUT_EFFECT).show();
	setTimeout(()=> {
		$(SELECT.FADEOUT_EFFECT).fadeOut(200);
	}, 210);
	setTimeout(()=> {
		$(SELECT.FADEOUT_EFFECT).remove();
	}, 500);
}

/* GM announcement function */
announceRemovalCount = 0;
function announce(mesAnnounce) {
	var announce = {};
	announce.mesAnnounce = mesAnnounce;

	// add a 8 seconds to display the announcement
	announceRemovalCount = 8;

	// remove the first announcement
	$(SELECT.ANNOUNCEMENT).remove();

	// add the new announcement
	$(SELECT.MAP).append(
		'<div class="announcement announcement_text_chat_color">' + mesAnnounce + '</div>'
	);
	mes(mesAnnounce, "gm");
	return mesAnnounce;
}

// AUTO REMOVAL FOR ANNOUNCEMENT AND ITEM POPUP NOTIFICATION
// also received item popoup
rip_count_before_to_remove = 0;

setInterval(function() {
	announceRemovalCount -= 1;
	rip_count_before_to_remove -= 1;

	if (announceRemovalCount == 0) {
		$(SELECT.ANNOUNCEMENT).remove();
	}
	if (rip_count_before_to_remove == 0) {
		$(SELECT.RECIEVE_ITEM_POPUP).remove();
	}
}, 1000);

/* ==================== Item creation function ======================== */
/* Get the item name */
getitemname=(item_id_num)=> {
	return item[item_id_num].name;
}
/* Get the item description */
getitemdesc=(item_id_desc)=> {
	return item[item_id_desc].description;
}
/* Get the item img */
getitemimg=(item_id_img)=> {
	return item[item_id_img].img;
}
/* Get the item weight */
getitemweight=(item_id_weight)=> {
	return item[item_id_weight].weight;
}
/* Get the item type */
getitemtype=(item_id_type)=> {
	return item[item_id_type].type;
}

function display_received_items(itemIdNumbers, itemIdNumberAmount) {
	/* Add 5 seconds to remove the item received notification */
	rip_count_before_to_remove = 5;

	// show the popup and message
	$(SELECT.RECIEVE_ITEM_POPUP).remove();
	$("body").append(
		'<div class="recieve_items_popup">' +
			'<div class="recieve_popup_in_border">' +
				'<img src="' + getitemimg(itemIdNumbers) + '">' +
				'<div class="recieve_item_desc">' + getitemname(itemIdNumbers) + ' - ' + itemIdNumberAmount + ' obtained.</div>' +
			'</div>' +
		'</div>'
	);
	mes("You got " + getitemname(itemIdNumbers) + " (" + itemIdNumberAmount + ").", "lvlup");
	mes("Item created.","self");
}

/* Item creation function */
getitem=(itemIdNum, itemIdAmount)=> {
	let getitem = {};
	getitem.itemIdNum = itemIdNum;
	getitem.itemIdAmount = itemIdAmount;
	let additional_weight = itemIdAmount * getitemweight(itemIdNum);
	let total_additional_weight = player_current_weight + additional_weight;
	let searchItemNumInsideArray;

	/* We have 3 different types of items:
	 * - usable
	 * - equipment
	 * - etc
	 */
	switch(getitemtype(itemIdNum)) {
		case "usable":
			try { 
				/* Lets check if the item are existing on the inventory */
				if (con_itemIdNum.indexOf(itemIdNum) > -1) {
					/* Before updating the amount, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* After checking the error, update the amount of item*/
					else {
						/* Search this itemIDNum at @array and update the amount */
						searchItemNumInsideArray = con_itemIdNum.indexOf(itemIdNum);
						con_itemAmountData[searchItemNumInsideArray] += itemIdAmount;
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
				/* If the item are not on the inventory then create the item */
				else {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the usable inventory if on max limit */
					else if (con_itemIdNum.length > inventory_per_tab_max_storage) {
						/* ERROR_MESSAGE: Inventory is full */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[1], "error");
					}
					/* And after several checking, create the items */
					else {
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Store the data of the item to @array */
						con_itemIdNum.push(itemIdNum);
						con_itemAmountData.push(itemIdAmount);
						con_itemHTMLData.push(
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div><div id="itemAmountID' + itemIdNum +  '" class="itemAmount"></div>'
						);
						/* Wrapup all items inside inventory in one array */
						overAllItemInsideInventory.push(itemIdNum);
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
						console.log("[INFO] " + getitemname(itemIdNum) + " was added to your inventory.");
					}
				}
			}
			catch(err) {
				mes(err.stack, "error");
			}
		break;
		case "equipment":
			mes("ERROR: PLEASE CHECK!!", "error");
		break;
		case "etc":
			try {
				/* Lets check if the item are existing on the inventory */
				if (etc_storage.has(itemIdNum)) {
					/* Before updating the amount, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					else {
						/* Search this itemIDNum at @Map array and update the amount */
						let result = etc_storage.get(itemIdNum);
						etc_storage.set(itemIdNum, result += itemIdAmount);
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
				/* If the item are not on the inventory then create the item */
				else {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the etc_storage inventory is on max limit */
					else if (etc_storage.size > inventory_per_tab_max_storage) {
						/* ERROR_MESSAGE: Inventory is full */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[1], "error");
					}
					/* And after several checking, create the items */
					else {
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
						/* Store the data of the item to @Map array */
						etc_storage.set(itemIdNum, itemIdAmount);
						etc_storage_html_data.set(itemIdNum, 
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div><div id="itemAmountID' + itemIdNum +  '" class="itemAmount"></div>'
						);
					}
				}
			}
			catch(err) {
				mes(err.stack, "error");
			}
		break;
	}
	return getitem;
}

/* Fullscreen function */
fullScreenVid=()=> {
	let body0 = ELEM_SELECTOR_ALL(SELECT.BODY)[0];
	switch (isFullScreen) {
		case true:
			isFullScreen = false;
			if (document.exitFullscreen) {document.exitFullscreen();} 
			else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();} 
			else if (document.msExitFullscreen) {document.msExitFullscreen();}
		break;
		case false:
			isFullScreen = true;
			if (body0.requestFullscreen) {body0.requestFullscreen();} 
			else if (body0.webkitRequestFullscreen) {body0.webkitRequestFullscreen();} 
			else if (body0.msRequestFullscreen) {body0.msRequestFullscreen();}
		break;
	}
}

/* ========================== SKILLS FUNCTION ==================================== */
var skill = {
	teleport: {
		sp_consumption: 100,
		cooldown: 2 * 1000, // 2 seconds
	},
};

teleport=()=> {
	let x = Math.floor(Math.random() * map_data.x_limit);
	let y = Math.floor(Math.random() * map_data.y_limit);
	/* callback the fadeOut effect */
	fadeOut_effect();
	/* Set the position of player */
	ELEM_SELECTOR(SELECT.MAP).style.left = map_data.x_coordinate[x] + "px";
	ELEM_SELECTOR(SELECT.MAP).style.top = map_data.y_coordinate[y] + "px";
	ELEM_SELECTOR(SELECT.MAP).style.transition = "0s";
	/* Set the value of x and y coordinates */
	walking_x = x;
	walking_y = y;
	/* Display the value of x and y coordinates on mini-map */
	ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY).innerHTML = x;
	ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY).innerHTML = y;
	/* Set the position of mini arrow */
	ELEM_SELECTOR(SELECT.MINI_ARROW).style.left = mini_map.x_coordinate[x] + "px";
	ELEM_SELECTOR(SELECT.MINI_ARROW).style.top = mini_map.y_coordinate[y] + "px";
	ELEM_SELECTOR(SELECT.MINI_ARROW).style.transition = "0s";
	/* Change the image of the player base from his job */
	idle_change_image();
	/* Add a message warp status */
	mes("Warped.", "self");
	return "You are teleported at " + walking_x + ", " + walking_y + " coordinates.";
}



function oncast_teleport() {
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
	/* add a drag feature for the container */
	DragThisContainer("box_container_teleport");

	/* cancel button function */
	$(".cancel_button").on("click", function() {
		$(".window").remove();
	});
}

// callback for having a drag event for container
function DragThisContainer(IdentifyClassName) {
	var dragThisContainer = document.getElementsByClassName(IdentifyClassName)[0];
	dragThisContainer.addEventListener("touchmove", dragThePopUpOptions);
}

function dragThePopUpOptions(WindowEvent) {
	var x = WindowEvent.touches[0].clientX;
	var y = WindowEvent.touches[0].clientY;
	if (WindowEvent.target.className == "game_option_con_title") {
		$(".game_option_con").css({top: y + 40 + 'px', left: x + 'px'});
	}
	if (WindowEvent.target.className == "box_con_title_teleport") {
		$(".box_container_teleport").css({top: y + 40 + 'px', left: x + 'px'});
	}
	if (WindowEvent.target.className == "inventory_title") {
		$(".inventory_container").css({top: y + 40 + 'px', left: x + 'px'});
	}
}


/* AUTOUPDATE */
function autoupdate() {
	hp_data = Math.floor((player.lvl * player.hp/1.5) / 1.5);
	sp_data = Math.floor((player.lvl * player.sp/1.5) / 2);
	

	if (player.lvl > player.maxLVL) {$(SELECT.PLAYER_LVL_DISPLAY).html(player.maxLVL);}
	else {$(SELECT.PLAYER_LVL_DISPLAY).html(player.lvl);}
	
	$(SELECT.PLAYER_JOB_DISPLAY).html(player.job);

	// need to update regarding this exp system
	// $(SELECT.PLAYER_EXP_DISPLAY).html("1%"); 

	$(SELECT.PLAYER_HP_DISPLAY).html($(SELECT.PLAYER_HP).val());
	$(SELECT.PLAYER_HP_DISPLAY_MAX).html($(SELECT.PLAYER_HP_DISPLAY_MAX).html());

	$(SELECT.PLAYER_SP_DISPLAY).html($(SELECT.PLAYER_SP).val());
	$(SELECT.PLAYER_SP_DISPLAY_MAX).html($(SELECT.PLAYER_SP_DISPLAY_MAX).html());

}
setInterval(autoupdate, 16);
