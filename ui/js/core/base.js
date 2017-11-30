KeyEvent = {};
KeyEvent.KEY_UP = 38;
KeyEvent.KEY_DOWN = 40;
KeyEvent.KEY_LEFT = 37;
KeyEvent.KEY_RIGHT = 39;

function _VIEW() {

	
	this.data = function () {
		return _VIEW.getData();
	};
	
	this.methods = {
		onSuperKeyUp: function(event) {
			for (var i = 0; i < this.$children.length; i++) {
				if(this.$children[i].onKeyUp && this.$children[i].onKeyUp(event)) {
					return true;
				}
				else if(this.$children[i].onSuperKeyUp && this.$children[i].onSuperKeyUp(event)) {
					return true;
				}
			}
			return this.onKeyUpDef && this.onKeyUpDef(event);
		},
		onSuperKeyDown: function(event) {
			for (var i = 0; i < this.$children.length; i++) {
				if(this.$children[i].onKeyDown && this.$children[i].onKeyDown(event)) {
					return true;
				}
				else if(this.$children[i].onSuperKeyDown && this.$children[i].onSuperKeyDown(event)) {
					return true;
				}
			}
			return this.onKeyDownDef && this.onKeyDownDef(event);
		},
		setFource: function(isTure) {
			return false;
		},
	};
};
_VIEW.getData = function() {
	return {
		type: 'VIEW',
	};
};

function _VIEW_GROUP() {
	_VIEW.call(this);

	this.data = function () {
		return _VIEW_GROUP.mData();
	};

	this.methods.tryFource = function () {
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
	};
}
externObj(_VIEW_GROUP, _VIEW);
_VIEW_GROUP.getData = function() {
	var data = _VIEW.getData();
	data.indexFource = -1;
	return data;
}

function _VIEW_ACTIVEITY() {
	_VIEW_GROUP.call(this);

	this.data = function () {
		return _VIEW_ACTIVEITY().mData();
	};

	this.methods.touchFource = function(type) {
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
	};

	this.methods.onKeyUpDef = function(event) {
		
	};
	this.methods.onKeyDownDef = function(event) {
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
	};

	this.mounted = function () {
		this.curFource = this.tryFource();
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
externObj(_VIEW_ACTIVEITY, _VIEW_GROUP);
_VIEW_ACTIVEITY.getData = function() {
	var data = _VIEW_GROUP.getData();
	data.curFource = null;
	return data;
}

function _VIEW_APP() {
	_VIEW_GROUP.call(this);
}
externObj(_VIEW_APP, _VIEW_GROUP);
_VIEW_APP.getData = function() {
	var data = _VIEW_GROUP.getData();
	return data;
}