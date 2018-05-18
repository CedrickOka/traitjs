//! trait.js
//! version : 1.0.0
//! authors : Cedrick Oka Baidai <okacedrick@gmail.com>
//! license : MIT
//! https://github.com/CedrickOka/traitjs
(function(root, factory){
	'use strict';
	
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.Trait = factory();
    }
})(this, function(){
	'use strict';
	
	return {
		use: function(behavior, context, options){
			if (typeof behavior === 'function') {
				behavior.call(context, options);
			}
		}
	};
});