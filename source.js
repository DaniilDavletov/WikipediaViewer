var url;
var myQuerry;

$(document).ready(function(){
	$("#randBtn").on("click", function(){
		var result = "";
		myQuerry = "Pierre+Bourdin";
		url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";
		url += myQuerry;
		$.getJSON(url, function(json){
			for (var j = 0; j < json[1].length; j++) {
				result += "<div class='block'>";
				result += "<a href='" + json[3][j] + "'>";
				result += json[1][j] + ", " + json[2][j];
				result += "</a>";
				result += "<br>";
				result += "</div>";
				$(".myText").html(result);
			}
		});
	});
});