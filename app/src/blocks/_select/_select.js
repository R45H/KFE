$(function() {
	$('.select').selectmenu({
		classes: {
			'ui-selectmenu-button': 'select__current', // Кнопка селекта
			'ui-selectmenu-button-open': 'select__current_active', // Состояние кнопки при открытом селекте
			'ui-selectmenu-text': 'select__text', // Текст внутри кнопки
			'ui-selectmenu-icon': 'select__icon', // Иконка внутри кнопки
			'ui-selectmenu-menu': 'select__list' // Выпадающий список
		}
	});

	$(window).on('resize', function() {
		$('.select').selectmenu('close');
	});
});
