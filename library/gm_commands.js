/**
 *	January 14, 2021
 *	@Author Manuel Sintos
 */

function gm_commands() {
	var forms_input = document.forms["myForm"]["chat_box"];
	var at_item = forms_input.value.toLowerCase().substr(0, 5);

	var digit4_id_num = forms_input.value.toLowerCase().substr(6, 4);
	var digit4_id_value = forms_input.value.toLowerCase().substr(11, forms_input.value.length);

	var digit3_id_num = forms_input.value.substr(6, 3);
	var digit3_id_value = forms_input.value.toLowerCase().substr(10, forms_input.value.length);

	var broadcast_side_txt = forms_input.value.toLowerCase().substr(0, 10);
	var txt_to_broadcast = forms_input.value.substr(11, forms_input.value.length);






	if (at_item == "@item") {
		if (digit3_id_num == "607") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(607, parseInt(digit3_id_value));}
		}
		else if (digit3_id_num == "512") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(512, parseInt(digit3_id_value));}
		}
		else if (digit3_id_num == "513") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(513, parseInt(digit3_id_value));}
		}
		else if (digit3_id_num == "671") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(671, parseInt(digit3_id_value));}
		}
		else if (digit4_id_num == "7227") {
			if (digit4_id_value == "" || digit4_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit4_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(7227, parseInt(digit4_id_value));}
		}

		else if (digit4_id_num == "5377") {
			if (digit4_id_value == "" || digit4_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit4_id_value)) {mes("Invalid input value.", "self");}
			else {getitem(5377, parseInt(digit4_id_value));}
		}
		else {
			mes("@item failed.", "self");
		}
	}
	else if (forms_input.value.toLowerCase() == "@teleport" || forms_input.value.toLowerCase() == "@jump") {
		switch(is_arena_active) {
			case true:
				mes(SELECT.ERROR_MESSAGE, "error");
			break;
			case false:
				teleport();
			break;
		}
	}
	else if (forms_input.value.toLowerCase() == "@clearinventory") {
		// Reset array data for usable items
		con_itemIdNum = [];
		con_itemHTMLData = [];
		con_itemAmountData = [];

		// Reset array data for Equipment items
		equ_itemIdNum = [];
		equ_itemHTMLData = [];
		equ_itemAmountData = [];

		// Reset array data for etc items
		etc_itemIdNum = [];
		etc_itemHTMLData = [];
		etc_itemAmountData = [];

		// reset the player weight
		player_current_weight = 1; // weight of player
		player_weight_max = player.lvl * 50;

		var c = 0;
		switch(isOpenInventory) {
			case true:
				while (c < inventory_max_slot) {
					// Do not display the html element of all array data eg. con, equ, and etc items.
					document.getElementsByTagName("td")[c].innerHTML = "";
					c++;
				}
			break;
			default:
				// do nothing if the inventory is not open
			break;
		}
		// Display a message once you cleared the inventory
		mes("Inventory is cleared.", "self");
	}
	else if (broadcast_side_txt == "@broadcast") {
		announce(player.name + " : " + txt_to_broadcast, "gm");
	}
	/* This is experimental */
	else if (forms_input.value.toLowerCase() == "@autowalk") {
		AutoWalk();
	}
	else if (forms_input.value.toLowerCase() == "@logtouchevent") {
		switch (log_touch_ev) {
			case true:
				log_touch_ev = false;
				mes("Listening to touch event: Off", "self");
			break;
			default:
				log_touch_ev = true;
				mes("Listening to touch event: On", "self");
			break;
		}
	}
	else {
		mes(player.name + " : " + forms_input.value, "self");
	}
}