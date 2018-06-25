
var test1_config = {
	name:"系統設定>TEST1",
	items: [
		{com: new TEST_ITEM('電影選單1', new COM_MAIN_FREQ())},
		{com: new TEST_ITEM('影片排行榜2', new COM_MAIN_FREQ())},
		{com: new TEST_ITEM('影片搜尋3', new COM_MAIN_FREQ())},
		{com: new TEST_ITEM('播放清單4')},
		{com: new TEST_ITEM('系統設定5')},
		{com: new TEST_ITEM('電影選單6')},
		{com: new TEST_ITEM('影片排行榜7')},
		{com: new TEST_ITEM('影片搜尋8')},
		{com: new TEST_ITEM('影片排行榜9')},
		{com: new TEST_ITEM('影片搜尋10')},
		{com: new TEST_ITEM('影片排行榜11')},
		{com: new TEST_ITEM('影片搜尋12')},
		{com: new TEST_ITEM('影片排行榜13')},
		{com: new TEST_ITEM('影片搜尋14')},
	],
};

var test_config = {
	'test1': test1_config,
};
test_config['def_item'] = {com: new TEST_ITEM('', false)};
test_config['bg'] = com_bg;