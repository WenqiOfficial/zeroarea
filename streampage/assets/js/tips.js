var botton = $("#testbotton"),
    $window = $(window),
    date = new Date(),
    shutdown = 0;
$window.on('load', function() {
    window.setTimeout(firsttips, 1000)
});

function firsttips() {
    $.NZ_MsgBox.tipsbar({
        title: "ヾ(•ω•`)o",
        content: "欸嘿",
        type: "info",
        tipsort: "top",
        showtime: 3000
    });
    if(shutdown==1)$.NZ_MsgBox.tipsbar({
        title: "哔哔哔！",
        content: "推流服务器已经关闭！",
        type: "warning",
        tipsort: "bottom",
        showtime: 5000
    })
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