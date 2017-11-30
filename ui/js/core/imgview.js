
function _IMGVIEW(){
	_VIEW.call(this);

	this.data = function() {
		var mData = _VIEW.getData();
		mData.type = "IMG";
		return mData;
	};

	this.template = '<img :src="isrc"></img>';
	this.props = ['isrc'];
	
}
externObj(_IMGVIEW, _VIEW);

Vue.component('item-imgview', new _IMGVIEW());