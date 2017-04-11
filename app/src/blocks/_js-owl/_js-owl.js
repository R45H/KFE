/* Слайдеры */
$(document).ready(function(){
	$('.js-owl').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: true,
		navText: ''
	});

	$('.js-owl .owl-dots').wrap('<div class="container js-owl__dots"></div>');

	$('.js-owl_half').each(function() {
		var $this = $(this);

		$this
			.find('.js-owl__dots')
			.removeClass('container');

		$this
			.find('.owl-nav')
			.insertAfter($this);
	});
});
/* ========== */
