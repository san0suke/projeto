$(function() {
	if(window.localStorage.getItem("token") == null) {
		alert(txt.sessao_expirada);
		document.location = "index.html";
	}
});

/**
 * Utilizar esta função caso a tela em questão na faça nenhuma requisição
 */
function validar_token() {
	if(window.localStorage.getItem("token") != null) {
		$.post(ajax,{token: window.localStorage.getItem("token"), a: "token", b: "token"}, function(retorno) {
			if(retorno.token_valido != 1) {
				erro_verificacao(retorno);
			}
		},'json');
	}
}