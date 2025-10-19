/* BG Changer v2 */
/* 2023.06.08    */
/* WenqiOfficial */
$(function () {
    var r = document.querySelector(':root'),
        bgbox = $("#bgbox"),
        bg = $("#bg"),
        ani = "开启",//高级动画开关
        picnum = 0,//轮选到的picnum
        nowpid = 0,//当前已展示的picpid
        max,//最大picnum
        nextpicnum, webp;//下一张picnum

    var countcnf = {
        useEasing: true,
        useGrouping: false
    };

    // pic webp format
    var pic = [
        "https://cloud.dorm.wenqi.icu:5221/f/wOu3/pic01new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/ryFx/pic02new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/6zIL/pic03new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/MaU8/pic04new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/DkSG/pic05new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/zLhM/pic06new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/5dC8/pic07new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/jXcW/pic08new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/okTx/pic09new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/VyfW/pic10new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/eyiN/pic11new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/EdsG/pic12new.webp",
        "https://cloud.dorm.wenqi.icu:5221/f/ZNHo/pic13new.webp"
    ];
    
    // pic original format
    var pico = [
        "https://cloud.dorm.wenqi.icu:5221/f/kxfN/pic01new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/QpSN/pic02new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/GBcv/pic03new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/7lTM/pic04new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/0GsZ/pic05new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/dNiQ/pic06new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/vGtw/pic07new.png",
        "https://cloud.dorm.wenqi.icu:5221/f/JoHR/pic08new.jpg",
        "https://cloud.dorm.wenqi.icu:5221/f/A0u8/pic09new.png",
        "https://cloud.dorm.wenqi.icu:5221/f/9JFb/pic10new.png",
        "https://cloud.dorm.wenqi.icu:5221/f/aZIj/pic11new.png",
        "https://cloud.dorm.wenqi.icu:5221/f/3pUb/pic12new.png",
        "https://cloud.dorm.wenqi.icu:5221/f/2ZtR/pic13new.jpg",
    ];
    var picpid = [
        83508760,
        79776133,
        76685776,
        75778903,
        51698567,
        34844544,
        88330224,
        74097177,
        101462757,
        103788304,
        89890583,
        73424731,
        96910253
    ];

    //检测webp支持情况
    var isSupportWebp = function () {
        try {
            return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
        } catch (err) {
            return false;
        }
    };
    webp = isSupportWebp();

    $window.on('load', function () {
        setTimeout(function () {
            nextpicnum = randompic();//第一次预选
            changepic();
            if (localStorage.getItem("conf_background_ani") == null || localStorage.getItem("conf_background_ani") == ani) {
                localStorage.setItem("conf_background_ani", ani);
            } else {
                $('#particles-js').addClass('is-preload');
                bg.removeClass('ani');
                bg.removeClass('scaled');
                bgbox.removeClass('black');
                ani = "关闭";
                localStorage.setItem("conf_background_ani", ani);
            }
        }, 100);
    });


    //轮picnum
    function randompic() {
        var randomtemp;//随机选择的picnum
        do {
            max = 12;
            randomtemp = Math.floor(Math.random() * (max + 1));
        } while (randomtemp == picnum);
        return randomtemp;
    }

    //设置pic css
    function picset(picnum,nextpicnum) {
        if(webp){
            r.style.setProperty('--imgurl', 'url(' + pic[picnum] + ')');
            r.style.setProperty('--nextimgurl', 'url(' + pic[nextpicnum] + ')');
        }else{
            r.style.setProperty('--imgurl', 'url(' + pico[picnum] + ')');
            r.style.setProperty('--nextimgurl', 'url(' + pico[nextpicnum] + ')');
        }
    }
    
    //更改pic
    function changepic() {
        picnum = nextpicnum;
        nextpicnum = randompic();
        bgbox.addClass('black');
        setTimeout(function () {
            picset(picnum,nextpicnum);
            bgbox.removeClass('black');

            anichanger();

            new CountUp("pid", nowpid, picpid[picnum], 0, 2, countcnf).start();
            nowpid = picpid[picnum];    //picpid滚动更新
        }, 1000);
        setTimeout(changepic, 14000);
    }

    function anichanger() {
        if (bg.hasClass('ani')) {
            if (bg.hasClass('scaled')) {
                bg.removeClass('scaled');
            } else {
                bg.addClass('scaled');
            }
        }
    }

    //效果开关
    $('.aniswitch').on('click', aniswitcher);
    function aniswitcher() {
        if (ani == "开启") {
            bgbox.addClass('black');
            setTimeout(function () {
                $('#particles-js').addClass('is-preload');
                bg.removeClass('ani');
                bg.removeClass('scaled');
                bgbox.removeClass('black');
            }, 1000);
            ani = "关闭";
            localStorage.setItem("conf_background_ani", ani);
        } else {
            bgbox.addClass('black');
            setTimeout(function () {
                $('#particles-js').removeClass('is-preload');
                bg.addClass('ani');
                bg.addClass('scaled');
                bgbox.removeClass('black');
            }, 1000);
            ani = "开启";
            localStorage.setItem("conf_background_ani", ani);
        }
        $.NZ_MsgBox.toast({
            content: "动画效果已" + ani,
            location: "top",
            showtime: 2500
        });
    }
});