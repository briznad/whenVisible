;(function( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // plugin name
    var pluginName = 'whenVisible';

    $[pluginName] = function(el, callback, interval, timeout){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        // Zepto only supports the following use of data() through the optional data plugin
        // Therefore reverse reference is only supported with jQuery or custom Zepto build
        //base.$el.data("pbjCarousel", base);

        var methods = {

        	isVisible: false,

        	si: null,

        	check: function () {
        		// decrement the timeout counter each run
	    		base.timeout--;

	        	if (!!base.$el.height()) {
	        		base.callback(base.$el);
	        		methods.isVisible = true;
	        		clearInterval(methods.si);
	        	} else if (!base.timeout) { // if we reach the timeout just give up
	        		clearInterval(methods.si);
	        		return;
	        	}
	    	},

	        init: function() {
	        	// callback is required; if no callback is specified just give up
	        	if ( typeof( callback ) === 'undefined' || callback === null) return;
	        	// if optional interval is not defined set interval at 50
	        	// aka check for element visibility every 50ms
	        	if ( typeof( interval ) === 'undefined' || interval === null) interval = 100;
	        	// if optional timeout is not defined set timeout at 6000
	        	// aka run element visibility check 6000 times x 50ms = timeout after 5 minutes
	        	if ( typeof( timeout ) === 'undefined' || timeout === null) timeout = 3000;

	            base.callback = callback;
	            base.interval = interval;
	            base.timeout = timeout;

	            // run initial check
	            methods.check();

	            // if initial check didn't come back true, kick off setInterval
	            if (!methods.isVisible) methods.si = setInterval(methods.check, base.interval);
	        }


	    };

        // Run initializer
        methods.init();
    };

    $.fn[pluginName] = function(callback, interval, timeout) {
        return this.each(function() {
            (new $[pluginName](this, callback, interval, timeout));
        });
    };

// to use with jQuery/Zepto uncomment the desired library
})( jQuery, window, document );
//})( Zepto, window, document );