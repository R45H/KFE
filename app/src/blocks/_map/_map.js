/* Инициализация карты */
function initMap() {
	if (!$('.map').length) return;

	/* Точки */
	var dot1 = {lat: 59.973305, lng: 30.245392};
	var dot2 = {lat: 59.933519, lng: 30.357568};
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) {
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false
		});
	}

	if (document.getElementById('mapContacts')) { // Карта на странице "контакты"
		var map2 = new google.maps.Map(document.getElementById('mapContacts'), {
			zoom: 18,
			center: dot2,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false
		});
	}
	/* ===== */

	/* Образец карточки */
	var contentString =
			'<div class="map__info-wrap">' +
				'<span class="map__info-title">Привилегия</span>' +
				'<span class="map__info-addr">Вязовая улица, 8</span>' +
			'</div>'
		;
	/* ================ */

	/* Рамка */
	var infoBubble = new InfoBubble({
		content: contentString,
		arrowSize: 0,
		padding: 0,
		borderWidth: 0,
		disableAutoPan: false,
		borderRadius: 0,
		disableAnimation: true,
		hideCloseButton: true,
		backgroundColor: 'white',
		shadowStyle: 0,
		minHeight: 0,
		minWidth: 0
	});
	/* ===== */

	var image = 'img/marker.png';

	/* Маркеры */
	if (document.getElementById('map')) {
		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			icon: image,
			title: 'Объект 1',
			id: 'markerCard-1'
		});
		marker1.addListener('click', function() {
			infoBubble.open(map1, marker1);
		});
	}

	if (document.getElementById('mapContacts')) {
		var marker2 = new google.maps.Marker({
			position: dot2,
			map: map2,
			icon: image,
			title: 'Контакты',
			id: 'markerCard-2'
		});
	}
	/* ======= */
}
/* ========== */
