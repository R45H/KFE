/* Маленькие модалки */
$(function() {
	var
		$modal = $('.mod-sm'), // Модальное окно
		$header = $('.header'), // Шапка
		$menuI = $('.l-menu-i'), // Нижнее меню в шапке
		$up = $('.up'); // Кнопка "наверх"

	$modal.on('show.bs.modal', function() {
		$header.css('padding-right', '17px');
		$menuI.css('padding-right', '17px');
		$up.css('right', '17px');
	});

	$modal.on('hidden.bs.modal', function() {
		$header.css('padding-right', '0');
		$menuI.css('padding-right', '0');
		$up.css('right', '0');
	});
});
/* ========== */
