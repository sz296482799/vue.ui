
function SETTING_VIEW(configs) {

	this.extends = new _VIEW_ACTIVEITY();
	this.data = function () {
		
		return {
			type: "SETTING",
			com_head: new COM_HEAD("SETTING"),
		};
	};

	this.computed = {
		
	};

	this.methods = {
		
	};

	this.template = '\
	<div>\
	<div class="vbg">\
		<div class="bg1"></div>\
		<div class="bg2"></div>\
		<div class="bg3"></div>\
		<div class="bg4"></div>\
		<div class="bg5"></div>\
		<div class="bg6"></div>\
		<div class="bg7"></div>\
		<div class="bg8"></div>\
		<div class="bg9"></div>\
		<div class="bg10"></div>\
		<div class="bg11"></div>\
		<div class="bg12"></div>\
		<div class="bg13"></div>\
		<div class="bg14"></div>\
	</div>\
	<div class="" >\
		<template>\
			<component :is="com_head"></component>\
		</template>\
	</div>\
	</div>\
	';
}
const com_setting = new SETTING_VIEW();