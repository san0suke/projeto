$(function() {
	$("#form-signin").submit(function(e){
		
		var txtLogin = $("#login").val();
		
		$.post(ajax, $("#form-signin").serialize(), function(retorno){
			if(retorno.autorizado) {
				if($("#lembrar").is(':checked')) {
					$.cookie('token', retorno.token, { expires: 30 });
				} else {
					$.cookie('token', retorno.token);
				}
//				document.location = "painel.html";
			} else {
				alert("Login ou senha incorretos. Por favor tente novamente.");
			}
		}, "json");
		e.preventDefault();
	});
});