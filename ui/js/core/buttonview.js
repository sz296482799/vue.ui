'use strict'

function _BUTTON_VIEW(){
	
	this.extends = new _VIEW();
	this.data = function () {
		return {
			type: 'BUTTON_VIEW',
			canFource: true,
			mclass: "item_button",
			mstyle: {},
		};
	};

	this.methods = {
		onKeyDown: function(event) {
			var code = event.keyCode;

			switch(code) {
				case KeyEvent.KEY_ENTER:
					this.$emit("iclick", this.private_data);
					return true;
			}
			return false;
		},
		setFource: function (isTrue) {
			
			if(isTrue) {
				this.mstyle = { "color": "white", "background-color": "rgb(228, 105, 0)"};
			}
			else {
				this.mstyle = {};
			}
			return true;
		}
	};

	this.computed = {
		sClass: function () {
			return this.iclass || this.mclass;
		},
		sStyle: function () {
			return this.istyle || this.mstyle;
		},
	};

	this.template = '<div v-text="itext" :class="sClass" :style="sStyle"></div>';
	this.props = ['itext', 'iclass', 'istyle', 'private_data'];
}
Vue.component('item-buttonview', new _BUTTON_VIEW());