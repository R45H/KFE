$(function(){
	$('.scroll').on('click', function (event) {
		event.preventDefault();

		var
			$id = $(this).attr('href'),
			$top = $($id).offset().top,
			$head = $('.header').innerHeight()
		;

		if (window.innerWidth >= 426) {
			$top -= $head;
		}

		$('body, html').animate({scrollTop: $top}, 700);
	});
});