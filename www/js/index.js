$(function() {
	$("#form-signin").submit(function(e){
		
		var txtLogin = $("#login").val();
		
		$.post(ajax, $("#form-signin").serialize(), function(retorno){
			if(erro_verificacao(retorno)) {
				window.localStorage.setItem("token", retorno.token);
				document.location = "painel.html";
			}
		}, "json");
		e.preventDefault();
	});
});