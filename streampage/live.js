var liveroom = new Array;
liveroom[0]='livetest';
liveroom[1]='game1';
liveroom[2]='game2';
liveroom[3]='game3';
function liveplay(id){
    setTimeout(function(){
        // alert("firstplay"+id);
        $('#wrapper').addClass('playing');
        $('#l'+id).append("<p class='playerbox'><iframe class='liveplayer' width='100%' height='100%' scrolling='no' frameborder='0' frameborder src='liveroom/index.html?room="+liveroom[String.fromCharCode(id.charCodeAt()-17)]+"'></iframe></p>");
    },100)
}
function livestop()
{
    if($('#wrapper').hasClass('playing')) {
        // alert("stop");
        setTimeout(function(){
            $('.playerbox').remove();
        },500);
        $('#wrapper').removeClass('playing');}
}
$('.close').on('click',livestop);
$('#wrapper').on('click',livestop);
if(window.location.hash!=''){
    // alert(window.location.hash.substr(1));
    liveplay(window.location.hash.substr(2));
}