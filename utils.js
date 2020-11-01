if(!window.requestAnimationFrame) {
	window.requestAnimationFrame=
	(window.webkitRequestAnimationFrame||
	window.mozRequestAnimationFrame||
	window.msRequestAnimationFrame||
	window.oRequestAnimationFrame||
	function(callback {return
	window.setTimeout(callback,1000/60);}));
	}
}