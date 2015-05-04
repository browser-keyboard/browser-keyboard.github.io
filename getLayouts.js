$(function(){	
	$.ajax({
		url: "http://browser-keyboard.github.io/languages/list.json",
		success: function(data){
			data.sort(function(a,b) {
				if (a.shortName < b.shortName)
					return 1;
						if (a.shortName > b.shortName)
							return -1;
				return 0;	
			});
			for(var i=data.length-1; i>=0; i--){
				$('#layoutsList').append('<li>' + data[i].name + '</li>');
			}
		}
		
	});
});