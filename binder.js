!function(module, global){
var exports = module.exports;
'use strict';

function compose(f, g){
	return function(a){
		return f(g(a));
	};
}

function identity(value){
	return value;
}

function sanitize(value){
	return value == null ? '' : value;
}

function valueTransform(attr){
	return {
		'checked': Boolean,
		'value': String,
		'selectedIndex': Number
	}[attr] || identity;
}

function bind(node, attr, observer){
	var setAttribute, sanitizeValue;

	setAttribute = node.setAttribute.bind(node, attr);
	sanitizeValue = compose(valueTransform(attr), sanitize);

	observer.subscribe(compose(setAttribute, sanitizeValue));
}

module.exports = bind;

global.bind = module.exports;
}({ exports: {} }, function(){ return this; }());