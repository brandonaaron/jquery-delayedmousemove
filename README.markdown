# jQuery Delayed Mouse Move Event

A jQuery plugin that makes the mousemove event have a configureable delay. It has two modes of behavior: throttle or debounce.

To configure the event use the data argument of the bind method like this.

	$('div').bind('mousemove', { behavior: 'debounce', delay: 250 }, fn);

The default behavior is 'throttle' and the default delay is 100. These settings apply to all future mousemove event handlers bound to the specific element. In other words the event is configureable per an element.

Inspiration for this plugin comes from [this article on debouncing in JavaScript](http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/) by [John Hann](http://unscriptable.com/index.php/about/).

## License

The Delayed Mouse Move Event plugin is dual licensed *(just like jQuery)* under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2009 [Brandon Aaron](http://brandonaaron.net)