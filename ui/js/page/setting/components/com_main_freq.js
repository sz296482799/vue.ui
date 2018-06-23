'use strict'

function COM_MAIN_FREQ() {
	
	this.extends = new _LAYOUT_LINER();
	this.data = function () {
		return {
			type: "COM_MAIN_FREQ",
			t_main_freq1: "語言1:",
			t_main_freq2: "語言2:",
			t_main_freq3: "語言3:",
			mValue1: "Value1",
			mValue2: "Value2",
			mValue3: "Value3",
		};
	};

	this.methods = {
		onClick: function() {
			console.log("click");
		},
	};

	this.template = '\
	<div class="setting_right_view">\
		<div class="setting_right_items">\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq1" class="setting_text"></item-textview>\
				<item-inputview v-model="mValue1" class="setting_input"></item-inputview>\
			</div>\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq2" class="setting_text"></item-textview>\
				<item-inputview v-model="mValue2" class="setting_input"></item-inputview>\
			</div>\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq3" class="setting_text"></item-textview>\
				<item-inputview v-model="mValue3" class="setting_input"></item-inputview>\
			</div>\
			<div class="setting_right_item">\
				<item-buttonview @bclick="onClick" :itext="t_main_freq1" class="setting_button"></item-buttonview>\
			</div>\
		</div>\
	</div>\
	';
}