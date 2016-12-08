$(function() {
	var $aside = $('.js-aside'); // Боковое меню
	var $asideClass = 'js-aside'; // Класс бокового меню
	var $asideHidden = 'aside_hidden'; // Переключатель видимости бокового меню
	var $asideList = $('.js-aside .aside__list'); // Контейнер с пунктами меню
	var $toggleClass = 'js-aside-toggle'; // Класс гамбургера
	var $toggleTitle = $('.js-aside-toggle .toggle__title'); // Заголовок гамбургера
	var $toggleTitleHidden = 'toggle__title_hidden'; // Переключатель видимости заголовка гамбургера
	var $body = $('body'); // Ну короче это боди

	$(document).on('click', function() { // Обрабатываем клик по документу
		var target = event.target;

		while (target.tagName != 'BODY') { // Вычисляем элемент, на который кликнули
			if (target.classList.contains($asideClass)) return; // Если боковое меню, ничего не делаем
			if (target.classList.contains($toggleClass)) { // Если гамбургер
				$aside.toggleClass($asideHidden); // Скрываем / показываем меню
				$toggleTitle.toggleClass($toggleTitleHidden); // Скрываем / показываем надпись гамбургера

				if (window.innerWidth < 426) { // Если мобильное разрешение
					if ($body.css('overflow') == 'visible') { // Убираем полосу прокрутки документа
						$body.css('overflow', 'hidden');
					} else {
						$body.css('overflow', 'visible');
					}
				}
				return; // Выходим из обработчика события
			}
			target = target.parentNode; // Всплываем, пока не дойдём до BODY
		}

		// На этом этапе мы знаем, что кликнули не на гамбургер и не на боковое меню

		if (!$aside.hasClass($asideHidden)) { // Если меню открыто
			$aside.toggleClass($asideHidden); // Закрываем меню
			$toggleTitle.toggleClass($toggleTitleHidden); // Убираем надпись гамбургера
			$body.css('overflow', 'visible'); // Возвращаем полосу прокрутки
		}
	});

	$(window).on('resize', function() { // Обрабатываем ресайз
		if (!$aside.hasClass($asideHidden)) { // Если меню открыто
			if (window.innerWidth < 426) { // Убираем полосу прокрутки на мобильном разрешении
				$body.css('overflow', 'hidden');
			} else {
				$body.css('overflow', 'visible');
			}
		}
	});

	//TODO При открытии меню на мобиле и расширении экрана, первая прокрутка колеса не работает
	
	$($asideList).on('mousewheel DOMMouseScroll', function (e) { // Обрабатываем прокрутку колёсиком
		var e0 = e.originalEvent, // Делаем прокрутку меню, когда указатель мыши на нём
			delta = e0.wheelDelta || -e0.detail;

		this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
		e.preventDefault();
		$.scrollify.disable(); // Отключаем постраничный скролл

		if (window.innerWidth >= 426) { // И включаем если не мобила
			setTimeout(function() {
				$.scrollify.enable();
			});
		}
	});
});