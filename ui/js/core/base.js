'use strict'

var KeyEvent = new Object();

KeyEvent.KEY_ENTER = 13;

KeyEvent.KEY_UP = 38;
KeyEvent.KEY_DOWN = 40;
KeyEvent.KEY_LEFT = 37;
KeyEvent.KEY_RIGHT = 39;

KeyEvent.KEY_0 = 49;
KeyEvent.KEY_1 = 50;
KeyEvent.KEY_2 = 51;
KeyEvent.KEY_3 = 52;
KeyEvent.KEY_4 = 53;
KeyEvent.KEY_5 = 54;
KeyEvent.KEY_6 = 55;
KeyEvent.KEY_7 = 56;
KeyEvent.KEY_8 = 57;
KeyEvent.KEY_9 = 58;

KeyEvent.KEY_TEST = 37;

function _VIEW() {

	this.data = function () {
		return {
			vtype: 'VIEW',
		};
	};
	
	this.methods = {
		setFource: function(isTure) {
			return false;
		},
		getApp: function() {
			return this.$root;
		},
		getActiveity: function() {
			var app = this.getApp() || this;
			for (var i = 0; i < app.$children.length; i++) {
				if(app.$children[i].vtype === "VIEW_ACTIVEITY") {
					return app.$children[i];
				}
			}
			return null;
		},
		requestFocus: function() {
			var activeity = this.getActiveity();
			if(activeity) {
				activeity.$emit('requestFocus', this);
				return true;
			}
			return false;
		},
	};
};

function _VIEW_GROUP() {

	this.extends = new _VIEW();
	this.data = function () {
		return {
			vtype: 'VIEW_GROUP',
			indexFource: -1,
		};
	};

	this.methods = {
		tryFource: function () {
			if(!this._isMounted) {
				return null;
			}
			if(this.indexFource < 0) {
				this.indexFource = 0;
			}
			for (var i = this.indexFource; i < this.$children.length; i++) {
				if(this.$children[i].canFource) {
					this.indexFource = i;
					return this.$children[i];
				}
				else if(this.$children[i].tryFource) {
					var curFource = this.$children[i].tryFource();
					if(curFource) {
						this.indexFource = i;
						return curFource;
					}
				}
			}
			return null;
		},
	};
}

function _LAYOUT_LINER() {

	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			ltype: 'LAYOUT_LINER',
			lType: 'vertical',
		};
	};

	this.methods = {
		bindList: function () {
			if(!this._isMounted) {
				return;
			}
			var mList = this.$children;
			if(!mList) return;
			for (var i = 0; i < mList.length; i++) {
				if(this.stype === 'horizontal') {
					if(i < mList.length - 1)
						mList[i].rightItem = mList[i + 1];
					else
						mList[i].rightItem = mList[0];
					if(i > 0)
						mList[i].leftItem = mList[i - 1];
					else
						mList[i].leftItem = mList[mList.length - 1];
				}
				else {
					if(i < mList.length - 1)
						mList[i].downItem = mList[i + 1];
					else
						mList[i].downItem = mList[0];
					if(i > 0)
						mList[i].upItem = mList[i - 1];
					else
						mList[i].upItem = mList[mList.length - 1];
				}
			}
		},
	};

	this.computed = {
		stype: function () {
			return this.itype || this.lType;
		},
	};

	this.mounted = function () {
		this.bindList();
	};

	this.updated = function () {
		this.bindList();
	};

	this.props = {
		itype: null,
	};
}

function _VIEW_ACTIVEITY() {

	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			vtype: 'VIEW_ACTIVEITY',
			curFource: null,
		};
	};

	this.methods = {

		touchFource: function(type) {
			if(!this._isMounted) {
				return false;
			}
			var curFource = this.curFource;
			var curItem = this.curFource;

			while(curFource) {
				if(!curFource[type] || curFource[type] == curFource) {
					curItem = curFource = curItem.$parent;
					continue;
				}
				if(curFource[type].canFource) {
					this.curFource = curFource[type];
					if(curFource.$parent)
						curFource.$parent.indexFource = curFource.$parent.$children.indexOf(curFource[type]);
					break;
				}
				else if(curFource[type].tryFource) {
					var item = curFource[type].tryFource();
					if(item) {
						this.curFource = item;
						break;
					}
				}
				curFource = curFource[type];
				if(curFource == curItem) {
					curItem = curFource = curItem.$parent;
				}
			}
			return true;
		},
		touchOnKeyUp: function(event) {
			if(!this._isMounted) {
				return false;
			}
			var curFource = this.curFource;

			while(curFource) {
				if(curFource.onKeyUp && curFource.onKeyUp(event)) {
					return true;
				}
				curFource = curFource.$parent;
			}
			return false;
		},
		touchOnKeyDown: function(event) {
			if(!this._isMounted) {
				return false;
			}
			var curFource = this.curFource;

			while(curFource) {
				if(curFource.onKeyDown && curFource.onKeyDown(event)) {
					return true;
				}
				curFource = curFource.$parent;
			}
			return false;
		},
		onKeyUpDef: function(event) {
			return false;
		},
		onKeyDownDef: function(event) {
			var code = event.keyCode;

			switch(code) {
				case KeyEvent.KEY_UP:
					return this.touchFource('upItem');
				break;
				case KeyEvent.KEY_DOWN:
					return this.touchFource('downItem');
				break;
				case KeyEvent.KEY_LEFT:
					return this.touchFource('leftItem');
				break;
				case KeyEvent.KEY_RIGHT:
					return this.touchFource('rightItem');
				break;
			}
			return false;
		},
		_requestFocus: function(context) {
			if(context && context.tryFource) {
				var item = context.tryFource();
				if(item) {
					this.curFource = item;
					return true;
				}
			}
			return false;
		},
		onActiveityKeyUp: function(event) {
			return this.touchOnKeyUp(event) || this.onKeyUpDef(event);
		},
		onActiveityKeyDown: function(event) {
			return this.touchOnKeyDown(event) || this.onKeyDownDef(event);
		},
		getRoute: function(path) {
			return this.$router;
		},
		toPage: function(path) {
			this.getRoute().push(path);
		},
	};

	this.mounted = function () {
		this.curFource = this.tryFource();
		this.$on('requestFocus', this._requestFocus);
	};

	this.watch = {
		curFource: function (val, oldVal) {
			if(val === oldVal) return;
			if(oldVal && oldVal.setFource)
				oldVal.setFource(false);
			if(val && val.setFource)
				val.setFource(true);
		},
	};
}

function _VIEW_APP() {

	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			vtype: 'VIEW_APP',
			currentView: '',
		};
	};
	this.methods = {

		onAppKeyUp: function(event) {
			var activeity = this.getActiveity();
			if(activeity) {
				return activeity.onActiveityKeyUp(event);
			}
			return false;
		},
		onAppKeyDown: function(event) {
			var activeity = this.getActiveity();
			if(activeity) {
				return activeity.onActiveityKeyDown(event);
			}
			return false;
		},
	};

	this.created = function () {
		document.onkeyup = this.onAppKeyUp;
		document.onkeydown = this.onAppKeyDown;
	};
}