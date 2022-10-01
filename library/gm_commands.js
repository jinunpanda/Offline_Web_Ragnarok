/**
 *	January 14, 2021
 *	@Author Manuel Sintos
 */

function gm_commands() {
	var forms_input = document.forms["myForm"]["chat_box"];
	var at_item = forms_input.value.toLowerCase().substr(0, 5);

	var digit4_id_num = forms_input.value.toLowerCase().substr(6, 4);
	var digit4_id_value = forms_input.value.toLowerCase().substr(11, forms_input.value.length);

	var digit3_id_num = forms_input.value.toLowerCase().substr(6, 3);
	var digit3_id_value = forms_input.value.toLowerCase().substr(10, forms_input.value.length);

	var broadcast_side_txt = forms_input.value.toLowerCase().substr(0, 10);
	var txt_to_broadcast = forms_input.value.substr(11, forms_input.value.length);

	if (at_item == "@item") {
		if (digit3_id_num == "607") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "error");}
			else {getitem(607, parseInt(digit3_id_value));}
		}
		else if (digit3_id_num == "512") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "error");}
			else {getitem(512, parseInt(digit3_id_value));}
		}
		else if (digit3_id_num == "513") {
			if (digit3_id_value == "" || digit3_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit3_id_value)) {mes("Invalid input value.", "error");}
			else {getitem(513, parseInt(digit3_id_value));}
		}
		else if (digit4_id_num == "7227") {
			if (digit4_id_value == "" || digit4_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit4_id_value)) {mes("Invalid input value.", "error");}
			else {getitem(7227, parseInt(digit4_id_value));}
		}
		else if (digit4_id_num == "5377") {
			if (digit4_id_value == "" || digit4_id_value == "0") {mes("Please input a value.", "self")}
			else if (isNaN(digit4_id_value)) {mes("Invalid input value.", "error");}
			else {getitem(5377, parseInt(digit4_id_value));}
		}
		else {
			mes("Generating item failed.", "error");
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
		mes("Inventory is cleared.", "self");

		// for usable items
		con_itemIdNum = [];
		con_itemHTMLData = [];
		con_itemAmountData = [];

		// for Equipment items
		equ_itemIdNum = [];
		equ_itemHTMLData = [];
		equ_itemAmountData = [];

		// for etc items
		etc_itemIdNum = [];
		etc_itemHTMLData = [];
		etc_itemAmountData = [];

		var i=0;
		while (i < 40) {
			document.getElementsByTagName("td")[i].innerHTML = con_itemHTMLData[i];
			document.getElementsByClassName("itemAmount")[i].innerHTML = con_itemAmountData[i];
			i++;
		}

	}
	else if (broadcast_side_txt == "@broadcast") {
		announce(player.name + " : " + txt_to_broadcast, "gm");
	}
	else {
		mes(player.name + " : " + forms_input.value, "self");
	}
}