'use strict';

function sanitizeValue(value){
	return value == null ? '' : value;
}

function compose(f, g){
	return function(){
		return f(g.apply(this, arguments));
	};
}

var values = ['value', 'checked', 'selectedIndex'];

function bind(node, attr, observer){
	var isValue = values.indexOf(attr) > -1;

	if(isValue){
		var setAttribute = function(value){ node[attr] = value; };
	}else{
		var setAttribute = node.setAttribute.bind(attr);
	}

	observer.on('change', compose(setAttribute, sanitizeValue));

	if(isValue){
		node.addEventListener('change', function(){
			observer.emit('change', sanitizeValue(node[attr]));
		});
	}
};

module.exports = bind;
