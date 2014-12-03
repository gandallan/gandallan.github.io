var $button = $('#Work_itemFuentevida'),
	$imgs_Fuentevida = $('#imagenes_Fuentevida'),
	$regresar = $('#Work-regresar'),
	$testimonios = $('#profile-test')

function mostrarImagenesFuentevida(){
	$imgs_Fuentevida.slideToggle();
}

function ocultarImagenesFuentevida(){
	$imgs_Fuentevida.slideUp();
	return false;
}
//Eventos

$button.click(mostrarImagenesFuentevida)
$regresar.click(ocultarImagenesFuentevida)