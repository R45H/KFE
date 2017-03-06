/* Кнопка "Избранное" */
$(function() {
	var $like = $('.option_like');
	$like.on('click', function(e) {
		e.preventDefault();
		$like.toggleClass('option_like-active');
	});
});
/* ========== */
