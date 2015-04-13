$(function() {
	if($("form").length > 0 && $.cookie('token') != undefined) {
		$('form').prepend('<input type="hidden" name="token" value="'+$.cookie('token')+'" id="token" />');
	}
});