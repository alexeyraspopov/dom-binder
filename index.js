'use strict';

function compose(f, g){
	return function(){
		return f(g.apply(this, arguments));
	};
}

function identity(value){
	return value;
}

function sanitizeValue(value){
	return value == null ? '' : value;
}

function valueTransform(attr){
	switch(attr){
		case 'checked':
			return Boolean;
		case 'value':
			return String;
		default:
			return identity;
	}
}

function bind(node, attr, observer){
	var setAttribute, sanitize;

	setAttribute = node.setAttribute.bind(node, attr);
	sanitize = compose(valueTransform(attr), sanitizeValue);

	observer.subscribe(compose(setAttribute, sanitize));
}

module.exports = bind;
