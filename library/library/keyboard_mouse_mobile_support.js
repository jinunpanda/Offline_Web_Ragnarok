
/* PREVENTING THE BROWSER TO USE RIGHT CLICK OR SHOWING THE MENU */
window.addEventListener("contextmenu", function(e) {
	e.preventDefault();
	/* you can put other code here if you want a right click functions inside to your game*/
});

/* stop the drag all img */
window.addEventListener("dragstart", function(e) {
	e.preventDefault();
});
