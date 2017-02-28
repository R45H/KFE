$(function () {

	jQuery("#slider").slider({
		min: 0,
		max: 1000,
		values: [0, 1000],
		range: true,
		create: function (event, ui) {
			changeInput();
		},
		stop: function (event, ui) {
			jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
			jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
			changeInput();

		},
		slide: function (event, ui) {
			jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
			jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
			changeInput();
		}
	});

	jQuery("input#minCost").on('change keydown', function () {
		var value1 = jQuery("input#minCost").val();
		var value2 = jQuery("input#maxCost").val();

		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			jQuery("input#minCost").val(value1);
		}
		jQuery("#slider").slider("values", 0, value1);
		changeInput();
	});

	jQuery("input#maxCost").on('change keydown', function () {
		var value1 = jQuery("input#minCost").val();
		var value2 = jQuery("input#maxCost").val();

		if (value2 > 1000) {
			value2 = 1000;
			jQuery("input#maxCost").val(1000)
		}

		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			jQuery("input#maxCost").val(value2);
		}
		jQuery("#slider").slider("values", 1, value2);
		changeInput();
	});

	function changeInput() {
		inp = $("input[id='minCost']");
		number = $("input[id='minCost']").val().length;
		$("#count").html("Количество введенных символов: " + number);
		if (window.innerWidth >= 1400) {
			var q = 21.08 * number;
		} else {
			var q = 13.17 * number;
		}
		$(inp).css('width', q);

		inp2 = $("input[id='maxCost']");
		number2 = $("input[id='maxCost']").val().length;
		if (window.innerWidth >= 1400) {
			var s = 21.08 * number2;
		} else {
			var s = 13.17 * number2;
		}
		$(inp2).css('width', s);
	}

});