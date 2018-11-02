$(document).ready(function(){
	
//Slider
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth:1200,
		    responsive: true,
		    pager: false,
		    auto: true,
	  	});

// Posts
		var posts = [
			{
				title: "Prueba de titulo 1",
				date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing, elit ullamcorper primis a et, praesent integer nullam tempus neque. Magnis lectus felis taciti platea conubia fusce placerat phasellus neque ac feugiat, rutrum pulvinar habitant pellentesque nisl praesent non diam purus dignissim."
			},
			{
				title: "Prueba de titulo 2",
				date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing, elit ullamcorper primis a et, praesent integer nullam tempus neque. Magnis lectus felis taciti platea conubia fusce placerat phasellus neque ac feugiat, rutrum pulvinar habitant pellentesque nisl praesent non diam purus dignissim."
			},
			{
				title: "Prueba de titulo 3",
				date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing, elit ullamcorper primis a et, praesent integer nullam tempus neque. Magnis lectus felis taciti platea conubia fusce placerat phasellus neque ac feugiat, rutrum pulvinar habitant pellentesque nisl praesent non diam purus dignissim."
			},
			{
				title: "Prueba de titulo 4",
				date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing, elit ullamcorper primis a et, praesent integer nullam tempus neque. Magnis lectus felis taciti platea conubia fusce placerat phasellus neque ac feugiat, rutrum pulvinar habitant pellentesque nisl praesent non diam purus dignissim."
			},
			{
				title: "Prueba de titulo 5",
				date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
				content: "Lorem ipsum dolor sit amet consectetur adipiscing, elit ullamcorper primis a et, praesent integer nullam tempus neque. Magnis lectus felis taciti platea conubia fusce placerat phasellus neque ac feugiat, rutrum pulvinar habitant pellentesque nisl praesent non diam purus dignissim."
			},
		]
		posts.forEach((item, index) => {
			var post = `

				<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
						${item.content}
						</p>
						<a href="#" class="button_more">Leer mas</a>
				</article>
			`

			$('#posts').append(post);
		});

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
});