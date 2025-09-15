$(function() {
    var r = document.querySelector(':root'),
        bgbox = $("#bgbox"),
        ani = "开启",
        num = 0,
        nowpid = 0,
        max, temp, pic = new Array(),
        picpid = new Array();
    // pic[0] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/407/pic02new.webp?sign=oEJPS0C75qX5Ox1mQ7ZfIAV7XeN_iyCwUDR8VZv3kN8=:0";
    pic[0] = "https://raw.hubproxy.wenqi.icu/WenqiOfficial/wenqicdn/master/img/cover/mainimg7.webp";
    picpid[0] = 79776133;
    // pic[1] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/552/pic01new.webp?sign=B1iWbDd580RSTiBS23D1QNsEc-fIvUbFVOvCEhUo-yc%3D%3A0";
    // picpid[1] = 83508760;
    // pic[2] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/553/pic03new.webp?sign=-6tPKe7D5bo6Q4FA4q-if_mTwdDbJPvbo8Q7J1mnoIc%3D%3A0";
    // picpid[2] = 76685776;
    // pic[3] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/957/pic04new.webp?sign=y9Ue5XevB2gCYf1JNH_8tbO3lcX3BnDJ4eCaURRHqZg%3D%3A0";
    // picpid[3] = 75778903;
    // pic[4] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/966/pic05new.webp?sign=4l0xy5xmC9138kN7Y1jXvlyjgru6RuaGfmxpuJtyY1Q%3D%3A0";
    // picpid[4] = 51698567;
    // pic[5] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/962/pic06new.webp?sign=TG858chNCBA_RPFrGm29XgY_4JtljZHobSUyVHBzhwA%3D%3A0";
    // picpid[5] = 34844544;
    // pic[6] = "https://cloud.zeroarea.ml:5221/api/v3/file/get/964/pic07new.webp?sign=ew-wFvqpEGoJY43e6eyyOQs0t34khCCKbNFUYS--Lso%3D%3A0";
    // picpid[6] = 88330224;
    randompic();
    $window.on('load', function() {
        var a = 12000;
        setInterval(randompic, a)
    });

    function randompic() {
        do {
            max = pic.length - 1;
            temp = Math.floor(Math.random() * (max + 1))
        } while (temp == num);
        num = temp;
        bgbox.addClass('black');
        setTimeout(function() {
            r.style.setProperty('--imgurl', 'url(' + pic[num] + ')');
            bgbox.removeClass('black');
            changepid()
        }, 1000)
    }
    var b = {
        useEasing: true,
        useGrouping: false
    };
    new CountUp("pid", nowpid, picpid[num], 0, 2, b).start();
    nowpid = picpid[num];

    function changepid() {
        new CountUp("pid", nowpid, picpid[num], 0, 2, b).start();
        nowpid = picpid[num]
    }
    $('.aniswitch').on('click', aniswitcher);

    function aniswitcher() {
        if (ani == "开启") {
            bgbox.addClass('black');
            setTimeout(function() {
                $('#particles-js').addClass('is-preload');
                $('.bg').removeClass('anion');
                bgbox.removeClass('black')
            }, 1000);
            ani = "关闭"
        } else {
            bgbox.addClass('black');
            setTimeout(function() {
                $('.bg').addClass('anion');
                $('#particles-js').removeClass('is-preload');
                bgbox.removeClass('black')
            }, 1000);
            ani = "开启"
        }
        $.NZ_MsgBox.toast({
            content: "动画效果已" + ani,
            location: "top",
            showtime: 2500
        })
    }
});