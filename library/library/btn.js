/**
 *	January 3, 2021
 *	@Author Manuel Sintos
 */

var delay_walk = 200;

/* right button controller function */
var timer_right;
function touchstart_right(ev) {

	$(SELECT.MINI_ARROW).attr("src", "img/arrow_right.png");
	walking_direction = "right";

	/* change the image character to walking status */
	walking_change_image();

	timer_right = setInterval(function() {
		PLAYER_MOVE_RIGHT();
	}, delay_walk);
}
function touchend_right() {
	clearInterval(timer_right);

	/* change the image character to stand position */
	idle_change_image();
}

/* left button controller function */
var timer_left;
function touchstart_left(ev) {
	$(SELECT.MINI_ARROW).attr("src", "img/arrow_left.png");
	walking_direction = "left";

	/* change the image character to walking status */
	walking_change_image();

	timer_left = setInterval(function() {
		PLAYER_MOVE_LEFT();
	}, delay_walk);
}
function touchend_left() {
	clearInterval(timer_left);

	/* change the image character to stand position */
	idle_change_image();
}

/* up button controller function */
var timer_up;
function touchstart_up(ev) {
	$(SELECT.MINI_ARROW).attr("src", "img/arrow_up.png");
	walking_direction = "up";

	/* change the image character to walking status */
	walking_change_image();

	timer_up = setInterval(function() {
		PLAYER_MOVE_UP();
	}, delay_walk);
}
function touchend_up() {
	clearInterval(timer_up);

	/* change the image character to stand position */
	idle_change_image();
}

/* down button controller function */
var timer_down;
function touchstart_down(ev) {
	$(SELECT.MINI_ARROW).attr("src", "img/arrow_down.png");
	walking_direction = "down";

	/* change the image character to walking status */
	walking_change_image();

	timer_down = setInterval(function() {
		PLAYER_MOVE_DOWN();
	}, delay_walk);
}
function touchend_down() {
	clearInterval(timer_down);

	/* change the image character to stand position */
	idle_change_image();
}