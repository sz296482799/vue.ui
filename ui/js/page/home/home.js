'use strict'

function HOME_VIEW(configs) {

	this.extends = new _VIEW_ACTIVEITY();
	this.data = function () {
		var isKeepAlive = false;
		var items = new Array();
		for (var i = 0; i < configs.length; i++) {
			items[i] = new Object();
			if(configs[i].name)
				items[i].itext = configs[i].name;
			if(configs[i].items)
				items[i].list = new HOME_LIST(configs[i].items, isKeepAlive);
		}
		return {
			type: "HOME",
			textclass: "common_text",
			ftextclass: "focus_text",
			startIndex: 0,
			maxItem: 7,
			items: items,
			isKeepAlive: isKeepAlive,
			bg: configs['bg'] || null,
		};
	};

	this.computed = {
		filteredItems: function () {

			var fItems = new Array();
			for (var i = 0; i < this.items.length; i++) {
				fItems.push(this.items[(this.startIndex + i + 3) % this.items.length]);
			}
			return fItems.slice(0, this.maxItem);
		},
	};

	this.methods = {
		onKeyDown: function(event) {
			var code = event.keyCode;

			switch(code) {
				case KeyEvent.KEY_DOWN:
					this.startIndex = (this.startIndex + 1) % this.items.length;
					return true;
				break;
				case KeyEvent.KEY_UP:
					this.startIndex = (this.startIndex > 0) ? (this.startIndex - 1) : (this.items.length - 1);
					return true;
				break;
				case KeyEvent.KEY_TEST:
					this.getApp().selectPage("setting");
					return true;
			}
			return false;
		},
	};

	this.template = '\
	<div class="activeity" >\
	<component :is="bg" ></component>\
	<div class="home_cl" >\
		<div v-for="(item, index) in filteredItems" :key="index">\
			<template v-if="index == 5">\
				<item-textview :itext="item.itext" :class="ftextclass"></item-textview>\
				<template v-if="isKeepAlive">\
					<keep-alive>\
			    		<component :is="item.list" ref="profile" ></component>\
					</keep-alive>\
				</template>\
				<template v-else >\
			    	<component :is="item.list" ref="profile" ></component>\
				</template>\
			</template>\
    		<item-textview v-else :itext="item.itext" :class="textclass"></item-textview>\
    	</div>\
	</div>\
	</div>\
	';
}
const com_home = new HOME_VIEW(home_config);
