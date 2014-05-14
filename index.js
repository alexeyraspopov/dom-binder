'use strict';

function compose(f, g){
	return function(){
		return f(g.apply(this, arguments));
	};
}

function targetValue(event){
	return event.target.value;
}

module.exports = function(node, attr, model){
	var apply = node.setAttribute.bind(node, attr),
		change = compose(model.write, targetValue);

	model.subscribe(apply);
	node.addEventListener('change', change);
	apply(model.read());

	return {
		remove: function(){
			model.unsubscribe(apply);
			node.removeEventListener('change', change);
		}
	};
};
