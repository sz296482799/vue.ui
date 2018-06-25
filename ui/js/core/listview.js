'use strict'

function _LIST_VIEW(){
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			type: 'LIST_VIEW',
			mItems: [],
			mType: 'vertical',
			mIndex: 0,
			mFristIndex: 0,
		};
	};

	this.methods = {
		bindList: function () {
			if(!this._isMounted) {
				return;
			}
			var mList = this.$refs.rawItem;
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
		onKeyDown: function(event) {
			var code = event.keyCode;

			switch(code) {
				case this.rightdown:
					this.mIndex = (this.mIndex + 1) % this.sItems.length;
				break;
				case this.leftup:
					this.mIndex = (this.mIndex > 0) ? (this.mIndex - 1) : (this.sItems.length - 1);
				break;

				case KeyEvent.KEY_ENTER:
					this.$emit("lclick", this.mIndex);
				break;
			}
			
			if(this.mFristIndex > this.mIndex && this.indexFource == 0) {
				return true;
			}
			else if((this.mIndex > this.mFristIndex + this.sMax - 1) && this.indexFource == this.sMax - 1) {
				return true;
			}
			return false;
		},
	};

	this.mounted = function () {
		if(this.stype === "horizontal") {
			this.leftup = KeyEvent.KEY_LEFT;
			this.rightdown = KeyEvent.KEY_RIGHT;
		}
		else {
			this.leftup = KeyEvent.KEY_UP;
			this.rightdown = KeyEvent.KEY_DOWN;
		}
		this.bindList();
		this.$nextTick(function () {
			this.$emit("select", this.mIndex);
		});
	};

	this.watch = {
		sItems: function () {
			this.indexFource = 0;
			this.mIndex = 0;
			this.mFristIndex = 0;
			this.$nextTick(function () {
				this.bindList();
				this.requestFocus();
			});
		},
		mIndex: function () {
			this.$emit("select", this.mIndex);
		},
	};

	this.computed = {
		sItems: function () {
			return this.items || this.mItems;
		},
		sFilterItems: function () {
			if(!this.sItems || Object.prototype.toString.call(this.sItems) !== '[object Array]' || this.sItems.length <= 0) return [];
			if(this.sMax >= this.sItems.length) {
				if(this.defItem) {
					var len = this.sMax - this.sItems.length;
					for (var i = 0; i < len; i++) {
						this.sItems.push(this.defItem);
					}
				}
			}

			if(this.mIndex >= 0) {
				if(this.mFristIndex > this.mIndex) {
					this.mFristIndex = this.mIndex;
					this.$nextTick(function () {
						this.bindList();
						this.requestFocus();
					});
				}
				else if(this.mIndex > this.mFristIndex + this.sMax - 1) {
					this.mFristIndex = this.mIndex - (this.sMax - 1);
					this.$nextTick(function () {
						this.bindList();
						this.requestFocus();
					});
				}
			}
			return this.sItems.slice(this.mFristIndex, this.sMax + this.mFristIndex);
		},
		stype: function () {
			return this.itype || this.mType;
		},
		sClass: function () {
			return this.iclass || this.mClass;
		},
		sMax: function () {
			return parseInt(this.imax || this.sItems.length, 10);
		},
	};

	this.template = '\
	<table rules=none :class="sClass" v-if="stype === \'horizontal\'">\
		<tr>\
			<td v-for="(item, index) in sFilterItems" :key="index">\
    			<component :is="item.com" :mIndex="index" ref="rawItem"></component>\
    		</td>\
    	</tr>\
    </table>\
    <table rules=none :class="sClass" v-else>\
		<tr v-for="(item, index) in sFilterItems" :key="index" >\
			<td>\
    			<component :is="item.com" :mIndex="index" ref="rawItem"></component>\
    		</td>\
    	</tr>\
    </table>\
    ';
	this.props = {
		items: null,
		itype: null,
		iclass: null,
		imax: Number,
		defItem: null,
	};
}

Vue.component('item-listview', new _LIST_VIEW());