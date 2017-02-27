$(function() {
	if (!$('.law').length) return;

	checkLaw();

	$('.law__body').perfectScrollbar(); // Кастомный ползунок

	if (window.innerWidth < 768) {
		var str2 =  $('.law__item.active').find('.law__link').attr('href').slice(1);
		$('.law__tab[id=' + str2 + ']')
			.clone()
			.css({
				'display': 'block',
				'opacity': '1'
			})
			.addClass('law__shadow')
			.appendTo($('.law__item.active'))
		;
	}

	$('.law__link').click(function(e) {
		e.preventDefault();
		if (window.innerWidth >= 768) {
			$(this).tab('show');
		} else {
			$('.law__shadow').remove();

			$('.law__item').removeClass('active');
			$('.law__tab.active').removeClass('active in').css('display', 'none');
			this.parentNode.classList.add('active');

			var str = $(this).attr('href').slice(1);
			$('.law__tab[id=' + str + ']')
				.clone()
				.css({
					'display': 'block',
					'opacity': '1'
				})
				.addClass('law__shadow')
				.appendTo(this.parentNode)
			;
		}
	});

	$(window).on('resize', function() {
		checkLaw();
		if (window.innerWidth >= 768) {
			if ($('.law__shadow').length) {
				var str = $('.law__shadow').attr('id');
				$('.law__shadow').remove();
				$('.law__tab[id="' + str + '"]').addClass('active in').css('display', 'block');
			}
		} else {
			if (!$('.law__shadow').length) {
				var str =  $('.law__item.active').find('.law__link').attr('href').slice(1);
				$('.law__tab[id=' + str + ']')
					.clone()
					.css({
						'display': 'block',
						'opacity': '1'
					})
					.addClass('law__shadow')
					.appendTo($('.law__item.active'))
				;
			}
		}
	});

	$('.law__link').on('shown.bs.tab', function() {
		checkLaw();
	});

	function checkLaw() {
		if (window.innerWidth >= 768) {
			$('.law__tab:not(.active):not(.law__shadow)').hide();
			$('.law__tab.active').show();
			$('.law__body').perfectScrollbar('update');
		}
	}
});