$(function() {
	var $aside = $('.js-aside');
	var $asideClass = 'js-aside';
	var $asideHidden = 'aside_hidden';
	var $toggle = $('js-toggle');
	var $toggleClass = 'js-toggle';

	$toggle.on('click', function() {
		$aside.toggleClass($asideHidden);
	});

	$(document).on('click', function() {
		var target = event.target;

		while (target.tagName != 'BODY') {
			if (target.classList.contains($asideClass)) return;
			if (target.classList.contains($toggleClass)) {
				$aside.toggleClass($asideHidden);
				return;
			}
			target = target.parentNode;
		}

		if (!$aside.hasClass($asideHidden)) {
			$aside.toggleClass($asideHidden);
		}
	});
});