setTimeout(testall, 1000);
setTimeout
function testall(){
    NetPing("https://bgm.金之声.cn/","txc");
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

function NetPing(pingUrl,name) {
	$.ajax({
		url:pingUrl,
		type:"get",
		async:false,
		dataType: "jsonp", 
		success:function(){
			ress= 1;
			console.log('ajaxress'+ress);
			statuchange(name,ress);
		 },
	  	statusCode:{
		404:function(){
		 ress= 0;console.log('ajax ress fail='+ress);statuchange(name,ress);
		},
		200:function(){
		 ress= 1;console.log('ajax ress success='+ress);statuchange(name,ress);
		}
	  	}
	});
}