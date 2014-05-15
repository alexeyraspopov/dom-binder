'use strict';

function sanitizeValue(value){
	return value == null ? '' : value;
}

function compose(f, g){
	return function(){
		return f(g.apply(this, arguments));
	};
}

function bind(node, attr, observer){
	var update = node.setAttribute.bind(node, attr);

	observer.on('change', compose(update, sanitizeValue));
}

module.exports = bind;

// ObserverConstructor :: (String -> Observer)
// Binder :: Object { remove }
// bind :: Node -> String -> ObserverConstructor -> Binder
// function bind(node, attr, modelCtor, binder){
// 	var attrValue = node.getAttribute(attr);

// 	var model = modelCtor(attr, attrValue);

// 	var setAttribute = node.setAttribute.bind(node, attr);

// 	var handleChange = function(event){ model.set(event.target.value); };

// 	model.on('change', apply);
// 	node.addEventListener('change', handleChange);

// 	setAttribute(model.get());

// 	return {
// 		remove: function(){
// 			model.off('change', apply);
// 			node.removeEventListener('change', handleChange);
// 		}
// 	};
// }

// module.exports = bind;
// module.exports = function(node, attr, model){
// 	var apply = node.setAttribute.bind(node, attr),
// 		change = function(event){ model.set(event.target.value); };

// 	model.on('change', apply);
// 	apply(model.get());

// 	if (attr === 'value') node.addEventListener('change', change);

// 	return {
// 		remove: function(){
// 			model.unsubscribe(apply);
// 			if (attr === 'value') node.removeEventListener('change', change);
// 		}
// 	};
// };
