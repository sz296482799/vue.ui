
function COM_ITEM(src, text, isFource) {
	_VIEW_GROUP.call(this);

	this.data = function () {
		var mData = _VIEW_GROUP.getData();

		mData.type = "HOME_ITEM";

		mData.isrc = src;
		mData.itext = text;
		mData.itemclass = "list_icon";
		mData.imgclass = "in_pic";
		mData.textclass = "list_text";
		mData.imgstyle = {};
		mData.textstyle = {};

		if(typeof isFource !== 'undefined')
			mData.canFource = isFource;
		else
			mData.canFource = true;
		return mData;
	};

	this.methods.setFource = function(isTrue) {
		if(isTrue) {
			this.imgstyle = { "borderColor": "rgb(228, 106, 0)"};
			this.textstyle = { "color": "rgb(228, 106, 0)"};
		}
		else {
			this.imgstyle = {};
			this.textstyle = {};
		}
		return true;
	};

	this.template = '\
	<div :class="itemclass">\
		<item-imgview :isrc="isrc" :class="imgclass" :style="imgstyle"></item-imgview>\
		<item-textview :itext="itext" :class="textclass" :style="textstyle"></item-textview>\
	</div>\
	';
}
externObj(COM_ITEM, _VIEW_GROUP);

function COM_LIST(items) {
	_VIEW_GROUP.call(this);

	this.data = function() {
		var mData = _VIEW_GROUP.getData();

		mData.type = "HOME_LIST";
		mData.items = items;
		mData.itype = 'horizontal';
		return mData;
	};

	this.template = '\
	<div>\
		<item-listview :itype="itype" :items="items"></item-listview>\
	</div>\
	';
}
externObj(COM_LIST, _VIEW_GROUP);

function HOME_VIEW(configs) {
	_VIEW_ACTIVEITY.call(this);
 
	this.data = function() {
		var mData = _VIEW_ACTIVEITY.getData();

		mData.type = "HOME";
		mData.textclass = "common_text";
		mData.ftextclass = "focus_text";
		mData.startIndex = 0;
		mData.maxItem = 7;

		mData.items = new Array();
		for (var i = 0; i < configs.length; i++) {
			mData.items[i] = new Object();
			if(configs[i].name)
				mData.items[i].itext = configs[i].name;
			if(configs[i].items)
				mData.items[i].list = new COM_LIST(configs[i].items);
		}
		return mData;
	};

	this.computed = {
		filteredItems: function () {

			var fItems = new Array();
			for (var i = 0; i < this.items.length; i++) {
				fItems.push(this.items[(this.startIndex + i + 3) % this.items.length]);
            }
            return fItems.slice(0, this.maxItem);
		},
	};

	this.methods.onKeyUp = function(event) {
		return this.onSuperKeyUp(event);
	};
	this.methods.onKeyDown = function(event) {
		var code = event.keyCode;

		switch(code) {
			case KeyEvent.KEY_DOWN:
				this.startIndex = (this.startIndex + 1) % this.items.length;
				Vue.nextTick(function () {
					if(this.$refs.profile[0].tryFource) {
						var item = this.$refs.profile[0].tryFource();
						if(item) {
							this.curFource = item;
						}
					}
				}, this);
				return true;
			break;
			case KeyEvent.KEY_UP:
				this.startIndex = (this.startIndex > 0) ? (this.startIndex - 1) : (this.items.length - 1);
				Vue.nextTick(function () {
					if(this.$refs.profile[0].tryFource) {
						var item = this.$refs.profile[0].tryFource();
						if(item) {
							this.curFource = item;
						}
					}
				}, this);
				return true;
			break;
		}
		return this.onSuperKeyDown(event);
	};

	this.template = '\
	<div>\
	<div class="vbg" style="display:none">\
		<div class="bg1"></div>\
		<div class="bg2"></div>\
		<div class="bg3"></div>\
		<div class="bg4"></div>\
		<div class="bg5"></div>\
		<div class="bg6"></div>\
		<div class="bg7"></div>\
		<div class="bg8"></div>\
		<div class="bg9"></div>\
		<div class="bg10"></div>\
		<div class="bg11"></div>\
		<div class="bg12"></div>\
		<div class="bg13"></div>\
		<div class="bg14"></div>\
	</div>\
	<div class="" >\
		<div v-for="(item, index) in filteredItems" :key="index">\
			<template v-if="index == 5">\
				<item-textview :itext="item.itext" :class="ftextclass"></item-textview>\
				<keep-alive>\
		    		<component :is="item.list" ref="profile" ></component>\
				</keep-alive>\
			</template>\
    		<item-textview v-else :itext="item.itext" :class="textclass"></item-textview>\
    	</div>\
	</div>\
	</div>\
	';
}
externObj(HOME_VIEW, _VIEW_ACTIVEITY);

var program_config = {
		name: '節目表',
		items: [
			{com: new COM_ITEM("img/0_1.png", '節目表')},
		],
};
var vod_config = {
		name: '包月视讯',
		items: [
			{com: new COM_ITEM("img/1_1.png", '電影選單')},
			{com: new COM_ITEM("img/1_2.png", '影片排行榜')},
			{com: new COM_ITEM("img/1_3.png", '影片搜尋')},
			{com: new COM_ITEM("img/1_4.png", '播放清單')},
			{com: new COM_ITEM("img/1_5.png", '系統設定')}
		],
};
var iptv_config = {
		name: '隨選視訊',
		items: [
			{com: new COM_ITEM("img/2_1.png", '電影選單')},
			{com: new COM_ITEM("img/2_2.png", '影片排行榜')},
			{com: new COM_ITEM("img/2_3.png", '影片搜尋')},
			{com: new COM_ITEM("img/2_4.png", '播放清單')},
			{com: new COM_ITEM("img/2_5.png", '系統設定')}
		],
};
var mail_config = {
		name: '郵件訊息',
		items: [
			{com: new COM_ITEM("img/3_1.png", '電影選單')}
		],
};
var live_config = {
		name: '線上直播',
		items: [
			{com: new COM_ITEM("img/4_1.png", '線上直播')}
		],
};
var setting_config = {
		name: '系統設定',
		items: [
			{com: new COM_ITEM("img/5_1.png", '頻道搜尋')},
			{com: new COM_ITEM("img/5_2.png", '進階設定')},
			{com: new COM_ITEM("img/5_3.png", '本機資訊')},
			{com: new COM_ITEM("img/5_4.png", '郵件列表')},
			{com: new COM_ITEM("img/5_5.png", '聯繫我們')}
		],
};
var media_config = {
		name: '多媒體播放',
		items: [
			{com: new COM_ITEM("img/6_1.png", '電影')},
			{com: new COM_ITEM("img/6_2.png", '音樂')},
			{com: new COM_ITEM("img/6_3.png", '圖片')}
		],
};
var rec_config = {
		name: '錄影機',
		items: [
			{com: new COM_ITEM("img/7_1.png", '已錄節目')},
			{com: new COM_ITEM("img/7_2.png", '預約節目錄影')},
			{com: new COM_ITEM("img/7_3.png", '預約時段錄影')},
			{com: new COM_ITEM("img/7_4.png", '預約錄影清單')}
		],
};
var home_config = [
	program_config,
	vod_config,
	iptv_config,
	mail_config,
	live_config,
	setting_config,
	media_config,
	rec_config
];
var com_home = new HOME_VIEW(home_config);