function getMensagemErro(codErro) {
	var listaErros = new Array();
	listaErros[1] = "Ocorreu um erro desconhecido";
	listaErros[2] = "Ocorrem problemas durante a requisição ao servidor";
	listaErros[3] = "Favor efetuar o login novamente, requisição não autorizada";
	listaErros[4] = "Login ou senha incorretos. Por favor tente novamente";
	if(listaErros[codErro] != undefined) {
		return listaErros[codErro];
	} else {
		return "Código do erro inválido";
	}
}

function erro_verificacao(retorno) {
	if(retorno.erro != undefined) {
		alert(getMensagemErro(retorno.erro));
		if(retorno.erro == 3) {
			document.location = 'index.html';
			$.removeCookie("token");
		}
		return false;
	}
	return true;
}