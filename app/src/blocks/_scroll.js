/* Плавный скролл */
$(function(){
	$('.scroll').on('click', function (event) {
		var $id = $(this).attr('href');

		if ($id.slice(0, 8) != '#section') return;

		var
			$top = $($id).offset().top,
			$head = $('.header').innerHeight();

		event.preventDefault();

		if (window.innerWidth >= 426) {
			$top -= $head;
		}

		$('body, html').animate({scrollTop: $top}, 700);
	});
});
/* ========== */
