'use strict'

function COM_MAIN_FREQ() {
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			type: "COM_MAIN_FREQ",
			t_main_freq: "語言:",
		};
	};

	this.template = '\
	<div class="setting_right_view">\
		<div class="setting_right_items">\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq" class="setting_text"></item-textview>\
				<item-textview :itext="t_main_freq" class="setting_input"></item-textview>\
			</div>\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq" class="setting_text"></item-textview>\
				<item-textview :itext="t_main_freq" class="setting_input"></item-textview>\
			</div>\
			<div class="setting_right_item">\
				<item-textview :itext="t_main_freq" class="setting_text"></item-textview>\
				<item-textview :itext="t_main_freq" class="setting_input"></item-textview>\
			</div>\
		</div>\
	</div>\
	';
}