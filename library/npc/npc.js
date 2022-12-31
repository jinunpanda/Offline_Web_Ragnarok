/**
 *  Dec 25, 2022
 *  @Author Manuel Sintos
 */

/* Coordinates of NPC to map */
let job_changer_npc_x = 39;
let job_changer_npc_y = 31;

/* ========== RECODE IT LATER, WE ARE JUST GETTING THE CONCEPT =========== */
let is_1st_job_done = false;
let job_options = "~ Swordsman"; // first Option

function job_changer_npc() {
    $(SELECT.MAP).append(
        '<div id="job_changer_npc" class="npc">' +
            '<img src="' + npc[0].img + '">' +
            '<div class="npc_shadow">' + 
                '<img src="img/shadow.gif">' +
            '</div>' +
        '</div>'
    );
    /* Now we will set him to the coordinates that we want */
    $("#job_changer_npc").css({
        left: npc_coordinates.xPos[job_changer_npc_x] + 6 + "px", 
        top: npc_coordinates.yPos[job_changer_npc_y] - 50 + "px",
    });

    /* Click function of job_changer_npc */
    $("#job_changer_npc").on("click", function() {
        if (player.lvl < 10) {
            Job_Changer_NPC_Conversation = new NPC_Conversation();
            Job_Changer_NPC_Conversation.init(npc[0].name, npc[0].mes[0]);
            Job_Changer_NPC_Conversation.addClose();
        }
        else if (isHalter == true) {
            Job_Changer_NPC_Conversation = new NPC_Conversation();
            Job_Changer_NPC_Conversation.init(npc[0].name, npc[0].mes[2]);
            Job_Changer_NPC_Conversation.addClose();
        }
        else if (is_1st_job_done == true) {
            Job_Changer_NPC_Conversation = new NPC_Conversation();
            Job_Changer_NPC_Conversation.init(npc[0].name, npc[0].mes[3]);
            Job_Changer_NPC_Conversation.addClose();
        }
        else {
            Job_Changer_NPC_Conversation = new NPC_Conversation();
            Job_Changer_NPC_Conversation.init(npc[0].name, npc[0].mes[1]);

            job_options = "~ Swordsman";

            $(".npc_container").append(
                /* Job option */
                '<div class="npc_con_yes_no_option">' +
                    '<div class="npc_in_border_yes_no_option">' +
                        '<div class="npc_con_option">' +
                            '<div id="1st_Job_1" class="npc_option npc_option_active">~ Swordsman</div>' +
                            '<div id="1st_Job_2" class="npc_option">~ Magician</div>' +
                            '<div id="1st_Job_3" class="npc_option">~ Archer</div>' +
                            '<div id="1st_Job_4" class="npc_option">~ Acolyte</div>' +
                            '<div id="1st_Job_5" class="npc_option">~ Merchant</div>' +
                            '<div id="1st_Job_6" class="npc_option">~ Thief</div>' +
                            '<div id="1st_Job_7" class="npc_option">~ Super Novice</div>' +
                            '<div id="1st_Job_8" class="npc_option">~ Taekwon</div>' +
                            '<div id="1st_Job_9" class="npc_option">~ Gunslinger</div>' +
                            '<div id="1st_Job_10" class="npc_option">~ Ninja</div>' +
                        '</div>' +
                        '<div class="npc_btn_con">' +
                            '<button class="ok_button">OK</button>' +
                            '<button class="cancel_button">cancel</button>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
                
            $(".npc_option").on("click", function() {
                job_options = $(this).html();
                // remove the class active
                $(".npc_option").removeClass("npc_option_active");
                $(this).addClass("npc_option_active");
            });
            $(".ok_button").on("click", function() {
                if (is_1st_job_done == false) {
                    if (job_options == "~ Swordsman") {
                        is_1st_job_done = true;
                        jobchange(1); // swordsman
                    }
                }
                $(".window").remove();
            });
            $(".cancel_button").on("click", function() {
                $(".window").remove();
            });

        }
    });
}
setTimeout(function() {job_changer_npc();},100);





/* Coordinates of NPC to map */
let healer_npc_x = 42;
let healer_npc_y = 31;
let amount_to_pay = 100000; // 1,000,000 million zeny

function healer_npc() {
    const mapElement = ELEM_SELECTOR(SELECT.MAP);
     $(SELECT.MAP).append(
        '<div id="healer_npc" class="npc">' +
            '<img style="top:52px" src="' + npc[1].img + '">' +
            '<div class="npc_shadow">' + 
                '<img src="img/shadow.gif">' +
            '</div>' +
        '</div>'
    );

    /* Now we will set him to the coordinates that we want */
    $("#healer_npc").css({
        left: npc_coordinates.xPos[healer_npc_x] + 6 + "px", 
        top: npc_coordinates.yPos[healer_npc_y] - 50 + "px",
    });

    /* Click function of healer_npc */
    $("#healer_npc").on("click", function() {

        // For GM only this NPC
        if (SELECT.HAS_GM_STATUS == "GM-" || player.GM_level == true) {

            if (player.zeny > amount_to_pay || player.zeny == amount_to_pay) {
                // and pay a zeny to used this healer NPC
                player.zeny -= amount_to_pay;
                // call the full HP player
                heal_player_full();

                mes(npc[1].mes[0], "exp");
            }
            else {
                Job_Changer_NPC_Conversation = new NPC_Conversation();
                Job_Changer_NPC_Conversation.init(npc[1].name, npc[1].mes[2] + "<br>You need <span style='color:#002bb8'>" + add_comma(amount_to_pay) + "</span>z to Pay me.");
                Job_Changer_NPC_Conversation.addClose();
            }
        }
        else {
            Job_Changer_NPC_Conversation = new NPC_Conversation();
            Job_Changer_NPC_Conversation.init(npc[1].name, npc[1].mes[1]);
            Job_Changer_NPC_Conversation.addClose();
        }
    });
}
setTimeout(function() {healer_npc();},100);
