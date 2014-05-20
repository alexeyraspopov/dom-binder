!function(module, global){
var exports = module.exports;
'use strict';

function sanitizeValue(value){
	return value == null ? '' : value;
}

function compose(f, g){
	return function(){
		return f(g.apply(this, arguments));
	};
}

function bind(node, attr, observer){
	var setAttribute = node.setAttribute.bind(node, attr);

	observer.subscribe(compose(setAttribute, sanitizeValue));
}

module.exports = bind;

global.bind = module.exports;
}({ exports: {} }, function(){ return this; }());