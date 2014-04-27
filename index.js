'use strict';
function toRegExp(attr){
	return new RegExp(attr.replace(/-(.)/g, (match, letter) => letter.toUpperCase()).replace(/\*/g, '(.+)'));
}

function pick(object){
	return (key) => object[key];
}

module.exports = function(element, attr, binder){
	// create attr regexp
	var getNames = toRegExp(attr),
		isCorrectName = getNames.test.bind(getNames);

	// get attrs by regexp
	Object.keys(element.dataset)
		.filter(isCorrectName)
		.map(pick(element.dataset))
		.forEach((attrValue) => {
			// what I should to do with attrValue?
			binder.routine(element, attrValue);
		});

	// call bind and routine functions

	// return handler
};
