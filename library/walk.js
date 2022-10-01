/**
 *	Sept 17, 2020
 *	@Author Manuel Sintos
 */


/* FUNCTION FOR THE RIGHT */
function PLAYER_MOVE_RIGHT() {
    walking_x = walking_x += 1;
    $(SELECT.WALKING_X_DISPLAY).html(walking_x);

    if (walking_x == 67) {
        setTimeout(function() {
            walking_x = walking_x -= 1;
            $(SELECT.WALKING_X_DISPLAY).html(walking_x);
        }, 0); 
    }
    if (walking_x) {
        // moving the character to the map
        $(SELECT.MAP).css({
            transition: map_data.speedWalk,
            left: map_data.x_coordinate[walking_x] + "px"
        });

        // FOR THE MINI MAP
        $(SELECT.MINI_ARROW).css({
            left: mini_map.x_coordinate[walking_x] + "px",
            transition: map_data.speedWalk,
        });
    }
} 

/* FUNCTION FOR THE LEFT */

function PLAYER_MOVE_LEFT(event) { 
    walking_x = walking_x -= 1;
    $(SELECT.WALKING_X_DISPLAY).html(walking_x);

    if (walking_x == 0) {
        setTimeout(function() {
            walking_x = walking_x += 1;
            $(SELECT.WALKING_X_DISPLAY).html(walking_x);
        }, 0); 
    }
    if (walking_x) {
        // moving the character to the map
        $(SELECT.MAP).css({
            transition: map_data.speedWalk,
            left: map_data.x_coordinate[walking_x] + "px"
        });

        // FOR THE MINI MAP
        $(SELECT.MINI_ARROW).css({
            left: mini_map.x_coordinate[walking_x] + "px",
            transition: map_data.speedWalk,
        });
    }
}

/* FUNCTION FOR THE UP */
function PLAYER_MOVE_UP(event) {
    walking_y = walking_y -= 1;
    $(SELECT.WALKING_Y_DISPLAY).html(walking_y);

    if (walking_y == 0) {
        setTimeout(function() {
            walking_y = walking_y += 1;
            $(SELECT.WALKING_Y_DISPLAY).html(walking_y);
        }, 0); 
    }
    if (walking_y) {
        // moving the character to the map
        $(SELECT.MAP).css({
            transition: map_data.speedWalk,
            top: map_data.y_coordinate[walking_y] + "px"
        });

        // FOR THE MINI MAP
        $(SELECT.MINI_ARROW).css({
            top: mini_map.y_coordinate[walking_y] + "px",
            transition: map_data.speedWalk,
        });
    }
}

/* FUNCTION PLAYER_MOVE_DOWN */
 function PLAYER_MOVE_DOWN(event) {
    walking_y = walking_y += 1;
    $(SELECT.WALKING_Y_DISPLAY).html(walking_y);

    if (walking_y == 66) {
        setTimeout(function() {
            walking_y = walking_y -= 1;
            $(SELECT.WALKING_Y_DISPLAY).html(walking_y);
        }, 0); 
    }
    if (walking_y) {
        // moving the character to the map
        $(SELECT.MAP).css({
            transition: map_data.speedWalk,
            top: map_data.y_coordinate[walking_y] + "px"
        });

        // FOR THE MINI MAP
        $(SELECT.MINI_ARROW).css({
            top: mini_map.y_coordinate[walking_y] + "px",
            transition: map_data.speedWalk,
        });
    }
}

