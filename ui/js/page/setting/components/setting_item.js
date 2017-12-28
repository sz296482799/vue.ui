function SETTING_ITEM(text, view, isFource) {
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		if(typeof isFource === 'undefined')
			isFource = true;
		return {
			type: "SETTING_ITEM",
			itext: text,
			itemclassodd: "setting_item_bg_odd",
			itemclasseven: "setting_item_bg_even",
			itemstyle: {},
			canFource: isFource,
		};
	};
	this.view = view;
	this.methods = {
		setFource: function (isTrue) {
			if(isTrue) {
				this.itemstyle = { "color": "white", "background-color": "rgb(228, 105, 0)"};
			}
			else {
				this.itemstyle = {};
			}
			return true;
		}
	};

	this.props = {
		mIndex: null,
	};

	this.template = '\
	<div class="setting_item" :class="[mIndex % 2 ? itemclassodd : itemclasseven]" :style="itemstyle">\
		<item-textview :itext="itext" class="setting_text"></item-textview>\
	</div>\
	';
}