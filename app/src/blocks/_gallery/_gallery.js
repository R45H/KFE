/* Галерея */
$(function() {

	$('.gallery').on('click', function() {
		var data = $(this).attr('data-gallery');
		if (data) {
			$('#' + data).magnificPopup('open');
			return false;
		}
	});

	$('.gallery-body').each(function() {
		$(this)
			.hide()
			.magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				},
				fixedContentPos: false,
				removalDelay: 250,
				mainClass: 'gallery__fade'
			});
	});
});
/* ========== */
