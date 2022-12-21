/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 * 
 * Change log date:
 * Dec 4, 2022 by @Author
 */

/* 
 * 	Savepoint function 
 */
function savepoint(x, y) {
	let savepoint = {x,y};
	let time_delay = 100;
	setTimeout(function() {
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
	},time_delay);
	return savepoint;
}
/* Call the savepoint once it refresh or load the page */
savepoint(player.savepoint.x, player.savepoint.y);

/* 
 *	Warp function 
 */
function warp(x, y) {
	this.x = x;
	this.y = y;
	let time_delay = 100;
	setTimeout(function() {
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
	},time_delay);
	return "You are warped in coordinates of " + x + ", " + y;
}

/* 
 *	Add_comma to numbers function {String}
 */
function add_comma(num) {
	this.num = num;
	return num.toLocaleString();
}

/*
 * Sending command function
 */
function command() {
	let forms_input = DOM.forms["myForm"]["chat_box"];
	let chat_date = new Date();
	try {
		switch(forms_input.value.toLowerCase()) {
			case null:
			case "":
			break;
			/* Display current time */
			case "@time":
				mes("Current time : " + chat_date.toLocaleString(), "self");
			break;
			/* Used halter function via command */
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
			/* Display the current position of player */
			break;
			case "@command":
			case "@commands":
				switch(SELECT.HAS_GM_STATUS) {
					case "GM-":
						mes("Showing commands: <br>" +
							"@item {itemID} {amount}, @teleport/@jump, @clearinventory, @broadcast {Text to Broadcast}" +
							", @logtouchevent, @commands, @halter/@mount, @time, /where, /sit, /stand, ", "self");
					break;
					default:
						mes("Showing commands: <br>" +
							"@commands, @halter/@mount, @time, /where, /sit, /stand, ", "self");
					break;
				}
			break;
			case "/where":
				mes("Current coordinates : " + walking_x + ", " + walking_y, "gm");
			break;
			/* Make stand the player */
			case "/stand":
				idle_change_image();
			break;
			/* Make sit the player */
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
			/* For GM Command or Player */
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

/*
 * Halter function
 */
function halter() {
	switch(isHalter) {
		case false:
			isHalter = true;
			mes("Halter is activated.", "self");
			idle_change_image();
		break;
		default:
			isHalter = false;
			mes("Halter is Deactivated.", "self");
			idle_change_image();
		break;
	}
}

/* Different types of messages design
 * How to use?
 * Ans: mes("your message", "types");
 * For types: self, normal, error, event, lvlup, exp, gm
 */
function mes(mes, type) {
	let message 			= {mes, type};
	let max_length_chat 	= player.maxChat;
	let curr_length_chat	= ELEM_SELECTOR_ALL(SELECT.CHAT_CONTAINER + " div").length;
	let child_num 			= ELEM_SELECTOR(SELECT.CHAT_CONTAINER);
	let chat_container 		= ELEM_SELECTOR_ALL(SELECT.CHAT_CONTAINER);
	let forms_input 		= DOM.forms["myForm"]["chat_box"];
	let types 				= ["self", "event", "lvlup", "error", "normal", "gm", "exp"];

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

/*
 *	Fullscreen function
 */
let isFullScreen = false;
function fullScreenVid() {
  const body0 = ELEM_SELECTOR_ALL(SELECT.BODY)[0];
  const requestFullscreen = body0.requestFullscreen || body0.webkitRequestFullscreen || body0.msRequestFullscreen;
  const exitFullscreen = DOM.exitFullscreen || DOM.webkitExitFullscreen || DOM.msExitFullscreen;
  switch (isFullScreen) {
    case true:
      isFullScreen = false;
      exitFullscreen.call(DOM);
      mes("Fullscreen Mode: Off", "self");
      break;
    case false:
      isFullScreen = true;
      requestFullscreen.call(body0);
      mes("Fullscreen Mode: On", "self");
      break;
  }
}

/* 
 *	Onstart message function 
 */
let onStartMessageCounterHandler;
let onStartMessageCounterNum = 0;
let one_hour_time_interval = 1000*60*60;
function onStartMessage() {
	let onStartMessage = {};
	onStartMessage.init = function() {
		mes(date, "self");
		mes("For more information, kindly visit the player_data.js", "lvlup");
		onStartMessageCounterHandler = setInterval(function() {
			onStartMessageCounterNum += 1;
			switch(onStartMessageCounterNum) {
				case 2:
					announce("Game Alert : This is an offline game!");
				break;
				case 6:
					announce("Game Alert : I hope you will like it!");
				break;
				case 10:
					announce("Game Alert : Have a nice day :)");
				break;
				case 11:
					/* Stop th counter */
					clearInterval(onStartMessageCounterHandler);
				break;
				default:
					// Do nothing
				break;
			}
		}, 1000);
	}
	onStartMessage.everyHour = function() {
		announce("Game Alert : This is an offline game. have a nice day!");
	}
	return onStartMessage;
}

/* 
 *	Game loop message function for every 1 hr 
 */
setInterval(function() {
	OnStartMessage = new onStartMessage();
	OnStartMessage.everyHour();
}, one_hour_time_interval);

/* 
 *	Fade out effect function 
 */
function fadeOut_effect() {
  const divCon = DOM.createElement('div');
  divCon.classList.add("fadeOut_effect");
  divCon.style.display = "block";
  DOM.body.appendChild(divCon);

  /* Fadeout effect */
  setTimeout(function() {
    divCon.style.opacity = "0";
    divCon.style.transition = "0.2s";
    setTimeout(function() {
      DOM.body.removeChild(divCon);
    }, 300);
  }, 210);
}


/* GM announcement function */
announceRemovalCount = 0;
function announce(mesAnnounce) {
	var announce = {mesAnnounce};

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
	let display_received_items = {itemIdNumbers, itemIdNumberAmount};
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
	return display_received_items;
}

/* Item creation function */
getitem=(itemIdNum, itemIdAmount)=> {
	let getitem = {itemIdNum, itemIdAmount};
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
				/* Lets check if the item are not on the inventory */
				if (con_itemIdNum.indexOf(itemIdNum) < 0) {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the usable inventory if its on max limit */
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
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div>' + 
							'<div id="itemAmountID' + itemIdNum +  '" class="itemAmount"></div>'
						);
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
				/* If the item are already existed then just update the amount */
				else {
					/* Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
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
			}
			catch(err) {
				mes(err.stack, "error");
			}
		break;
		case "equipment":
			try {
				/* Lets check if the item are not on the inventory */
				if (equ_itemIdNum.indexOf(itemIdNum) < 0) {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the usable inventory if its on max limit */
					else if (equ_itemIdNum.length > inventory_per_tab_max_storage) {
						/* ERROR_MESSAGE: Inventory is full */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[1], "error");
					}
					/* And after several checking, create the items */
					else {
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Store the data of the item to @array */
						equ_itemIdNum.push(itemIdNum);
						equ_itemAmountData.push(itemIdAmount);
						equ_itemHTMLData.push(
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div>' + 
							'<div id="itemAmountID' + itemIdNum +  '" class="itemAmount equ_itemAmount"></div>'
						);
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
				else {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the usable inventory if its on max limit */
					else if (equ_itemIdNum.length > inventory_per_tab_max_storage) {
						/* ERROR_MESSAGE: Inventory is full */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[1], "error");
					}
					/* And after several checking, create the items */
					else {
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Store the data of the item to @array */
						equ_itemIdNum.push(itemIdNum);
						equ_itemAmountData.push(itemIdAmount);
						equ_itemHTMLData.push(
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div>' + 
							'<div id="itemAmountID' + itemIdNum +  '" class="itemAmount equ_itemAmount"></div>'
						);
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
			}
			catch(err) {
				mes(err.stack, "error");
			}
		break;
		case "etc":
			try {
				/* Lets check if the item are not on the inventory */
				if (etc_itemIdNum.indexOf(itemIdNum) < 0) {
					/* Before creating the item, Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					/* Afterwards, Check the usable inventory if its on max limit */
					else if (etc_itemIdNum.length > inventory_per_tab_max_storage) {
						/* ERROR_MESSAGE: Inventory is full */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[1], "error");
					}
					/* And after several checking, create the items */
					else {
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Store the data of the item to @array */
						etc_itemIdNum.push(itemIdNum);
						etc_itemAmountData.push(itemIdAmount);
						etc_itemHTMLData.push(
							'<div class="itemImg"><img src="' + getitemimg(itemIdNum) + '" /></div>' + 
							'<div id="itemAmountID' + itemIdNum +  '" class="itemAmount etc_itemAmount"></div>'
						);
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
					}
				}
				/* If the item are already existed then just update the amount */
				else {
					/* Lets check the additional weight if exceeding to limit */
					if (total_additional_weight > player_weight_max) {
						/* ERROR_MESSAGE: Generating item failed! exceeding to weight limit */
						mes(SELECT.ERROR_MESSAGE_INVENTORY[0], "error"); 
					}
					else {
						/* Search this itemIDNum at @array and update the amount */
						searchItemNumInsideArray = etc_itemIdNum.indexOf(itemIdNum);
						etc_itemAmountData[searchItemNumInsideArray] += itemIdAmount;
						/* Update the current weight of player */
						player_current_weight += additional_weight;
						/* Display the notification popup of receiving item */
						display_received_items(itemIdNum, itemIdAmount);
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



/* ========================== SKILLS FUNCTION ==================================== */
var skill = {
	teleport: {
		sp_consumption: 100,
		cooldown: 2 * 1000, // 2 seconds
	},
};

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
	/* add a drag feature for the container note: class name of container*/
	DragThisContainer("box_container_teleport");
	/* ok button function */
	$(".ok_button").on("click", function() {
		$(".window").remove();
		teleport();
	});
	/* cancel button function */
	$(".cancel_button").on("click", function() {
		$(".window").remove();
	});
}

/* 
 *	Callback for having a touch event for target container
 */
function DragThisContainer(IdentifyClassName) {
	let element = DOM.getElementsByClassName(IdentifyClassName)[0];
	element.addEventListener('touchstart', function(e) {
	  var touch = e.touches[0];
	  var startX = touch.pageX;
	  var startY = touch.pageY;
	  var origX = element.offsetLeft;
	  var origY = element.offsetTop;
	  var deltaX = startX - origX;
	  var deltaY = startY - origY;
	  
	  /* Always add a target title to drag the container */
	  element.addEventListener('touchmove', function(e) {
	  	var touch = e.touches[0];
	    if (e.target.className == "inventory_title" || e.target.className == "game_option_con_title" ||
	    	e.target.className == "box_con_title_teleport") {
	    	element.style.left = (touch.pageX - deltaX) + 'px';
	    	element.style.top = (touch.pageY - deltaY) + 'px';
	    	element.style.opacity = 0.7;
	    }
	    /* Listen and log the touch event */
	    if (log_touch_ev == false) {
	    	// do nothing
	    }
	    else {
	    	mes("left: " + Math.floor((touch.pageX - deltaX)) + "px, top: " + Math.floor((touch.pageY - deltaY)) + 'px', "self");
	    }
	  });
	  element.addEventListener('touchend', function(e) {
	  	element.style.opacity = 1;
	  });
	});
}

/* 
 *	Autoupdate function
 */
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


	var prog_more_hp_info = document.getElementById("prog_more_hp_info");
	var hp_percentage = document.getElementById("hp_percentage");
	var progressWeight = document.getElementById("progressWeight");
	var prog_more_mp_info = document.getElementById("prog_more_mp_info");
	var mp_percentage = document.getElementById("mp_percentage");

	if (more_info_param == true) {

		var weight = document.getElementById("weight");
		var weight_max = document.getElementById("weight_max");
		var weight_con = document.getElementById("weight_con");
		var weight_90_percent = weight_max.innerHTML * 0.9;

		$(SELECT.MORE_JOB_NAME).html(player.job);

		/* for hp */
		prog_more_hp_info.value = $(SELECT.PLAYER_HP_DISPLAY).html();
		$(SELECT.PROG_MORE_HP_INFO).attr("max", $(SELECT.PLAYER_HP_DISPLAY_MAX).html());
		hp_percentage.innerHTML = " " + Math.floor(prog_more_hp_info.value/$(SELECT.PLAYER_HP_DISPLAY_MAX).html()*100) + "%";
		/* for mp */
		prog_more_mp_info.value = $(SELECT.PLAYER_SP_DISPLAY).html();
		$(SELECT.PROG_MORE_MP_INFO).attr("max", $(SELECT.PLAYER_SP_DISPLAY_MAX).html());
		mp_percentage.innerHTML = " " + Math.floor(prog_more_mp_info.value/$(SELECT.PLAYER_SP_DISPLAY_MAX).html()*100) + "%";
		/* for lvl */
		$(SELECT.MORE_INFO_LVL).html($(SELECT.PLAYER_LVL).html());
		// for zeny
		$(SELECT.ZENY).html(player.zeny.toLocaleString());

		// for weight
		$("#weight").html(player_current_weight);
		$("#weight_max").html(player_weight_max);

		if (weight.innerHTML > weight_90_percent || weight.innerHTML == weight_90_percent) {
			$("#weight_con").css("color", "red");
		}
		else {
			$("#weight_con").css("color", "black");
		}

	}

}
setInterval(autoupdate, 16);

// Fetching data to display from Array item database
function AutoUpdateforInventoryData() {
	// for con, equ, and etc
	var i=0;
	var j=0;

	var etc_index = 0;

	while (i < con_itemIdNum.length) {
		ELEM_SELECTOR_ALL("td")[i].innerHTML = con_itemHTMLData[i];
		ELEM_SELECTOR_ALL(".itemAmount")[i].innerHTML = con_itemAmountData[i];
		i++;
	}
	while (j < equ_itemIdNum.length) {
		ELEM_SELECTOR_ALL("#equ_tab_inventory table tr td")[j].innerHTML = equ_itemHTMLData[j];
		ELEM_SELECTOR_ALL(".equ_itemAmount")[j].innerHTML = equ_itemAmountData[j];
		j++;
	}
	while (etc_index < etc_itemIdNum.length) {
		ELEM_SELECTOR_ALL("#etc_tab_inventory table tr td")[etc_index].innerHTML = etc_itemHTMLData[etc_index];
		ELEM_SELECTOR_ALL(".etc_itemAmount")[etc_index].innerHTML = etc_itemAmountData[etc_index];
		etc_index++;
	}
}

/* ============ THIS IS EXPERIMENTAL CODE ============== */

/* Auto Walk */
let AutoWalkCounter = 0;
let AutoWalkCounterHandler;
function AutoWalk() {
	setTimeout(function() {
		touchstart_down();
	}, 1000);
	AutoWalkCounterHandler = setInterval(function() {
		AutoWalkCounter = AutoWalkCounter += 1;
		if (AutoWalkCounter == 6) {
			touchend_down();
			touchstart_left();
		}
		if (AutoWalkCounter == 12) {
			touchend_left();
			touchstart_up();
		}
		if (AutoWalkCounter == 18) {
			touchend_up();
			touchstart_right();
		}
		if (AutoWalkCounter == 24) {
			touchend_right();
			touchstart_down();
			AutoWalkCounter = 0;
		}
	},500);
}
/* ============ ============================ ============== */



