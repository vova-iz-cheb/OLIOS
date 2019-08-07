$(function() {

	//show/close right menu

	$('.show-close-menu').click(function() {
		$(this).toggleClass('active');
		$('.slick-dots').toggle();
		if($('.rightnav__cont').css('width') == '0px') {
			$('.rightnav__cont').css('width', '');
		} else $('.rightnav__cont').css('width', 0);
	});

	// carousel 
	if($('.carousel').length) {
		$('.carousel').slick({
			arrows: false,
			dots: true
		});
	};

	// form clear
	if($('.search__clear').length) {
		$('.search__clear').click(function() {
			$('.search__input').val("");
		});
	};
});