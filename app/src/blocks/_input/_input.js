/* Поведение инпутов */
$(function() {
	var
		$input = $('.input'), // Стандартные инпуты
		$inputFillClass = 'input_fill'; // Класс заполненного инпута

	$input.on('input', function() {
		if ($(this).val()) {
			$(this).addClass($inputFillClass);
		} else {
			$(this).removeClass($inputFillClass);
		}
	});

	$('.input[type=tel]').mask('+7 (999) 999-99-99');
});
/* ========== */
