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
	return typeof value === 'undefined' || value === null ? '' : value;
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

function writer(node, attr){
	var write = attributeSetter(node, attr),
		transform = compose(valueTransform(attr), sanitizeValue);

	return compose(write, transform);
}

function bind(node, attr, observer){
	return observer.subscribe(writer(node, attr));
}

module.exports = bind;
bind.writer = writer;
