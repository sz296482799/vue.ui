
function _LIST_VIEW(){
	
	this.extends = new _VIEW_GROUP();
	this.data = function () {
		return {
			type: 'LIST_VIEW',
			mItems: [],
			mType: 'vertical',
		};
	};

	this.methods = {
		bindList: function () {
			if(!this._isMounted) {
				return;
			}
			for (var i = 0; i < this.$children.length; i++) {
				if(this.stype === 'horizontal') {
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
	};

	this.mounted = function () {
		this.bindList();
	};

	this.updated = function () {
		this.bindList();
	};

	this.computed = {
		sItems: function () {
			return this.items || this.mItems;
		},
		stype: function () {
			return this.itype || this.mType;
		},
	};

	this.template = '\
	<table v-if="stype === \'horizontal\'">\
		<tr>\
			<td v-for="(item, index) in sItems" :key="index">\
    			<component :is="item.com" ref="mRefs"></component>\
    		</td>\
    	</tr>\
    </table>\
    <table v-else>\
		<tr v-for="item in sItems" :key="item.id" >\
			<td>\
    			<component :is="item.com" ref="mRefs"></component>\
    		</td>\
    	</tr>\
    </table>\
    ';
	this.props = {
		items: null,
		itype: null,
	};
}

Vue.component('item-listview', new _LIST_VIEW());