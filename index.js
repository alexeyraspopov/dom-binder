'use strict';

function compose(f, g){
	return function(a){
		return f(g(a));
	};
}

function attributeSetter(node, attr){
	var setProperty = function(value){ node[attr] = value; },
		setAttribute = function(value){ node.setAttribute(attr, value);	};

	return ['checked', 'value', 'selectedIndex'].indexOf(attr) ? setProperty : setAttribute;
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
