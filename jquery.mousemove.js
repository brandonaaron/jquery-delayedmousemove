/*! Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0
 */

(function($) {

$.event.special.mousemove = {
	setup: function(data, namespaces) {
		var elem = this,
			behavior = data && data.behavior || "throttle", // "throttle" or "debounce"
			delay = data && data.delay || 100,
			handler = delayedHandler.call(elem, actualHandler, behavior, delay);
		$.data(elem, 'delayedmousemovehandler', handler);
		if ( elem.addEventListener )
			elem.addEventListener('mousemove', handler, false);
		else if ( elem.attachEvent )
			elem.attachEvent('onmousemove', handler);
		return true;
	},
	
	teardown: function(data, namespaces) {
		var elem = this,
			handler = $.data(elem, 'delayedmousemovehandler');
		if ( elem.removeEventListener )
			elem.removeEventListener('mousemove', handler, false);
		else if ( elem.detachEvent )
			elem.detachEvent('onmousemove', handler);
		return true;
	}
};

function delayedHandler(fn, behavior, delay) {
	var timeout, scope = this;
	return function() {
		var args = arguments;
		function delayed() {
			fn.apply(scope, args);
			timeout = null;
		};
		if ( behavior === "debounce" && timeout )
			clearTimeout(timeout);
		if ( behavior === "throttle" && !timeout || behavior === "debounce" )
			timeout = setTimeout(delayed, delay);
	};
};

function actualHandler(event) {
	var args = [].slice.call( arguments, 1 );
	args.unshift($.event.fix(event || window.event));
	return $.event.handle.apply(this, args);
};

})(jQuery);