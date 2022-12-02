function liveplay(id){
    // $('#'+id).
}
function getString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.hash
    if (r!=null) return r[2]; return '';
}
alert(getString)