
function _TEXT_VIEW(){
	
	this.extends = new _VIEW();
	this.data = function () {
		return {
			type: 'TEXT_VIEW',
		};
	};

	this.template = '<div v-text="itext" :class="iclass" :style="istyle"> </div>';
	this.props = ['itext', 'iclass', 'istyle'];
}
Vue.component('item-textview', new _TEXT_VIEW());