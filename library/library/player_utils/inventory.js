/**
 *	August 21, 2022
 *	@Author Manuel Sintos
 */

// interval handler for inventory autoupdate
var AutoUpdateForDataInventory;


function display_inventory() {
	if (isOpenInventory) {
		isOpenInventory = false;
		$(".inventory_container").remove();

		clearInterval(AutoUpdateForDataInventory);
	}
	else {
		isOpenInventory = true;
		$(SELECT.MAP).append(
			'<div class="inventory_container">' +
				'<div class="inventory_title">Inventory</div>' +
				'<div class="insideInv">' +
					'<div class="vertical_buttons_con">' +
						'<div id="conBtn" class="vertBtn vertical_buttons_active">' +
							'C\r' +
							'o\r' +
							'n\r' +
						'</div>' +

						'<div id="equBtn" class="vertBtn">' +
							'E\r' +
							'q\r' +
							'u\r' +
						'</div>' +

						'<div id="etcBtn" class="vertBtn">' +
							'E\r' +
							't\r' +
							'c\r' +
						'</div>' +
					'</div>' +	

					// for con
					'<div style="display:block" id="con_tab_inventory" class="itemsContainer">' +
						'<table class="con_items">' +
							'<tr>' +
								'<td onclick="slotID(this.id)" id="slot1"></td>' +
								'<td onclick="slotID(this.id)" id="slot2"></td>' +
								'<td onclick="slotID(this.id)" id="slot3"></td>' +
								'<td onclick="slotID(this.id)" id="slot4"></td>' +
								'<td onclick="slotID(this.id)" id="slot5"></td>' +
								'<td onclick="slotID(this.id)" id="slot6"></td>' +
								'<td onclick="slotID(this.id)" id="slot7"></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
						'</table>' +
					'</div>' +

					// for con
					'<div style="display:none" id="equ_tab_inventory" class="itemsContainer">' +
						'<table class="equ_items">' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
						'</table>' +
					'</div>' +

					// for con
					'<div style="display:none" id="etc_tab_inventory" class="itemsContainer">' +
						'<table class="etc_items">' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
								'<td></td>' +
							'</tr>' +
						'</table>' +
					'</div>' +
				'</div>'+
			'</div>'
		);

		/* for all vertical inventory button */
		$("#conBtn").on("click", function() {
			$(this).addClass("vertical_buttons_active");
			$("#equBtn").removeClass("vertical_buttons_active");
			$("#etcBtn").removeClass("vertical_buttons_active");

			$("#con_tab_inventory").show();
			$("#equ_tab_inventory").hide();
			$("#etc_tab_inventory").hide();
		});

		$("#equBtn").on("click", function() {
			$(this).addClass("vertical_buttons_active");
			$("#conBtn").removeClass("vertical_buttons_active");
			$("#etcBtn").removeClass("vertical_buttons_active");

			$("#con_tab_inventory").hide();
			$("#equ_tab_inventory").show();
			$("#etc_tab_inventory").hide();
		});

		$("#etcBtn").on("click", function() {
			$(this).addClass("vertical_buttons_active");
			$("#conBtn").removeClass("vertical_buttons_active");
			$("#equBtn").removeClass("vertical_buttons_active");

			$("#con_tab_inventory").hide();
			$("#equ_tab_inventory").hide();
			$("#etc_tab_inventory").show();
		});

		// ondrag function (identifyClassNmae)
		// you will drag the container once you started on title of the inventory
		DragThisContainer("inventory_container");

		// set the autoupdate
		AutoUpdateForDataInventory = setInterval(AutoUpdateforInventoryData, 16); // 60 fps
	}
}

function close_inventory() {
	if (isOpenInventory == true) {
		display_inventory(); // toggle function
		return "Inventory is forced to closed.";
	}
}
