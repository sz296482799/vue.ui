
function SETTING_VIEW(configs) {

	this.extends = new _VIEW_ACTIVEITY();
	this.data = function () {
		
		return {
			type: "SETTING",
			com_head: null,
			com_view: null,
			maxItem: 10,
			list_item: null,
			def_item: configs['def_item'],
			bg: configs['bg'] || null,
			configs: configs,
		};
	};

	this.computed = {
		
	};

	this.methods = {
		setView: function(view) {
			this.com_view = view;
		},
		onSelect: function (index) {
			this.setView(this.list_item[index].com.view);
		},
		onKeyDown: function(event) {
			var code = event.keyCode;
			switch(code) {
				case KeyEvent.KEY_RIGHT:
					this.$refs.rightView.requestFocus();
					return true;
				case KeyEvent.KEY_LEFT:
					this.$refs.leftList.requestFocus();
					return true;
			}
			return false;
		},
	};

	this.mounted = function () {
		if(this.configs[this.id]) {
			this.com_head = new COM_HEAD(this.configs[this.id].name);
			this.list_item = this.configs[this.id].items;
			this.$nextTick(function () {
				this.requestFocus();
			});
		}
	};

	this.props = {
		id: null,
	};

	this.template = '\
	<div class="activeity" >\
	<component :is="bg" ></component>\
	<template>\
		<component :is="com_head"></component>\
	</template>\
	<item-listview @select="onSelect" :imax="maxItem" :defItem="def_item" iclass="setting_table" :items="list_item" ref="leftList" ></item-listview>\
	<template>\
		<component :is="com_view" ref="rightView"></component>\
	</template>\
	</div>\
	';
}
const com_setting = new SETTING_VIEW(setting_config);