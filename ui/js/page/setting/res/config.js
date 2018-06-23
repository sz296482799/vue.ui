
var advset_config = {
	name:"系統設定>進階設定",
	items: [
		{com: new SETTING_ITEM('電影選單1', new COM_MAIN_FREQ())},
		{com: new SETTING_ITEM('影片排行榜2', new COM_MAIN_FREQ())},
		{com: new SETTING_ITEM('影片搜尋3', new COM_MAIN_FREQ())},
		{com: new SETTING_ITEM('播放清單4')},
		{com: new SETTING_ITEM('系統設定5')},
		{com: new SETTING_ITEM('電影選單6')},
		{com: new SETTING_ITEM('影片排行榜7')},
		{com: new SETTING_ITEM('影片搜尋8')},
		{com: new SETTING_ITEM('影片排行榜9')},
		{com: new SETTING_ITEM('影片搜尋10')},
		{com: new SETTING_ITEM('影片排行榜11')},
		{com: new SETTING_ITEM('影片搜尋12')},
		{com: new SETTING_ITEM('影片排行榜13')},
		{com: new SETTING_ITEM('影片搜尋14')},
	],
};

var setting_config = {
	'advset': advset_config,
};
setting_config['def_item'] = {com: new SETTING_ITEM('', false)};
setting_config['bg'] = com_bg;