/* BG Changer v2 */
/* 2023.06.08    */
/* WenqiOfficial */
$(function() {
    var r = document.querySelector(':root'),
        bgbox = $("#bgbox"),
        bg = $("#bg"),
        ani = "开启",//高级动画开关
        picnum = 0,//轮选到的picnum
        nowpid = 0,//当前已展示的picpid
        max,//最大picnum
        nextpicnum,//下一张picnum
        pic = new Array(),picpid = new Array();

    var countcnf = {
        useEasing: true,
        useGrouping: false
    };

    pic[0] = "https://cloud.wenqi.icu:5221/api/v3/file/get/407/pic02new.webp?sign=oEJPS0C75qX5Ox1mQ7ZfIAV7XeN_iyCwUDR8VZv3kN8=:0";
    picpid[0] = 79776133;
    pic[1] = "https://cloud.wenqi.icu:5221/api/v3/file/get/552/pic01new.webp?sign=B1iWbDd580RSTiBS23D1QNsEc-fIvUbFVOvCEhUo-yc%3D%3A0";
    picpid[1] = 83508760;
    pic[2] = "https://cloud.wenqi.icu:5221/api/v3/file/get/553/pic03new.webp?sign=-6tPKe7D5bo6Q4FA4q-if_mTwdDbJPvbo8Q7J1mnoIc%3D%3A0";
    picpid[2] = 76685776;
    pic[3] = "https://cloud.wenqi.icu:5221/api/v3/file/get/957/pic04new.webp?sign=y9Ue5XevB2gCYf1JNH_8tbO3lcX3BnDJ4eCaURRHqZg%3D%3A0";
    picpid[3] = 75778903;
    pic[4] = "https://cloud.wenqi.icu:5221/api/v3/file/get/966/pic05new.webp?sign=4l0xy5xmC9138kN7Y1jXvlyjgru6RuaGfmxpuJtyY1Q%3D%3A0";
    picpid[4] = 51698567;
    pic[5] = "https://cloud.wenqi.icu:5221/api/v3/file/get/962/pic06new.webp?sign=TG858chNCBA_RPFrGm29XgY_4JtljZHobSUyVHBzhwA%3D%3A0";
    picpid[5] = 34844544;
    pic[6] = "https://cloud.wenqi.icu:5221/api/v3/file/get/964/pic07new.webp?sign=ew-wFvqpEGoJY43e6eyyOQs0t34khCCKbNFUYS--Lso%3D%3A0";
    picpid[6] = 88330224;
    pic[7] = "https://cloud.wenqi.icu:5221/api/v3/file/get/3496/pic08new.webp?sign=OgAeEbAPFzvZgTDqJ6dD8penpy6rwdyyaBYWc27do0o%3D%3A0";
    picpid[7] = 74097177;
    pic[8] = "https://cloud.wenqi.icu:5221/api/v3/file/get/3498/pic09new.webp?sign=qmsEAnzPikowmM3a63nYmvxJ7i9iTo4EHgju1uDuXRg%3D%3A0";
    picpid[8] = 101462757;
    pic[9] = "https://cloud.wenqi.icu:5221/api/v3/file/get/3497/pic10new.webp?sign=qSSY0ItcHMvNHzZ4g9TH0MUytFKN8UWZAGiPJlQqBCE%3D%3A0";
    picpid[9] = 103788304;
    pic[10] = "https://cloud.wenqi.icu:5221/api/v3/file/get/3501/pic11new.webp?sign=wGQIv6jyGqE46LLnplPsjAsj-DLlrQpuqYUu4P-7N-Y%3D%3A0";
    picpid[10] = 89890583;
    pic[11] = "https://cloud.wenqi.icu:5221/api/v3/file/get/5990/pic12new.webp?sign=Qn5gXpcX_ekt1PLZViZO2PS6tmy6W7mqX0hSZnfC1hw%3D%3A0";
    picpid[11] = 73424731;


    nextpicnum = randompic();//第一次预选
    r.style.setProperty('--nextimgurl', 'url(' + pic[nextpicnum] + ')');

    $window.on('load', function() {
        setTimeout(function(){
            changepic();
            if(localStorage.getItem("conf_background_ani")==null||localStorage.getItem("conf_background_ani")==ani)
            {
                localStorage.setItem("conf_background_ani", ani);
            }else{
                $('#particles-js').addClass('is-preload');
                bg.removeClass('ani');
                bg.removeClass('scaled');
                bgbox.removeClass('black');
                ani = "关闭";
                localStorage.setItem("conf_background_ani", ani);
            }  
        },100)
    });


    //轮picnum
    function randompic() {
        var randomtemp;//随机选择的picnum
        do {
            max = 11;
            randomtemp = Math.floor(Math.random() * (max + 1));
        } while (randomtemp == picnum);
        return randomtemp;
    }

    //更改pic
    function changepic() {
            picnum = nextpicnum;
            nextpicnum = randompic();
            bgbox.addClass('black');
            setTimeout(function() {
                r.style.setProperty('--imgurl', 'url(' + pic[picnum] + ')');
                r.style.setProperty('--nextimgurl', 'url(' + pic[nextpicnum] + ')');
                bgbox.removeClass('black');

                anichanger();

                new CountUp("pid", nowpid, picpid[picnum], 0, 2, countcnf).start();
                nowpid = picpid[picnum];    //picpid滚动更新
            }, 1000)
            setTimeout(changepic,14000)
    }

    function anichanger() {
        if (bg.hasClass('ani')) {
            if (bg.hasClass('scaled')) {
                bg.removeClass('scaled');
            }else{
                bg.addClass('scaled');
            }
        }
    }

    //效果开关
    $('.aniswitch').on('click', aniswitcher);
    function aniswitcher() {
        if (ani == "开启") {
            bgbox.addClass('black');
            setTimeout(function() {
                $('#particles-js').addClass('is-preload');
                bg.removeClass('ani');
                bg.removeClass('scaled');
                bgbox.removeClass('black');
            }, 1000);
            ani = "关闭";
            localStorage.setItem("conf_background_ani", ani);
        } else {
            bgbox.addClass('black');
            setTimeout(function() {
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
        })
    }
});