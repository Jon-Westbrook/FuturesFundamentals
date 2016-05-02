(function($) {
	

	$(document).ready(function(){

		setupSearchField();
		mobileNav();
		navTouchHandler();
		bannerShow();
		
		$(".main-nav__toggle").click(function(){
			if ($('body').hasClass('main-nav-open')) {
				$('body').removeClass('main-nav-open');
				$('.main-nav__links li').removeClass('drop-open');	
			} else {
				$('body').addClass('main-nav-open');
			}
		});

		$(".menu-overlay").click(function(){
			$('body').removeClass('main-nav-open');
			$('.main-nav__links li').removeClass('drop-open');	
		});

		$('.main-nav__search').submit(function(){
			if ($(".main-nav__secondary").hasClass('search-open')) {
				if ($('.main-nav__search-input').val() == "") { 
					$(".main-nav__secondary").removeClass('search-open');	
					return false;
				}
				else {}
				
			} else {
				if ($(window).width() < 992 ) {}
				else {
					$(".main-nav__secondary").addClass('search-open');	
					setTimeout(function() {
						$('.main-nav__search-input').focus();
					}, 0);
					console.log('ready for test');
					return false;
				}
			}
		});

		$('.main-nav__search-input').blur(function() {
			if ($(this).val() == "") {
				setTimeout(function() {
					$(".main-nav__secondary").removeClass('search-open');	
				}, 200);
			}
		});


		$("#subnav .subnav-chapter").click(function(){
			if ($(this).parent('.block-title').hasClass('li-selected')) {
				$("#subnav .block-title").removeClass('li-selected');
			} else {
				$("#subnav .block-title").removeClass('li-selected');
				$(this).parent('.block-title').addClass('li-selected');
			}
		});

	//	if ($.browser.webkit) {
	//	    $('.main-nav__search-input').attr('autocomplete', 'off');
	//	}
			
		
	});
	
	$(window).resize(function() {
		mobileNav();
		navTouchHandler();
	});

	$(document).scroll(function(){
		bannerPeek();
	});
	
	mobileNav = function() {
		if ($(window).width() < 992 ) {
			$('.top-nav-item').click(function(){
				event.preventDefault();
				dropWrap = $(this).parent('li');
				if ($(dropWrap).hasClass('drop-open')) {
					$(dropWrap).removeClass('drop-open');	
				} else {
					$('.main-nav__links li').removeClass('drop-open');
					$(dropWrap).addClass('drop-open');	
				}
			});
		}
	}

	focusTextArea = function() {
	    $('.main-nav__search-input').focus();
	}

	function navTouchHandler() {
		if ($(window).width() > 991 ) {
			$('.sub-nav-item').on('touchend', function (e) {
		      var el = $(this);
		      var link = el.attr('href');
		      window.location = link;
		   	});
			
			$('.menu-overlay').on('click mousedown mouseup touchstart touchmove', function (e) {
		   		$('.top-nav-hover').removeClass('top-nav-hover');
		   		$('body').removeClass('main-nav-open');
		   	});


		   	$('.touch .top-nav-item').on('click', function (e) {
		   		e.preventDefault();
		   		
	   			$('.top-nav-hover').removeClass('top-nav-hover');
	   			$(this).parent('li').addClass('top-nav-hover');
	   			$('body').addClass('main-nav-open');
		   		
		   	});

		}
	}

	function bannerShow() {
		setTimeout(function() {
			$('.derivatives-banner').addClass('banner-show');
		}, 800);
	}

	function bannerPeek() {
		if ($(window).scrollTop() < 100) {
			$('.derivatives-banner').addClass('banner-show');
		} else {
			$('.derivatives-banner').removeClass('banner-show');
		}
	}
	
	function setupSearchField() {
		console.log("Checking Search");
		if ($("body").hasClass("page-template-tpl_search_results")) {
			var term = getUrlParameter("q");
			if (term != "" && term != null) {
				console.log("Search term found: ",term);
				$(".main-nav__secondary").addClass("search-open");
				$("#search").val(term);
			}
		}
	}

})( jQuery );

/* @see http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};