
function _TEXTVIEW(){
	_VIEW.call(this);
 
	this.data = function() {
		return _TEXTVIEW.getData();
	};

	this.template = '<div v-text="itext" :class="iclass" :style="istyle"> </div>';
	this.props = ['itext', 'iclass', 'istyle'];
}
externObj(_TEXTVIEW, _VIEW);
_TEXTVIEW.getData = function() {
	var data = _VIEW.getData();
	data.type = "TEXT";
	return data;
}

Vue.component('item-textview', new _TEXTVIEW());