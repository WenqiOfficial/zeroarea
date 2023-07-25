var botton = $("#testbotton"),
    $window = $(window),
    date = new Date(),
    shutdown = 0;

$window.on('load', function() {
    window.setTimeout(firsttips, 1000);
});

function testserver(){
//检测服务器是否正常
var img = new Image();
img.src = "https://stream.wenqi.icu:48088/favicon.ico";

var timeout = setTimeout(function () {
    img.onerror = img.onload = null;
    console.log("server time out.");
    canNotLoad();
},3000);

img.onerror = function () {
    clearTimeout(timeout);
    console.log("server load error.");
    shutdown = 1;
    canNotLoad();
}

img.onload = function () {
    clearTimeout(timeout);
    console.log("server ok.");
    canLoad();
}

function canNotLoad() {
    var msgtext="与服务器的连接超时！可能会加载失败！"
    if(shutdown==1) msgtext="与服务器的连接错误！"
    $.NZ_MsgBox.tipsbar({
        title: "哔哔哔！",
        content: msgtext,
        type: "warning",
        showtime: 5000,
        processbar: false
    });
}
function canLoad() {
    $.NZ_MsgBox.tipsbar({ 
        title: "ヾ(•ω•`)o"
        , content: '与服务器的连接正常！'
        , type: "success"
        , showtime: 3000
        , processbar: false
    });
}
//
}

function firsttips() {
    // $.NZ_MsgBox.tipsbar({
    //     title: "ヾ(•ω•`)o",
    //     content: "欸嘿",
    //     type: "info",
    //     tipsort: "top",
    //     showtime: 3000
    // });
    testserver();
}
$.NZ_MsgBox.tooltip({
    tiptarget: $("#A"),
    content: "房间：⌈ 推流测试 ⌋",
    location: "bottom"
});
$.NZ_MsgBox.tooltip({
    tiptarget: $("#B"),
    content: "房间：⌈ 电动组1 ⌋",
    location: "bottom"
});
$.NZ_MsgBox.tooltip({
    tiptarget: $("#C"),
    content: "房间：⌈ 电动组2 ⌋",
    location: "bottom"
});
$.NZ_MsgBox.tooltip({
    tiptarget: $("#D"),
    content: "房间：⌈ 电动组3 ⌋",
    location: "bottom"
});
$.NZ_MsgBox.tooltip({
    tiptarget: $("#E"),
    content: "房间：⌈ 电动组4 ⌋",
    location: "bottom"
});