'use strict'

function APP_VIEW(el, fristView, components) {
	
	this.extends = new _VIEW_APP();
	this.data = function () {
		return {
			type: 'APP_VIEW',
			currentView: fristView
		};
	};
	this.el = el;
	this.components = components;
}

const app = new Vue(new APP_VIEW('#app', 'home', {
		home: com_home,
		setting: com_setting,
		archive: { template: '<p>Welcome archive!</p>' },
	}));