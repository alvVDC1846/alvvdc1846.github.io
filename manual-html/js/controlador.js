
$.controlador = {};

$.controlador.panel_activo="";

/**
 * Método para alternar entre paneles.
 */

$.controlador.activarPanel = function (panel_nuevo) {
    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo=panel_nuevo;
}



/**
 * Método para inicializar la aplicación
 */
$.controlador.init = function (panel_inicial) {

    $('[id^="menu_"]').each(function (){
			var $this = $(this);
			var menu_id = $this.attr('id');
			var panel_id = menu_id.replace('menu_', 'panel_');
			
			$("#" + menu_id).click(function () {
				$.controlador.activarPanel("#" + panel_id);
			});
        });
 
    $(".panel").hide();
    // pone activa el panel por defecto
    $.controlador.activarPanel(panel_inicial);
}
    
