'use strict';

module.exports = function(node, attr, model){
	var apply = node.setAttribute.bind(node, attr),
		change = function(event){ model.set(event.target.value); };

	model.on('change', apply);
	apply(model.get());

	if (attr === 'value') node.addEventListener('change', change);

	return {
		remove: function(){
			model.unsubscribe(apply);
			if (attr === 'value') node.removeEventListener('change', change);
		}
	};
};
