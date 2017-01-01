var url="http://ipinfo.io/json"

/*$(document).ready(function(){
	$("#getMessage").on("click", function(){
		$.getJSON(url, function(json){
			$(".text").html(JSON.stringify(json));
		});
	});
});*/

$(document).ready(function(){
	//$("#getMessage").on("click", function(){
		$.getJSON(url, function(json){
			$(".myText").html(JSON.stringify(json));
		});
	//});
});