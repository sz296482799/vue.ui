function SETTING_LIST(items, isKeepAlive) {
	this.extends = new _LIST_VIEW();
	this.data = function () {
		return {
			type: "SETTING_LIST",
			mItems: items,
		};
	};
}