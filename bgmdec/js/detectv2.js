setTimeout(testall, 1000);

function testall(){
    NetPing("https://bangumi.zeroarea.ml/","ori");
	NetPing("https://bgmc.zeroarea.ml/","cdf");
	NetPing("https://cloud.zeroarea.ml:5221/","cdn");
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