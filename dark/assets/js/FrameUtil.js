/* Frame Improve */
/* 2024.02.10    */
/* WenqiOfficial */
$(function() {
    var d = 0,
        totaltimes = 60,
        avgfps = 24,
        alerttime = 0,
        alertloop = 4;
    $window.on('load', function() {
        loop()
    });
    var e = function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1000 / 60)
        })
    }();
    var f = 0;
    var g = 0;
    var h = Date.now();
    var i = Date.now();

    function loop() {
        var a = Date.now();
        var b = (a - i);
        var c = Math.round(1000 / b);
        i = a;
        g++;
        f++;
        if (a > 1000 + h) {
            var c = Math.round((f * 1000) / (a - h));
            f = 0;
            h = a;
            d++;
            avgfps = Math.round((avgfps + c) / 2);
            if (d % alertloop == 0 && avgfps <= 24 && d > 1 && $('#bg').hasClass('ani') && alerttime == 0) {
                $('.aniswitch').click();
                alerttime = 1;
                $.NZ_MsgBox.alert({
                    title: "检测到帧率过低！",
                    content: "已自动关闭动画效果，可在页面底部开关重新开启",
                    type: "warning"
                })
            }
        };
        if (d < totaltimes) e(loop)
    }
});