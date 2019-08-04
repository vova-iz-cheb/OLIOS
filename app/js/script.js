$(function() {

	//show/close right menu

	$('.show-close-menu').click(function() {
		$(this).toggleClass('active');
		$('.slick-dots').toggle();
		if($('.rightnav__cont').css('width') == '0px') {
			$('.rightnav__cont').css('width', '');
		} else $('.rightnav__cont').css('width', 0);
	})

	// carousel 
	$('.carousel').slick({
		arrows: false,
		dots: true
	});

});