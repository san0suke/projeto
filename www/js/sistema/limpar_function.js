$(function() {
	$("button[type=reset]").click(function() {
		$("input[type=text]").val("");
		$("input[type=password]").val("");
	});
});