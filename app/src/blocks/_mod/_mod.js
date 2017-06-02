/* Обычные фуллскриновые модалки */
$(function() {
	var
		$modal = $('.mod'), // Модальное окно
		$header = $('.header'), // Шапка
		$menuI = $('.l-menu-i'), // Нижнее меню в шапке
		$up = $('.up'), // Кнопка "наверх"
		$input = 'input', // Класс инпута
		$inputFillClass = 'input_fill'; // Класс заполненного инпута

	$modal.on('show.bs.modal', function() {
		$header.css('padding-right', '17px');
		$menuI.css('padding-right', '17px');
		$up.css('right', '17px');
	});

	$modal.on('shown.bs.modal', function() { // Фокус при открытии модалки
		$(this).find('input:first').focus();
	});

	$modal.on('hidden.bs.modal', function() {
		$header.css('padding-right', '0');
		$menuI.css('padding-right', '0');
		$up.css('right', '0');
		$(this) // Очистка инпутов
			.find('.' + $input)
			.val('')
			.removeClass($inputFillClass);
	});
});
/* ========== */
