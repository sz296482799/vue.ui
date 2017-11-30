
function _LISTVIEW(){
	_VIEW_GROUP.call(this);

	this.data = function() {
		var mData = _VIEW_GROUP.getData();
		mData.type = "LIST";
		return mData;
	};

	this.methods.bindList = function () {
		if(!this._isMounted) {
			return;
		}
		for (var i = 0; i < this.$children.length; i++) {
			if(this.itype === 'horizontal') {
				if(i < this.$children.length - 1)
					this.$children[i].rightItem = this.$children[i + 1];
				else
					this.$children[i].rightItem = this.$children[0];
				if(i > 0)
					this.$children[i].leftItem = this.$children[i - 1];
				else
					this.$children[i].leftItem = this.$children[this.$children.length - 1];
			}
			else {
				if(i < this.$children.length - 1)
					this.$children[i].downItem = this.$children[i + 1];
				else
					this.$children[i].downItem = this.$children[0];
				if(i > 0)
					this.$children[i].upItem = this.$children[i - 1];
				else
					this.$children[i].upItem = this.$children[this.$children.length - 1];
			}
		}
	}

	this.mounted = function () {
		this.bindList();
	};

	this.updated = function () {
		this.bindList();
	};

	this.template = '\
	<table v-if="itype === \'horizontal\'">\
		<tr>\
			<td v-for="(item, index) in items" :key="index">\
    			<component :is="item.com" ref="profile"></component>\
    		</td>\
    	</tr>\
    </table>\
    <table v-else>\
		<tr v-for="item in items" :key="item.id" >\
			<td>\
    			<component :is="item.com" ref="profile"></component>\
    		</td>\
    	</tr>\
    </table>\
    ';
	this.props = {
		items: null,
		iclass: null,
		istyle: null,
		itype: {
			type: String,
			default: "vertical",
		}
	};
}
externObj(_LISTVIEW, _VIEW_GROUP);

Vue.component('item-listview', new _LISTVIEW());