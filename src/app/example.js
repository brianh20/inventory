function mostrarControl() {
	$("#agregarControl").show("slow");
}

function ocultarControl() {
	$("#agregarControl").hide("slow");
}

function collapseMenu(){
	if( $(window).width()<768){
		$("#hamburguerMenu").click();
	}
}