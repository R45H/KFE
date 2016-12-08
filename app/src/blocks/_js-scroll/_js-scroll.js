$(function() {

	$.scrollify({
		section : ".js-scroll",
		sectionName: "scroll",
		scrollSpeed: 700,
		setHeights: false,
		interstitialSection : ".js-scroll.js-scroll_non-full",
		updateHash: false,

		before: function (i, panels) {
			var ref = panels[i].attr("data-scroll");
			$(".pag__link_active").removeClass("pag__link_active");
			$(".header__pag").find('a[href="#' + ref + '"]').addClass("pag__link_active");
		},

		afterResize: function() {
			if (window.innerWidth < 426) {
				$.scrollify.disable();
			} else {
				$.scrollify.enable();
			}
		},

		afterRender: function() {
			if (window.innerWidth < 426) {
				$.scrollify.disable();
			} else {
				$.scrollify.enable();
			}
		}
	});

	$(".pag__link").on("click", $.scrollify.move);

	// $.scrollify.disable();

});

