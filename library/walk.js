/**
 *	Sept 17, 2020
 *	@Author Manuel Sintos
 */

/* Function for the right */
function PLAYER_MOVE_RIGHT() {
    // Get the WALKING_X_DISPLAY element
    var walkingXDisplay = ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY);
    if (walking_x !== 67) {
        // Increment walking_x using the faster ++ operator
        walking_x++;
        walkingXDisplay.innerHTML = walking_x;
    } 
    else {
        // Decrement walking_x if it is equal to 67
        walking_x--;
        walkingXDisplay.innerHTML = walking_x;
    }
    // Get the MAP and MINI_ARROW elements
    var map = ELEM_SELECTOR(SELECT.MAP);
    var miniArrow = ELEM_SELECTOR(SELECT.MINI_ARROW);
    // Update the MAP elements' CSS properties
    map.style.transition = map_data.speedWalk;
    map.style.left = map_data.x_coordinate[walking_x] + "px";
    // Update the MINI_ARROW elements' CSS properties 
    miniArrow.style.left = mini_map.x_coordinate[walking_x] + "px";
    miniArrow.style.transition = "0.1s";
}

/* Function for the left */
function PLAYER_MOVE_LEFT() {
    // Get the WALKING_X_DISPLAY element
    var walkingXDisplay = ELEM_SELECTOR(SELECT.WALKING_X_DISPLAY);
    if (walking_x !== 0) {
        // Increment walking_x using the faster ++ operator
        walking_x--;
        walkingXDisplay.innerHTML = walking_x;
    } 
    else {
        // Decrement walking_x if it is equal to 67
        walking_x++;
        walkingXDisplay.innerHTML = walking_x;
    }
    // Get the MAP and MINI_ARROW elements
    var map = ELEM_SELECTOR(SELECT.MAP);
    var miniArrow = ELEM_SELECTOR(SELECT.MINI_ARROW);
    // Update the MAP elements' CSS properties
    map.style.transition = map_data.speedWalk;
    map.style.left = map_data.x_coordinate[walking_x] + "px";
    // Update the MINI_ARROW elements' CSS properties 
    miniArrow.style.left = mini_map.x_coordinate[walking_x] + "px";
    miniArrow.style.transition = "0.1s";
} 

/* Function for the up */
function PLAYER_MOVE_UP() {
    // Get the WALKING_Y_DISPLAY element
    var walkingYDisplay = ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY);
    if (walking_y !== 0) {
        // Increment walking_y using the faster ++ operator
        walking_y--;
        walkingYDisplay.innerHTML = walking_y;
    } 
    else {
        // Decrement walking_y if it is equal to 67
        walking_y++;
        walkingYDisplay.innerHTML = walking_y;
    }
    // Get the MAP and MINI_ARROW elements
    var map = ELEM_SELECTOR(SELECT.MAP);
    var miniArrow = ELEM_SELECTOR(SELECT.MINI_ARROW);
    // Update the MAP elements' CSS properties
    map.style.transition = map_data.speedWalk;
    map.style.top = map_data.y_coordinate[walking_y] + "px";
    // Update the MINI_ARROW elements' CSS properties 
    miniArrow.style.top = mini_map.y_coordinate[walking_y] + "px";
    miniArrow.style.transition = "0.1s";
} 

/* Function for the down */
function PLAYER_MOVE_DOWN() {
    // Get the WALKING_Y_DISPLAY element
    var walkingYDisplay = ELEM_SELECTOR(SELECT.WALKING_Y_DISPLAY);
    if (walking_y !== 66) {
        // Increment walking_y using the faster ++ operator
        walking_y++;
        walkingYDisplay.innerHTML = walking_y;
    } 
    else {
        // Decrement walking_y if it is equal to 66
        walking_y--;
        walkingYDisplay.innerHTML = walking_y;
    }
    // Get the MAP and MINI_ARROW elements
    var map = ELEM_SELECTOR(SELECT.MAP);
    var miniArrow = ELEM_SELECTOR(SELECT.MINI_ARROW);
    // Update the MAP elements' CSS properties
    map.style.transition = map_data.speedWalk;
    map.style.top = map_data.y_coordinate[walking_y] + "px";
    // Update the MINI_ARROW elements' CSS properties 
    miniArrow.style.top = mini_map.y_coordinate[walking_y] + "px";
    miniArrow.style.transition = "0.1s";
} 



