/* Поведение инпутов */
$(function() {
	var
		$input = $('.input'), // Стандартные инпуты
		$inputFillClass = 'input_fill'; // Класс заполненного инпута

	$input.on('change', function() {
		if ($(this).val()) {
			$(this).addClass($inputFillClass);
		} else {
			$(this).removeClass($inputFillClass);
		}
	});
});
/* ========== */