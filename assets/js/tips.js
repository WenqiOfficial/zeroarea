function firsttips() {
	sayhi(), $.NZ_MsgBox.tipsbar({
		title: "いらっしゃいませ~",
		content: "欢迎！这是一个云の间的中转站噢！",
		type: "info",
		tipsort: "bottom",
		showtime: 4e3,
		processbar: !1
	}), $.NZ_MsgBox.tipsbar({
		title: "Attention！",
		content: "新域名为: zeroarea.top ！",
		type: "warning",
		tipsort: "top",
		showtime: 1e4,
		processbar: !1
	}), $.NZ_MsgBox.tipsbar({
		title: "ヾ(•ω•`)o",
		content: "建议先阅读“云·详”！",
		type: "info",
		tipsort: "top",
		showtime: 1e4,
		processbar: !1
	}), 6 == date.getDay() && 3 == date.getHours() && date.getMinutes() <= 10 && $.NZ_MsgBox.tipsbar({
		title: "哔哔哔！",
		content: "现在是维护时间！可能会访问失败哦！",
		type: "warning",
		tipsort: "bottom",
		showtime: 5e3,
		processbar: !1
	})
}

function testfun() {
	$.NZ_MsgBox.tipsbar({
		title: "test~",
		content: "测试信息！",
		type: "info",
		tipsort: "bottom",
		showtime: 2500,
		processbar: !1
	}), $.NZ_MsgBox.toast({
		content: "测试信息长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长",
		location: "top",
		showtime: 3e5,
		processbar: !1
	})
}

function sayhi() {
	var t = date.getHours();
	t < 6 ? t = "已经凌晨了！勤奋的你也要注意休息了哦" : t < 11 ? t = "上午好！充满元气加油吧！" : t < 13 ? t = "中午好，吃完午饭小憩一下很不错哦" : t < 16 ? t = "下午好，要更加精神百倍" : t < 18 ? t = "傍晚时分~努力了一天辛苦啦" : t < 24 && (t = "天黑了...早点睡个好觉吧..."), $.NZ_MsgBox.toast({
		content: t,
		location: "top",
		showtime: 3e3
	})
}
var botton = $("#testbotton"),
	$window = $(window),
	date = new Date;
botton.on("click", testfun), $window.on("load", function() {
	window.setTimeout(firsttips, 1e3)
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#share"),
	content: "一些大家分享的文件(番剧、音乐、游戏等)",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#game"),
	content: "电动组游戏资源直达车！——",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#film"),
	content: "零次元珍贵影像公开(bushi)",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#self"),
	content: "属于你自己的目录(要登录嗷)",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#detail"),
	content: "关于这个地方...",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#baidupan"),
	content: "基于百度盘的另一个网盘哇！(由蘑菇提供)",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#live"),
	content: "零次元公开推流(好评测试中)！",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#bgm"),
	content: "零次元动漫站：番次元！",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#bingai"),
	content: "BingAI镜像站，不用爬墙和登录！",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#quiz"),
	content: "开门大吉！(东方版)",
	location: "bottom"
}), $.NZ_MsgBox.tooltip({
	tiptarget: $("#lain"),
	content: "Lain的世界",
	location: "bottom"
});