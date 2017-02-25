function initMap() {
	if (!$('#map').length) return;

	/* Точки */
	var dot1 = {lat: 59.973305, lng: 30.245392};
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
	/* ======= */
}