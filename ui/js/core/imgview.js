
function _IMGVIEW(){
	_VIEW.call(this);

	this.data = function() {
		return _IMGVIEW.getData();
	};

	this.template = '<img :src="isrc"></img>';
	this.props = ['isrc'];
	
}
externObj(_IMGVIEW, _VIEW);
_IMGVIEW.getData = function() {
	var data = _VIEW.getData();
	data.type = "IMG";
	return data;
}

Vue.component('item-imgview', new _IMGVIEW());