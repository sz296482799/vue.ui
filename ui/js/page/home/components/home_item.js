'use strict'

function HOME_ITEM(src, text, isFource) {
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		if(typeof isFource === 'undefined')
			isFource = true;
		return {
			type: "HOME_ITEM",
			isrc: src,
			itext: text,
			itemclass: "list_icon",
			imgclass: "in_pic",
			textclass: "list_text",
			imgstyle: {},
			textstyle: {},
			canFource: isFource,
		};
	};

	this.methods = {
		setFource: function (isTrue) {
			if(isTrue) {
				this.imgstyle = { "borderColor": "rgb(228, 106, 0)"};
				this.textstyle = { "color": "rgb(228, 106, 0)"};
			}
			else {
				this.imgstyle = {};
				this.textstyle = {};
			}
			return true;
		}
	};

	this.template = '\
	<div :class="itemclass">\
		<item-imgview :isrc="isrc" :class="imgclass" :style="imgstyle"></item-imgview>\
		<item-textview :itext="itext" :class="textclass" :style="textstyle"></item-textview>\
	</div>\
	';
}