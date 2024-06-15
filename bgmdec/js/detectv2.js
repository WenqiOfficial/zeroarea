setTimeout(testall, 1000);
//setTimeout
function testall(){
    // NetPing("https://bgm.xn--9iq62xb79b.cn/","txc");
	// NetPing("https://bangumi.zeroarea.link/","cdf");
	// NetPing("https://cloud.wenqi.icu:5221/","cdn");
	// NetPing("https://cloud.zeroarea.link/","cdfcdn");
	// NetPing("https://my.zeroarea.link/","mgc");
	NetPing2("https://bgm.xn--9iq62xb79b.cn/imgs/bangumi.png","txc");
	NetPing2("https://bangumi.zeroarea.link/imgs/bangumi.png","cdf");
	NetPing2("https://cloud.wenqi.icu:5221/api/v3/file/get/549/main_circle.svg?sign=rpVtKXXBOlFr1AbPcKvxAujbD2yTl6_U6y-HR7GBPiU%3D%3A0","cdn");
	NetPing2("https://cloud.zeroarea.link/api/v3/file/get/549/main_circle.svg?sign=rpVtKXXBOlFr1AbPcKvxAujbD2yTl6_U6y-HR7GBPiU%3D%3A0","cdfcdn");
	// NetPing2("https://my.zeroarea.link/","mgc");
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
		cache:false,
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

function NetPing2(pingUrl,name){
	//检测服务器是否正常
	var img = new Image();
	img.src = pingUrl;
	
	var timeout = setTimeout(function () {
		img.onerror = img.onload = null;
		console.log(name+" server time out.");
		canNotLoad();
	},3000);
	
	img.onerror = function () {
		clearTimeout(timeout);
		console.log(name+" server load error.");
		canNotLoad();
	}
	
	img.onload = function () {
		clearTimeout(timeout);
		console.log(name+" server ok.");
		canLoad();
	}
	
	function canNotLoad() {
		statuchange(name,0);
	}
	function canLoad() {
		statuchange(name,1);
	}
	//
	}