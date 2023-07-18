var liveroom = new Array;
liveroom[0]='livetest';
liveroom[1]='game1';
liveroom[2]='game2';
liveroom[3]='game3';
function liveplay(id){
    // setTimeout(function(){
    //     // alert("firstplay"+id);
    //     $('#wrapper').addClass('playing');
    //     $('#l'+id).append("<p class='playerbox'><iframe allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' msallowfullscreen='msallowfullscreen' oallowfullscreen='oallowfullscreen' webkitallowfullscreen='webkitallowfullscreen' class='liveplayer' width='100%' height='100%' scrolling='no' frameborder='0' frameborder src='liveroom/index-dplayer.html?room="+liveroom[String.fromCharCode(id.charCodeAt()-17)]+"'></iframe></p>");
    // },100)
    $('#l'+id).append("<div id='dplayer'></div>");
    creatplayer(liveroom[String.fromCharCode(id.charCodeAt()-17)]);
}
function livestop()
{
    // if($('#wrapper').hasClass('playing')) {
        // alert("stop");
        setTimeout(function(){
            $('#dplayer').remove();
        },500);
        // $('#wrapper').removeClass('playing');}
}
$('.close').on('click',livestop);
// $('#wrapper').on('click',livestop);
if(window.location.hash!=''){
    // alert(window.location.hash.substr(1));
    liveplay(window.location.hash.substr(2));
}

function creatplayer(room){
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
            url: 'https://stream.wenqi.ml:48088/live/'+room+'.flv',
            type: 'flv',
        },
    });
    dp.on('fullscreen', function(){fullscreen=1;});
    dp.on('fullscreen_cancel', function(){fullscreen=0;});
    dp.on('resize', function () {
        console.log('remove set!');
        setTimeout(function(){
            if($('#dplayer').hasClass('dplayer-fulled')){
                $('.main').attr('id','');
            }else if(fullscreen==0){
                $('.main').attr('id','main');
            }
        },10);
    });
}