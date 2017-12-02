
function _IMG_VIEW(){

	this.extends = new _VIEW();
	this.data = function () {
		return {
			type: 'IMG_VIEW',
		};
	};
	this.template = '<img :src="isrc"></img>';
	this.props = ['isrc'];
}
Vue.component('item-imgview', new _IMG_VIEW());