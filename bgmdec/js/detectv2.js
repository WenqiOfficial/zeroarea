setTimeout(testall, 1000);
//setTimeout
function testall(){
    NetPing("https://bgm.xn--9iq62xb79b.cn/","txc");
	NetPing("https://bangumi.zeroarea.link/","cdf");
	NetPing("https://cloud.wenqi.icu:5221/","cdn");
	NetPing("https://cloud.zeroarea.link/","cdfcdn");
	NetPing("https://my.zeroarea.link/","mgc");
}

function statuchange(name,statu) {
	if(statu==1){
		$("#"+name)
    	.find('[data-fa-i2svg]')
    	.removeClass('fa-spin')
    	.toggleClass('fa-angle-down')
		.toggleClass('fa-check');
    	$("#"+name).removeClass('testing').addClass('good')
    	$("#"+name+"t").text(" 通讯正常!")
		console.log(name+" server ok.");
	}else{
		$("#"+name)
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-times');
        $("#"+name).removeClass('testing').addClass('bad')
        $("#"+name+"t").text(" 通讯出错!")
		console.log(name+" server load error.");
	}
	
}

async function NetPing(pingUrl,name) {
	$.ajax({
		url:pingUrl,
		type:"get",
		async:true,
		dataType: "jsonp", 
		success:function(){
			ress= 1;
			console.log('ajax ress='+ress);
			statuchange(name,ress);
		 },
	  	error: function(){
			ress= 0;
			console.log('ajax ress fail='+ress);
			statuchange(name,ress);
		}
	});
}
