var program_config = {
	name: '節目表',
	items: [
		{com: new HOME_ITEM("img/0_1.png", '節目表')},
	],
};
var vod_config = {
	name: '包月视讯',
	items: [
		{com: new HOME_ITEM("img/1_1.png", '電影選單')},
		{com: new HOME_ITEM("img/1_2.png", '影片排行榜')},
		{com: new HOME_ITEM("img/1_3.png", '影片搜尋')},
		{com: new HOME_ITEM("img/1_4.png", '播放清單')},
		{com: new HOME_ITEM("img/1_5.png", '系統設定')}
	],
};
var iptv_config = {
	name: '隨選視訊',
	items: [
		{com: new HOME_ITEM("img/2_1.png", '電影選單')},
		{com: new HOME_ITEM("img/2_2.png", '影片排行榜')},
		{com: new HOME_ITEM("img/2_3.png", '影片搜尋')},
		{com: new HOME_ITEM("img/2_4.png", '播放清單')},
		{com: new HOME_ITEM("img/2_5.png", '系統設定')}
	],
};
var mail_config = {
	name: '郵件訊息',
	items: [
		{com: new HOME_ITEM("img/3_1.png", '電影選單')}
	],
};
var live_config = {
	name: '線上直播',
	items: [
		{com: new HOME_ITEM("img/4_1.png", '線上直播')}
	],
};
var setting_config = {
	name: '系統設定',
	items: [
		{com: new HOME_ITEM("img/5_1.png", '頻道搜尋')},
		{com: new HOME_ITEM("img/5_2.png", '進階設定')},
		{com: new HOME_ITEM("img/5_3.png", '本機資訊')},
		{com: new HOME_ITEM("img/5_4.png", '郵件列表')},
		{com: new HOME_ITEM("img/5_5.png", '聯繫我們')}
	],
};
var media_config = {
	name: '多媒體播放',
	items: [
		{com: new HOME_ITEM("img/6_1.png", '電影')},
		{com: new HOME_ITEM("img/6_2.png", '音樂')},
		{com: new HOME_ITEM("img/6_3.png", '圖片')}
	],
};
var rec_config = {
	name: '錄影機',
	items: [
		{com: new HOME_ITEM("img/7_1.png", '已錄節目')},
		{com: new HOME_ITEM("img/7_2.png", '預約節目錄影')},
		{com: new HOME_ITEM("img/7_3.png", '預約時段錄影')},
		{com: new HOME_ITEM("img/7_4.png", '預約錄影清單')}
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