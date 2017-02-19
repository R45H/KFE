$(function() {

	$('#range-1').slider({ // Ползунки выбора диапазона
		range: true,
		min: 24,
		max: 10805,
		values: [1000, 10000],
		create: function() {
			$(this).attr('data-min', $(this).slider('values', 0));
			$(this).attr('data-max', $(this).slider('values', 1));
		},
		change: function() {
			$(this).attr('data-min', $(this).slider('values', 0));
			$(this).attr('data-max', $(this).slider('values', 1));
		}
	});

	$('#range-2').slider({
		range: true,
		min: 0,
		max: 250,
		values: [0, 250],
		create: function() {
			$(this).attr('data-min', $(this).slider('values', 0));
			$(this).attr('data-max', $(this).slider('values', 1));
		},
		change: function() {
			$(this).attr('data-min', $(this).slider('values', 0));
			$(this).attr('data-max', $(this).slider('values', 1));
		}
	});
});