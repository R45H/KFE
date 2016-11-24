$(function() {

	$.scrollify({
		section : ".js-scroll",
		sectionName: false,
		scrollSpeed: 700
	});

	$(window).on('resize', function() {
		if (window.innerWidth <= 425) {
			$.scrollify.disable();
		} else {
			$.scrollify.enable();
		}
	});
});