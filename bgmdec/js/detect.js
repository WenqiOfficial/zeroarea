var ori = $("#ori"),
    cdf = $("#cdf"),
    cdn = $("#cdn");


setTimeout(testall, 1000);

function testall(){
    testcdn()
    testori()
    testcdf()
}

function testcdn() {
	//检测服务器是否 没问题啦!
	var img = new Image();
	img.src = "https://cloud.zeroarea.ml:5221/api/v3/file/get/541/%E9%9B%B6%E6%AC%A1%E5%85%83_AI%E4%BF%AE%E5%A4%8D%E5%B8%A6%E8%83%8C%E6%99%AF.png?sign=p8XQIPvOiRrG4YBgxYnVAkp3aXQJmjTaJIXNcJH6EQI%3D%3A0";

	var timeout = setTimeout(function() {
		img.onerror = img.onload = null;
		console.log("cdn server time out.");
		canNotLoad();
	}, 3000);

	img.onerror = function() {
		clearTimeout(timeout);
		console.log("cdn server load error.");
		canNotLoad();
	}

	img.onload = function() {
		clearTimeout(timeout);
		console.log("cdn server ok.");
		canLoad();
	}

	function canNotLoad() {
		$("#cdn")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-times');
        $('#cdn').removeClass('testing').addClass('bad')
        $('#cdnt').text(" 不太行诶...")
	}

	function canLoad() {
		$("#cdn")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-check');
        $('#cdn').removeClass('testing').addClass('good')
        $('#cdnt').text(" 没问题!")
	}
}

function testori() {
	//检测服务器是否 没问题啦!
	var img = new Image();
	img.src = "https://bangumi.zeroarea.ml/imgs/main_circle.svg";

	var timeout = setTimeout(function() {
		img.onerror = img.onload = null;
		console.log("ori server time out.");
		canNotLoad();
	}, 3000);

	img.onerror = function() {
		clearTimeout(timeout);
		console.log("ori server load error.");
		canNotLoad();
	}

	img.onload = function() {
		clearTimeout(timeout);
		console.log("ori server ok.");
		canLoad();
	}

	function canNotLoad() {
		$("#ori")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-times');
        $('#ori').removeClass('testing').addClass('bad')
        $('#orit').text(" 不太行诶...")
	}

	function canLoad() {
		$("#ori")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-check');
        $('#ori').removeClass('testing').addClass('good')
        $('#orit').text(" 没问题!")
	}
}

function testcdf() {
	//检测服务器是否 没问题啦!
	var img = new Image();
	img.src = "https://bgmc.zeroarea.ml/imgs/bangumi.png";

	var timeout = setTimeout(function() {
		img.onerror = img.onload = null;
		console.log("cdf server time out.");
		canNotLoad();
	}, 3000);

	img.onerror = function() {
		clearTimeout(timeout);
		console.log("cdf server load error.");
 		canNotLoad();
	}

	img.onload = function() {
		clearTimeout(timeout);
		console.log("cdf server ok.");
		canLoad();
	}

	function canNotLoad() {
		$("#cdf")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-times');
        $('#cdf').removeClass('testing').addClass('bad')
        $('#cdft').text(" 不太行诶...")
	}

	function canLoad() {
		$("#cdf")
        .find('[data-fa-i2svg]')
        .removeClass('fa-spin')
        .toggleClass('fa-angle-down')
        .toggleClass('fa-check');
        $('#cdf').removeClass('testing').addClass('good')
        $('#cdft').text(" 没问题!")
	}
}