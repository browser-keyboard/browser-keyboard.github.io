$(function(){
	$.ajax({
		url: "http://freegeoip.net/json/",
		success: function(data){
			if(data.country_code == "RU")
				window.location.href = 'ru/index.html';
		}
	});
});