/* Ползунки range */
$(function () {
	var $block = $(".range"); // Ползунок

	$block.each(function() {
		var
			$this = $(this), // Текущий блок
			$input = $this.find('.range__input'), // Текущий элемент
			slMin = $input.prev(), // Поле с минимальным значением
			slMax = $input.next(), // Поле с максимальным значением
			slMinVal = parseInt(slMin.attr("data-min")), // Значение поля min
			slMaxVal = parseInt(slMax.attr("data-max")), // Значение поля max
			classInfo = 'range_info' // Класс для появления подсказки
		;

		$input.slider({ // Инициализация ползунка
			min: slMinVal,
			max: slMaxVal,
			values: [parseInt(slMin.val()), parseInt(slMax.val())],
			range: true,
			create: function () {
				changeInput();
			},
			slide: function () {
				slMin.val($input.slider("values", 0));
				slMax.val($input.slider("values", 1));
				changeInput();

				if ($this.attr('data-info')) {
					$this.addClass(classInfo);
				}
			},
			stop: function () {
				slMin.val($input.slider("values", 0));
				slMax.val($input.slider("values", 1));
				changeInput();

				if ($this.attr('data-info')) {
					$this.removeClass(classInfo);
				}
			}
		});

		$('.' + slMin.attr('class') + ', .' + slMax.attr('class')).on('input', function () { // Обработка изменения полей ввода вручную
			var
				value1 = +parseInt(slMin.val()), // Значение поля min
				value2 = +parseInt(slMax.val()); // Значение поля max

			if (this.value.match(/[^0-9]/g)) { // Можно только цифры
				this.value = this.value.replace(/[^0-9]/g, '');
			}

			if (!value1) {
				value1 = 0;
			}
			if (!value2) {
				value2 = 0;
			}
			if (value2 > slMaxVal) {
				value2 = slMaxVal;
			}
			if (value1 > value2) {
				value1 = value2;
			}

			slMin.val(value1);
			slMax.val(value2);
			$input.slider("values", 0, value1);
			$input.slider("values", 1, value2);
			changeInput();
		});

		$(window).on('resize', function() { // Обработка ресайза страницы
			changeInput();
		});

		$(slMin).on('keydown', function(e) { // Добавление работы стрелок вверх / вниз для min
			if (e.keyCode != 38 && e.keyCode != 40) return;

			var
				value1 = parseInt(slMin.val()), // Значение поля min
				value2 = parseInt(slMax.val()); // Значение поля max

			if (e.keyCode == 38) {
				value1++;
			}
			if (e.keyCode == 40) {
				value1--;
			}

			if (value1 > value2) {
				value1 = value2;
			}
			if (value1 < slMinVal) {
				value1 = slMinVal;
			}

			slMin.val(value1);
			$input.slider("values", 0, value1);
			changeInput();
		});

		$(slMax).on('keydown', function(e) { // Добавление работы стрелок вверх / вниз для max
			if (e.keyCode != 38 && e.keyCode != 40) return;

			var
				value1 = parseInt(slMin.val()), // Значение поля min
				value2 = parseInt(slMax.val()); // Значение поля max

			if (e.keyCode == 38) {
				value2++;
			}
			if (e.keyCode == 40) {
				value2--;
			}

			if (value2 < value1) {
				value2 = value1;
			}
			if (value2 > slMaxVal) {
				value2 = slMaxVal;
			}

			slMax.val(value2);
			$input.slider("values", 1, value2);
			changeInput();
		});

		function changeInput() { // Функция, задающая ширину инпутов
			var
				minVal = slMin.val().length, // Количество цифр в поле min
				maxVal = slMax.val().length, // Количество цифр в поле max
				minWidth, maxWidth; // Итоговая ширина min и max

			if (window.innerWidth >= 1400) {
				minWidth = 21.08 * minVal;
				maxWidth = 21.08 * maxVal;
			} else {
				minWidth = 13.17 * minVal;
				maxWidth = 13.17 * maxVal;
			}

			slMin.css('width', minWidth);
			slMax.css('width', maxWidth);
		}
	});

});
/* ========== */
