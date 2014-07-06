'use strict';

var properties = ['value', 'checked', 'innerHTML', 'textContent', 'selectedIndex'];

function compose(f, g){
	return function(a){
		return f(g(a));
	};
}

function identity(value){
	return value;
}

function sanitizeValue(value){
	return value == null ? '' : value;
}

function attributeSetter(node, attr){
	var setProperty = function(value){ node[attr] = value; },
		setAttribute = function(value){ node.setAttribute(attr, value);	};

	return properties.indexOf(attr) > -1 ? setProperty : setAttribute;
}

function valueTransform(attr){
	return {
		value: String,
		checked: Boolean,
		innerHTML: String,
		textContent: String,
		selectedIndex: Number
	}[attr] || identity;
}

function bind(node, attr, observer){
	var write = attributeSetter(node, attr),
		transform = compose(valueTransform(attr), sanitizeValue);

	return observer.subscribe(compose(write, transform));
}

module.exports = bind;
