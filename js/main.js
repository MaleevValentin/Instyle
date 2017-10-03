$(function () {
	$('.main-slider').owlCarousel({
		items: 1,
		nav: true
	});

	$('.toggle-btn').on('click', function () {
		$('.j-mobileMenu').stop().slideToggle();
	});

	$(window).on('resize', function () {
		if ($(window).width() >= 1200) {
			$('.menu__left').insertBefore('.logo');
			$('.menu__right').insertBefore('.location');
		} else {
			$('.menu__left').appendTo('.j-mobCont');
			$('.menu__right').insertBefore('.menu__left');
		}
	});

	$(window).trigger('resize');
});