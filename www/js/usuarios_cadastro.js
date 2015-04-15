$(function(){
	define_titulo(txt.usuarios_cadastro_titulo);
	validar_token();
	text_placeholder("#usu_login", txt.login);
	
	$('#form').validator({
		errors: {
			  match: txt.redigitar_senha,
			}
	}).on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			$.post(ajax, $(this).serialize(), function(retorno) {
				if(erro_verificacao(retorno)) {
					alert(txt.cadastrado_sucesso);
					limpar_form();
				}
			},'json');
		}
		e.preventDefault();
	});
});
