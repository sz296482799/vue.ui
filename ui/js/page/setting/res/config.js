
var advset_config = {
	items: [
		{com: new SETTING_ITEM('電影選單', new COM_MAIN_FREQ())},
		{com: new SETTING_ITEM('影片排行榜')},
		{com: new SETTING_ITEM('影片搜尋', new COM_MAIN_FREQ())},
		{com: new SETTING_ITEM('播放清單')},
		{com: new SETTING_ITEM('系統設定')},
		{com: new SETTING_ITEM('電影選單')},
		{com: new SETTING_ITEM('影片排行榜')},
		{com: new SETTING_ITEM('影片搜尋')},
		{com: new SETTING_ITEM('影片排行榜')},
		{com: new SETTING_ITEM('影片搜尋')},
		{com: new SETTING_ITEM('影片排行榜')},
		{com: new SETTING_ITEM('影片搜尋')},
		{com: new SETTING_ITEM('影片排行榜')},
		{com: new SETTING_ITEM('影片搜尋')},
	],
};

var setting_config = {
	'advset': advset_config,
};
setting_config['def_item'] = {com: new SETTING_ITEM('', false)};
setting_config['bg'] = com_bg;