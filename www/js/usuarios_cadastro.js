$(function(){
	define_titulo(txt.usuarios_cadastro_titulo);
	text_placeholder("#usu_login", txt.login);
	
	$('#form').validator().on('submit', function (e) {
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
