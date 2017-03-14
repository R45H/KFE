/* Переключатель "список / карта" */
$(function() {
	$('.frm-toggle').on('click', '.frm-toggle__item', function(e) {
		e.preventDefault();

		if (!$(this).hasClass('frm-toggle__item_active')) {
			$(this)
				.parent()
				.find('.frm-toggle__item')
				.toggleClass('frm-toggle__item_active');

			var togHid = $('.frm-toggle__hidden');
			var togVis = $('.frm-toggle__visible');
			togHid.toggleClass('frm-toggle__hidden frm-toggle__visible');
			togVis.toggleClass('frm-toggle__hidden frm-toggle__visible');
			initMap();
		}
	});
});
/* ========== */
