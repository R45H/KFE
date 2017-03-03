/* Обычные фуллскриновые модалки */
$(function() {
	var
		$modal = $('.mod'), // Модальное окно
		$modIn = $modal.find('.mod__wrap'),
		$header = $('.header'), // Шапка
		$up = $('.up'), // Кнопка "наверх"
		$input = 'input', // Класс инпута
		$inputFillClass = 'input_fill'; // Класс заполненного инпута

	$modal.on('show.bs.modal', function() {
		$header.css('padding-right', '17px');
		$up.css('right', '17px');
		$modIn.animate({
			'top': '50% !important'
		}, 300);
	});

	$modal.on('shown.bs.modal', function() { // Фокус при открытии модалки
		$(this).find('input:first').focus();
	});

	$modal.on('hide.bs.modal', function() {
		$modIn.animate({
			'top': '47% !important'
		}, 300);
	});

	$modal.on('hidden.bs.modal', function() {
		$header.css('padding-right', '0');
		$up.css('right', '0');
		$(this)
			.find('.' + $input)
			.val('')
			.removeClass($inputFillClass);
	});
});
/* ========== */
