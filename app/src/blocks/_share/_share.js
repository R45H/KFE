/* Кнопки "Поделиться" */
$(function() {
	Share = {

		go: function(_element, _options) {
			var
				self = Share,
				options = $.extend(
					{
						type: 'vk', // тип соцсети
						url: location.href, // какую ссылку шарим
						count_url: location.href, // для какой ссылки крутим счётчик
						title: document.title, // заголовок шаринга
						image: '', // картинка шаринга
						text: '' // текст шаринга
					},
					$(_element).data(), // Если параметры заданы в data, то читаем их
					_options            // Параметры из вызова метода имеют наивысший приоритет
				);

			if (self.popup(link = self[options.type](options)) === null) {
				// Если не удалось открыть попап
				if ( $(_element).is('a') ) {
					// Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
					$(_element).prop('href', link);
					return true;
				}
				else {
					// Если это не <a>, то пытаемся перейти по адресу
					location.href = link;
					return false;
				}
			}
			else {
				// Попап успешно открыт, просим браузер не продолжать обработку
				return false;
			}
		},

		// ВКонтакте
		vk: function(_options) {
			var options = $.extend({
				url:    location.href,
				title:  document.title,
				image:  '',
				text:   ''
			}, _options);

			return 'http://vkontakte.ru/share.php?'
				+ 'url='          + encodeURIComponent(options.url)
				+ '&title='       + encodeURIComponent(options.title)
				+ '&description=' + encodeURIComponent(options.text)
				+ '&image='       + encodeURIComponent(options.image)
				+ '&noparse=true';
		},

		// Facebook
		fb: function(_options) {
			var options = $.extend({
				url:    location.href,
				title:  document.title,
				image:  '',
				text:   ''
			}, _options);

			return 'http://www.facebook.com/sharer.php?s=100'
				+ '&p[title]='     + encodeURIComponent(options.title)
				+ '&p[summary]='   + encodeURIComponent(options.text)
				+ '&p[url]='       + encodeURIComponent(options.url)
				+ '&p[images][0]=' + encodeURIComponent(options.image);
		},

		// Твиттер
		tw: function(_options) {
			var options = $.extend({
				url:        location.href,
				count_url:  location.href,
				title:      document.title
			}, _options);

			return 'http://twitter.com/share?'
				+ 'text='      + encodeURIComponent(options.title)
				+ '&url='      + encodeURIComponent(options.url)
				+ '&counturl=' + encodeURIComponent(options.count_url);
		},

		// Открыть окно шаринга
		popup: function(url) {
			return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
		}
	};

	$('.share').on('click', function(e) {
		e.preventDefault();
		Share.go(this);
	});

	$('.option_share').on('click',function(e) {
		e.preventDefault();

		$('.section__share-i').toggle(300);
		$(this).toggleClass('option_share-active');
	});
});
/* ========== */
