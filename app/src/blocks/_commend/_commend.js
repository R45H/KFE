$(function() {
	$('.commend__link').click(function(event) {
		event.preventDefault();
		$(this).tab('show');
	});

	$('.commend__item_next').on('click', function() {
		$('.commend__item.active')
			.next()
			.find('.commend__link')
			.tab('show')
		;
	});

	$('.commend__item_prev').on('click', function() {
		$('.commend__item.active')
			.prev()
			.find('.commend__link')
			.tab('show')
		;
	});

	checkTabs();

	$(window).on('resize', function() {
		checkTabs();
	});

	$('.commend__link').on('shown.bs.tab', function() {
		checkTabs();
	});

	function checkTabs() {
		if (window.innerWidth < 768) {
			$('.commend__item:not(.active):not(.commend__item_prev):not(.commend__item_next)').hide();
			$('.commend__item.active').show();
		} else {
			$('.commend__item:not(.commend__item_prev):not(.commend__item_next)').show();
		}
	}
});