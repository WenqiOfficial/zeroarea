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

    var pic = [
        "https://cloud.wenqi.icu:5221/api/v3/file/get/552/pic01new.webp?sign=B1iWbDd580RSTiBS23D1QNsEc-fIvUbFVOvCEhUo-yc%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/407/pic02new.webp?sign=oEJPS0C75qX5Ox1mQ7ZfIAV7XeN_iyCwUDR8VZv3kN8=:0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/553/pic03new.webp?sign=-6tPKe7D5bo6Q4FA4q-if_mTwdDbJPvbo8Q7J1mnoIc%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/957/pic04new.webp?sign=y9Ue5XevB2gCYf1JNH_8tbO3lcX3BnDJ4eCaURRHqZg%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/966/pic05new.webp?sign=4l0xy5xmC9138kN7Y1jXvlyjgru6RuaGfmxpuJtyY1Q%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/962/pic06new.webp?sign=TG858chNCBA_RPFrGm29XgY_4JtljZHobSUyVHBzhwA%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/964/pic07new.webp?sign=ew-wFvqpEGoJY43e6eyyOQs0t34khCCKbNFUYS--Lso%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3496/pic08new.webp?sign=OgAeEbAPFzvZgTDqJ6dD8penpy6rwdyyaBYWc27do0o%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3498/pic09new.webp?sign=qmsEAnzPikowmM3a63nYmvxJ7i9iTo4EHgju1uDuXRg%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3497/pic10new.webp?sign=qSSY0ItcHMvNHzZ4g9TH0MUytFKN8UWZAGiPJlQqBCE%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3501/pic11new.webp?sign=wGQIv6jyGqE46LLnplPsjAsj-DLlrQpuqYUu4P-7N-Y%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/5990/pic12new.webp?sign=Qn5gXpcX_ekt1PLZViZO2PS6tmy6W7mqX0hSZnfC1hw%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/16356/pic13new.webp?sign=NTR2IbaTbCOofyf5jIcIdVbHQAUixJc4MpZBzgPQRyE%3D%3A0"
    ];
    var pico = [
        "https://cloud.wenqi.icu:5221/api/v3/file/get/555/pic01new.jpg?sign=Ez3Njf5ZV4viA7dtT_wOHfL32Fz0oIf1hom2lhwc4Ig%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/408/pic02new.jpg?sign=wo36hkXAZfG11_wQfJVtufuYVDH_nZoC50KxxuGKMGo%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/554/pic03new.jpg?sign=mCmP7Sx-wMUG-D49fcIP3bMgQoPGEnKQBUq0c87drG0%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/958/pic04new.jpg?sign=WfjqROvYx_eHPTD7DXeHThzToCtN4_AeHOfkweJboj8%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/965/pic05new.jpg?sign=8n5P2gYszwA8bmRFRvyQTtAvqbS-aIiCYCuxGpYNvPg%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/961/pic06new.jpg?sign=sr3iWRNmBNnP6YrURLwrLH3yxnrAckNQOg1pYI2eKPw%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/963/pic07new.png?sign=VG41DLHybJxxlclvTWsm0YmRMNiQcB8YrL7Ivuv6dlY%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3495/pic08new.jpg?sign=u6hrVhJjaAlma5iDHTsWntAlVPe_sskn8yNJCXFrRqc%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3500/pic09new.png?sign=JzUeZ2igtf3Q4cevGPBvrfNDYGV3NGJ7uRHkN3TZjwc%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3499/pic10new.png?sign=cHxRtCfmtfrl4rgjWUQOYVE1nEJZMp8z9J88L3FRckk%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/3502/pic11new.png?sign=JY-dFR67Kh-u8IeDufDIpQ-V4uygu1c4pgNNG7X0Tq4%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/5989/pic12new.png?sign=4f1G0VUN1IXtw-yhYrBkddV9gXMssK9w8Z_bScOKE18%3D%3A0",
        "https://cloud.wenqi.icu:5221/api/v3/file/get/16355/pic13new.jpg?sign=6zio9ALs3BotWSHXWdimf3yYQ2GNxN8SSUBJsuLwfIk%3D%3A0"
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