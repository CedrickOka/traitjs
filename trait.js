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
		use: function(behavior, context, args){
			if (typeof behavior !== 'function') {
				throw 'Argument 1 of the use() method must be of type "function", type "' + typeof behavior + '" given.';
			}
			
			behavior.apply(context, args);
		}
	};
});
