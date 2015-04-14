$(function(){
	$("#logout_btn").click(function() {
		window.localStorage.removeItem("token");
		document.location = "index.html";
	});
});