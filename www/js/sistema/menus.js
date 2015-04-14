$(function() {
	$("#wrapper").prepend("<div id='menu_esquerda_container'></div>");
	$("#wrapper").prepend("<div id='menu_topo_container'></div>");
	$.post("menu_topo.html", function(conteudo) { menu_topo_load(conteudo) });
	$.post("menu_esquerda.html", function(conteudo) { menu_esquerda_load(conteudo) });
	
	
});

function menu_topo_load(conteudo) {
	$("#menu_topo_container").html(conteudo);
	$("#logout_btn").append(txt.sair);
}

function collapse_menu() {
	if ($(this).width() <= 768) {
		$('div.sidebar-collapse').addClass('collapse')
	} else {
		$('div.sidebar-collapse').removeClass('collapse')
	}
}
function menu_esquerda_load(conteudo) {
	$("#menu_esquerda_container").html(conteudo);

	/*
	 * MENU ------------------------------------
	 */
	$('#main-menu').metisMenu();
	
	collapse_menu();
	
	$(window).bind("load resize", function() {
		collapse_menu();
	});
	
	window.addEventListener(
		    "orientationchange",
		    function() {
		    	 collapse_menu();
		    }, false );
}