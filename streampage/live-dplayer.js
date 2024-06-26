var liveroom = new Array,
    videotype = 'flv';
liveroom[0] = 'livetest';
liveroom[1] = 'game1';
liveroom[2] = 'game2';
liveroom[3] = 'game3';

function device() {
    let uap = new UAParser(window.navigator.userAgent);
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.is('Safari') || md.is('iPhone') || md.is('iPad') || uap.getDevice().is("Apple")) {
        videotype = 'm3u8';
        $.NZ_MsgBox.tipsbar({
            title: "检测到非 FLV 支持设备",
            content: "已自动切换到 HLS 格式了！",
            type: "info",
            tipsort: "top",
            showtime: 3000
        });
    }
}

function liveplay(id) {
    // setTimeout(function(){
    //     // alert("firstplay"+id);
    //     $('#wrapper').addClass('playing');
    //     $('#l'+id).append("<p class='playerbox'><iframe allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' msallowfullscreen='msallowfullscreen' oallowfullscreen='oallowfullscreen' webkitallowfullscreen='webkitallowfullscreen' class='liveplayer' width='100%' height='100%' scrolling='no' frameborder='0' frameborder src='liveroom/index-dplayer.html?room="+liveroom[String.fromCharCode(id.charCodeAt()-17)]+"'></iframe></p>");
    // },100)
    $('#l' + id).append("<div id='dplayer'></div>");
    creatplayer(liveroom[String.fromCharCode(id.charCodeAt() - 17)]);
}

function liveplaycustom() {
    $.NZ_MsgBox.prompt({
        title: "指定房间名：", type: "warning", callback: function (resu) {
            if (resu === '') {
                $.NZ_MsgBox.alert({
                    title: "咦，似乎没有输入？"
                    , content: "请输入正确的房间号！"
                    , type: "warning"
                });
                liveplaycustom();
            } else if (resu !== null) {
                $.NZ_MsgBox.tipsbar({
                    title: "哔哔哔！", content: '正在尝试连接：' + resu + ' ......', type: "info", showtime: 5000
                });
                $('#lcustom').append("<div id='dplayer'></div>");
                creatplayer(resu);
                window.location.href = "#lcustom";
            }
        }
    });
}

function livestop() {
    // if($('#wrapper').hasClass('playing')) {
    // alert("stop");
    setTimeout(function () {
        $('#dplayer').remove();
    }, 500);
    // $('#wrapper').removeClass('playing');}
}

device();
$('.close').on('click', livestop);
// $('#wrapper').on('click',livestop);
if (window.location.hash == '#lcustom') {
    liveplaycustom();
} else if (window.location.hash != '') {
    // alert(window.location.hash.substr(1));
    liveplay(window.location.hash.substr(2));
}

function creatplayer(room) {
    var fullscreen = 0;
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        live: true,
        danmaku: false,
        autoplay: true,
        pluginOptions: {
            flv: {
                // refer to https://github.com/bilibili/flv.js/blob/master/docs/api.md#flvjscreateplayer
                mediaDataSource: {
                    // mediaDataSource config
                },
                config: {
                    // config
                },
            },
        },
        video: {
            url: 'https://stream.wenqi.icu:48088/live/' + room + '.' + videotype,
            type: videotype,
        },
    });
    dp.on('fullscreen', function () { fullscreen = 1; });
    dp.on('fullscreen_cancel', function () { fullscreen = 0; });
    dp.on('resize', function () {
        console.log('remove set!');
        setTimeout(function () {
            if ($('#dplayer').hasClass('dplayer-fulled')) {
                $('.main').attr('id', '');
            } else if (fullscreen == 0) {
                $('.main').attr('id', 'main');
            }
        }, 10);
    });
}