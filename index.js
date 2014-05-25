'use strict';

function compose(f, g){
	return function(a){
		return f(g(a));
	};
}

function attributeSetter(node, attr){
	return function(value){
		node.setAttribute(attr, value);
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
		checked: Boolean,
		value: String,
		selectedIndex: Number
	}[attr] || identity;
}

function bind(node, attr, observer){
	var setAttribute, sanitizeValue;

	setAttribute = attributeSetter(node, attr);
	sanitizeValue = compose(valueTransform(attr), sanitize);

	observer.subscribe(compose(setAttribute, sanitizeValue));
}

module.exports = bind;
