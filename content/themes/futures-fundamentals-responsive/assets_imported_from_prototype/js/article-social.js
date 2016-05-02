(function($) {
	

	$(document).ready(function(){
		articleSocial();
	});
	
	$(window).resize(function() {
		articleSocial();
	});

	$(document).scroll(function(){
		articleSocial();
	});

	function articleSocial() {
		$offset_top = $('.cf-content').offset();

		var root = $('#article-social');
		
		if (root.length) {
			root.css('top',$offset_top.top);
		} else {
			return false;
		}

		if ($(window).width() > 991 ) {
			if ($(window).scrollTop() > ($offset_top.top - 80)) {
				root.addClass('sticky');
			} else {
				root.removeClass('sticky');
			}
		}
	}

})( jQuery );