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

	// input number 
	if($('.product__arrtop').length) {
		$('.product__arrtop').click(function() {
			if(+$('.product__quantity').val() < 99) {
				$('.product__quantity').val(+$('.product__quantity').val() + 1);
			}
		});
	};
	// input number 
	if($('.product__arrbot').length) {
		$('.product__arrbot').click(function() {
			if(+$('.product__quantity').val() > 0) {
				$('.product__quantity').val(+$('.product__quantity').val() - 1);
			}
		});
	};
	// like
	if($('.product__likecont').length) {
		$('.product__likecont').click(function() {
			if(+$('.number_like').text() == 495) {
				$('.number_like').text('496');
				$('.like').hide();
				$('.like_active').show();
			} else {
				$('.number_like').text('495');
				$('.like_active').hide();
				$('.like').show();
			}
		});
	};
});