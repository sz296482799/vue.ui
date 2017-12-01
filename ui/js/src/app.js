
function APP_VIEW(el, fristView, components) {
	_VIEW_APP.call(this);
 
	this.data = function () {
		var mData = _VIEW_APP.getData();

		mData.type = "APP";
		mData.currentView = fristView;
		return mData;
	};

	this.el = el;

	this.components = components;

	this.created = function () {
		document.onkeyup = this.onSuperKeyUp;
		document.onkeydown = this.onSuperKeyDown;
	};

	
}
externObj(APP_VIEW, _VIEW_APP);

var app = new Vue(new APP_VIEW('#app', 'home', {
		home: com_home,
		posts: { template: '<p>Welcome posts!</p>' },
		archive: { template: '<p>Welcome archive!</p>' },
	}));