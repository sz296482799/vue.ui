function HOME_LIST(items, isKeepAlive) {
	this.extends = new _LIST_VIEW();
	this.data = function () {
		return {
			type: "HOME_LIST",
			mItems: items,
			mType: 'horizontal',
		};
	};

	var func = function () {
		this.requestFocus();
	};
	if(isKeepAlive) {
		this.activated = func;
	}
	else {
		this.mounted = func;
	}
}