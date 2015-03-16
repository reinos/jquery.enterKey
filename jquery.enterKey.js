(function ( $ ) { 
	$.fn.enterKey = function (fnc) {
	    return this.each(function () {
	        $(document).on('keypress', $(this), function (ev) {
	            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
	            if (keycode == '13') {
	                fnc.call(this, ev, $(this));
	            }
	        });
	    });
	}
}( jQuery ));