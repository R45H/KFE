/* Слайдеры */
$(document).ready(function(){
	var $owl = $('.js-owl');

	$owl.each(function() {
		var $this = $(this);

		if ($this.find('.section__slide').length > 1) {
			$this.owlCarousel({
				items: 1,
				loop: true,
				dots: true,
				nav: true,
				navText: ''
			});

			$this.find('.owl-dots').wrap('<div class="container js-owl__dots"></div>');
		}
	});

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
