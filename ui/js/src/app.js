
function APP_VIEW(el, fristView, components) {
	
	this.extends = new _VIEW_APP();
	this.data = function () {
		return {
			type: 'APP_VIEW',
			currentView: fristView,
		};
	};
	this.el = el;
	this.components = components;

	this.created = function () {
		document.onkeyup = this.onSuperKeyUp;
		document.onkeydown = this.onSuperKeyDown;
	};
}

var app = new Vue(new APP_VIEW('#app', 'home', {
		home: com_home,
		posts: { template: '<p>Welcome posts!</p>' },
		archive: { template: '<p>Welcome archive!</p>' },
	}));