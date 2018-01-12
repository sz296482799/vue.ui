'use strict'

function _INPUT_VIEW(){
	
	this.extends = new _VIEW();
	this.data = function () {
		return {
			type: 'INPUT_VIEW',
			canFource: true,
			mclass: "item_input",
			mstyle: {},
		};
	};

	this.methods = {
		onKeyDown: function(event) {
			var code = event.keyCode;

			switch(code) {
				case KeyEvent.KEY_0:
				case KeyEvent.KEY_1:
				case KeyEvent.KEY_2:
				case KeyEvent.KEY_3:
				case KeyEvent.KEY_4:
				case KeyEvent.KEY_5:
				case KeyEvent.KEY_6:
				case KeyEvent.KEY_7:
				case KeyEvent.KEY_8:
				case KeyEvent.KEY_9:
					this.onInput(code - KeyEvent.KEY_0 + 1);
					return true;
			}
			return false;
		},
		onInput: function(value) {
			this.$emit("ichange", this.ivalue.toString() + value);
		},
		setFource: function (isTrue) {
			if(isTrue) {
				this.mstyle = { "color": "rgb(228, 105, 0)", "border-color": "rgb(228, 105, 0)"};
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

	this.model = {
		prop: 'ivalue',
		event: 'ichange'
	},

	this.template = '<div v-text="ivalue" :class="sClass" :style="sStyle"></div>';
	this.props = ['ivalue', 'itext', 'iclass', 'istyle'];
}
Vue.component('item-inputview', new _INPUT_VIEW());