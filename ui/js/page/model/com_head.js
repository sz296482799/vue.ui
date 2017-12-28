'use strict'

function COM_HEAD(title) {
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			type: "COM_HEAD",
			titleclass: "title",
			timeclass: "time",
			titletext: title,
			timetext: "2017年12月22日 14:14",
		};
	};

	this.template = '\
	<div class="head_class">\
		<item-textview :class="titleclass" :itext="titletext" ></item-textview>\
		<item-textview :class="timeclass" :itext="timetext" ></item-textview>\
	</div>\
	';
}

