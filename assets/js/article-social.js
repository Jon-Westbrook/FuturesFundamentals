(function($) {


	$(document).ready(function(){
		console.log("a document ready test");

		if ($('.cf-content').length) {
			articleSocial();

			$(window).resize(function() {
				articleSocial();
			});

			$(document).scroll(function(){
				articleSocial();
			});

		}

	});

	function articleSocial() {
		$offset_top = $('.cf-content').offset();
		$offset_bottom = $offset_top.top + $('.cf-content').outerHeight(true);

		var root = $('#article-social');

		if (root.length) {
			root.css('top',$offset_top.top - 60);
		} else {
			return false;
		}

		if ($(window).width() > 991 ) {
			if ($(window).scrollTop() > ($offset_top.top - 80) && $(window).scrollTop() < ($offset_bottom - 416) ) {
				root.removeClass('bottom-fix');
				root.addClass('sticky');
			} else if ($(window).scrollTop() > ($offset_bottom - 416)) {
				root.removeClass('sticky');
				root.addClass('bottom-fix');
			} else {
				root.removeClass('bottom-fix');
				root.removeClass('sticky');
			}
		}
	}

})( jQuery );