$(function() {
	var $aside = $('.js-aside'); // Боковое меню
	var $asideClass = 'js-aside'; // Класс бокового меню
	var $asideHidden = 'aside_hidden'; // Переключатель видимости бокового меню
	var $asideList = $('.js-aside .aside__list'); // Контейнер с пунктами меню
	var $toggle = $('.js-aside-toggle'); // Гамбургер
	var $toggleClass = 'js-aside-toggle'; // Класс гамбургера
	var $toggleActive = 'toggle_active'; // Переключатель активности гамбургера
	var $toggleTitle = $('.js-aside-toggle .toggle__title'); // Заголовок гамбургера
	var $toggleTitleHidden = 'toggle__title_hidden'; // Переключатель видимости заголовка гамбургера
	var $body = $('body'); // Ну короче это боди

	$(document).on('click', function(e) { // Обрабатываем клик по документу
		var target = e.target;

		while (target.tagName != 'BODY') { // Вычисляем элемент, на который кликнули
			if (target.classList.contains($asideClass)) return; // Если боковое меню, ничего не делаем
			if (target.classList.contains($toggleClass)) { // Если гамбургер
				$aside.toggleClass($asideHidden); // Скрываем / показываем меню
				$toggle.toggleClass($toggleActive); // Меняем активность гамбургера
				$toggleTitle.toggleClass($toggleTitleHidden); // Скрываем / показываем надпись гамбургера

				if (window.innerWidth < 426) { // Если мобильное разрешение
					if ($body.css('overflow') == 'visible') { // Убираем полосу прокрутки документа
						$body.css('overflow', 'hidden');
					} else {
						$body.css('overflow', 'visible');
					}
					if (!$toggle.hasClass($toggleActive)) { // Если мы закрыли меню
						$toggle.css('position', 'absolute'); // Обрабатываем гамбургер
					}
				}
				return; // Выходим из обработчика события
			}
			target = target.parentNode; // Всплываем, пока не дойдём до BODY
			if (!target) return;
		}

		// На этом этапе мы знаем, что кликнули не на гамбургер и не на боковое меню

		if (!$aside.hasClass($asideHidden)) { // Если меню открыто
			$aside.toggleClass($asideHidden); // Закрываем меню
			$toggle.toggleClass($toggleActive); // Меняем активность гамбургера
			$toggleTitle.toggleClass($toggleTitleHidden); // Убираем надпись гамбургера
			$body.css('overflow', 'visible'); // Возвращаем полосу прокрутки
			if (window.innerWidth < 426) { // Обрабатываем гамбургер
				$toggle.css('position', 'absolute');
			}
		}
	});

	$(window).on('resize', function() { // Обрабатываем ресайз
		if (!$aside.hasClass($asideHidden)) { // Если меню открыто
			if (window.innerWidth < 426) { // Обрабатываем полосу прокрутки и гамбургер
				$body.css('overflow', 'hidden');
				$toggle.css('position', 'fixed');
			} else {
				$body.css('overflow', 'visible');
				$toggle.css('position', 'fixed');
			}
		} else {
			if (window.innerWidth < 426) {
				$toggle.css('position', 'absolute');
			} else {
				$toggle.css('position', 'fixed');
			}
		}
	});
	
	$($asideList).on('mousewheel DOMMouseScroll', function (e) { // Обрабатываем прокрутку колёсиком
		var e0 = e.originalEvent, // Делаем прокрутку меню, когда указатель мыши на нём
			delta = e0.wheelDelta || -e0.detail;

		this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
		e.preventDefault();
	});
});