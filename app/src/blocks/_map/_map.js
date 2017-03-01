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
			'<p>Текст карточки объекта</p>'
		;
	/* ================ */

	/* Рамка */
	var infowindow = new google.maps.InfoWindow({
		content: contentString
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
			infowindow.open(map1, marker1);
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
		marker2.addListener('click', function() {
			infowindow.open(map2, marker2);
		});
	}
	/* ======= */
}