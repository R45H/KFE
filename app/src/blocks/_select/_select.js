$(function() {
	$('.select').each(function() {

		var
			$this = $(this), // Текущий селект
			$selectWrap = $this.attr('class'), // Внешняя обёртка селекта
			$selectClass = 'select__current', // Новый селект, сделанный на основе исходника (само поле)
			$activeClass = 'select__current_active', // Стили для открытого селекта
			$listClass = 'select__list', // Новый список селекта (скрытые пункты)
			$itemClass = 'select__item', // Пункт нового списка
			numberOfOptions = $(this).children('option').length, // Количество пунктов
			$delay = 200; // Скорость анимации

		$this
			.hide() // Скрываем исходный селект
			.removeClass($selectWrap) // Убираем у него блочный класс
			.wrap('<div class="' + $selectWrap + '"></div>') // Обёртываем его во внешний контейнер
			.after('<div class="' + $selectClass + '"></div>'); // Добавляем новый селект

		var $styledSelect = $this.next('.' + $selectClass); // Запихиваем новый селект в переменную

		var optionSelected = $this.children('option:selected'); // Записываем в него текст 1-го пункта старого селекта
		if (optionSelected.length > 0) {
			$styledSelect.text(optionSelected.text());
		} else {
			$styledSelect.text($this.children('option').eq(0).text());
		}

		var $list = $('<ul />', { // Создаём новый скрытый список селекта
			'class': $listClass
		}).insertAfter($styledSelect); // И вставляем после контейнера нового селекта

		for (var i = 0; i < numberOfOptions; i++) { // Заполняем его
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			})
				.appendTo($list)
				.addClass($itemClass);
		}

		var $listItems = $list.children('.' + $itemClass); // Записываем пункты в переменную

		$styledSelect.on('mousedown', function(e) { // Обрабатываем клик по новому селекту
			e.stopPropagation();

			var selectIsVisible = false;

			if ($(this).next('.' + $listClass).is(':visible')) { // Если текущий селект раскрыт
				selectIsVisible = true; // То помечаем это
			}

			$('.' + $activeClass).each(function() { // Закрываем все селекты на странице
				$(this)
					.removeClass($activeClass)
					.next('.' + $listClass)
					.slideUp($delay);
			});

			if (!selectIsVisible) { // Если текущий не был открыт, то открываем
				$(this)
					.addClass($activeClass)
					.next('.' + $listClass)
					.slideDown($delay);
			}
		});

		$listItems.on('click', function(e) { // Обрабатываем клик по пунктам селекта
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass($activeClass); // Записываем содержимое пункта в сам новый селект
			$this.find('option[value=' + $(this).attr('rel') + ']').prop('selected', true); // А так же в скрытый селект
			$list.slideUp($delay); // Скрываем список
		});

		$(document).on('mousedown', function(e) { // Обрабатываем клик вне селекта

			var target = e.target;
			while (target.tagName != 'HTML') {
				if ($(target).hasClass($selectWrap)) break;
				target = target.parentNode;
			}

			if ($(target).hasClass($selectWrap)) return;

			$styledSelect.removeClass($activeClass);
			$list.slideUp($delay);
		});
	});
});