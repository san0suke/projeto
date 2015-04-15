$(function(){
	define_titulo(txt.usuarios_cadastro_titulo);
	validar_token();
	
	
	$("#form").submit(function(e) {
		e.preventDefault();
		
		$.post(ajax, $(this).serialize(), function(retorno) {
			if(erro_verificacao(retorno)) {
				alert(txt.cadastrado_sucesso);
			}
		});
	});
});
