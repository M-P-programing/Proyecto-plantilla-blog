$(document).ready(function(){

// Selector de Tema

		var theme = $('#theme');

		$('#toGreen').click(function(){
			theme.attr('href', 'css/green.css');
		});

		$('#toBlue').click(function(){
			theme.attr('href', 'css/blue.css');
		});

		$('#toRed').click(function(){
			theme.attr('href', 'css/red.css');
		});

// Scroll

	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);

		return false;
	});

// Login falso

	$('#login form').submit(function(){
		var form_name = $('#form_name').val();
		localStorage.setItem('form_name', form_name);

	});

	var form_name = localStorage.getItem('form_name');
	if (form_name != null && form_name != 'undefined') {
		$('#about p').html('<br><strong>Bienvenido, ' + form_name + '</strong> ');
		$('#about p').append('<a href = "#" id="logout">Cerrar sesion</a>')
		$('#login').hide();
		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

// Reloj
	moment.locale();
	setInterval(function(){
		var reloj = moment().format('LTS');
		$('#reloj').html(reloj);
	}, 1000);


});