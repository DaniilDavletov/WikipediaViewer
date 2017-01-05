var url;
var myQuerry;

$(document).ready(function(){
	$("form").on("submit", function(){
		var result = "";
		myQuerry = document.getElementById("querry").value;
		url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=";
		url += myQuerry;
		$.getJSON(url, function(json){
			for (var j = 0; j < json[1].length; j++) {
				result += "<a target='_blank' href='" + json[3][j] + "'>";
				result += "<div class='block well'>";
				result += "<span class='title'>" + json[1][j] + "</span><br>" + json[2][j];
				result += "<br>";
				result += "</div>";
				result += "</a>";
				$(".myText").html(result);
			}
		});
		return false;
	});

	$(".block").hover(function(){
		$(this).css("background-color", "yellow");
    	}, function(){
    	$(this).css("background-color", "pink");
		});
});