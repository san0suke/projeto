function getMensagemErro(codErro) {
	var listaErros = new Array();
	listaErros[1] = txt.erro_desconhecido;
	listaErros[2] = txt.problema_requisicao;
	listaErros[3] = txt.requisicao_nao_autorizada;
	listaErros[4] = txt.login_incorreto;
	listaErros[5] = txt.login_ja_cadastrado;
	if(listaErros[codErro] != undefined) {
		return listaErros[codErro];
	} else {
		return txt.codigo_invalido+": #"+codErro;
	}
}

function erro_verificacao(retorno) {
	if(retorno.erro != undefined) {
		alert(getMensagemErro(retorno.erro));
		if(retorno.erro == 3) {
			window.localStorage.removeItem("token");
			document.location = 'index.html';
		}
		return false;
	}
	return true;
}