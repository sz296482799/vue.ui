
function _TEXTVIEW(){
	_VIEW.call(this);
 
	this.data = function() {
		var mData = _VIEW.getData();
		mData.type = "TEXT";
		return mData;
	};

	this.template = '<div v-text="itext" :class="iclass" :style="istyle"> </div>';
	this.props = ['itext', 'iclass', 'istyle'];
}
externObj(_TEXTVIEW, _VIEW);

Vue.component('item-textview', new _TEXTVIEW());