function externObj(sub, sup) {
	var Super = function(){};
	Super.prototype = sup.prototype;
	var prototype = new Super();
	prototype.constructor = sub;
	sub.prototype = prototype;
}