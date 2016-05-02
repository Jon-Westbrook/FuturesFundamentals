(function($) {
	

	$(document).ready(function(){
		carouselInit();
		quizLogic();
		foodPrices();
		animationSize();

		$('.carousel-control').on('click',function(e) {
			setTimeout(function() {
				animationSize();
			},800);
		});
	});
	
	$(window).resize(function() {
		carouselInit();
		foodPrices();
		animationSize();
	});


	function carouselInit() {
		var carousel_img = $('.carousel-inner .active img').outerHeight(true),
			control_height = carousel_img/2;

		if ($(window).width() < 991 ) {
			$('.carousel-controls-container').css('top', control_height );
			$('.infographic .carousel-controls-container').css('top', 'initial' );
		} else {
			$('.carousel-controls-container').css('top', '40px' );
			$('.infographic .carousel-controls-container').css('top', 'initial' );
		}
	}

	function quizLogic() {
		var score = 0;

		$('.quiz-answer a').on('click',function(e) {
			if ($(this).hasClass('correct')) {
				score++;
				$('.score-holder .score').html(score);
				$('.answer-icon').removeClass('icon-incorrect');
				$('.answer-icon').addClass('icon-correct');
			} else {
				$('.answer-icon').removeClass('icon-correct');
				$('.answer-icon').addClass('icon-incorrect');
			}
		});

		$('.results').on('click', function(e) {
			$('.results-score .score').html(score);

			if (score < 4) {
				$('.restuls-message').html("Keep Learning");
				$('.results-icon').css('background-position', '50% 0px');
			} else if (score > 5) {
				$('.restuls-message').html("Nice Job!");
				if ($(window).width() > 991 ) {
					$('.results-icon').css('background-position', '50% -575px');
				} else {
					$('.results-icon').css('background-position', '50% -230px');
				}
			} else {
				$('.restuls-message').html("Not Bad!");
			}
		});

		$('.retake').on('click', function(e) {
			score = 0;
			$('.score-holder .score').html(score);
		});

		$('.share').on('click', function(e) {
			$('.share-foldout').addClass('share-open');
		});
	}

	function foodPrices() {
		var buttonHeight = $('.food-prices-factors-mod').outerHeight(true);
		var carouselHeight = $('.fp-carousel-container').outerHeight(true);
		

		$('.food-prices-factor').on('click',function(e) {
			$(this).addClass('fp-flip');
			$('.fp-carousel-container').addClass('fp-opening');
			setTimeout(function() {
				$('.fp-carousel-container').addClass('fp-reveal');
				$('.food-prices-factors-mod').addClass('fp-hide');
				if ($(window).width() < 992 ) {
					$('#food-prices__mod').height(carouselHeight);
					$('#food-prices__mod .item').height(carouselHeight);
				}
			}, 200);
		});

		$('#food-price-carousel .carousel-control').on('click',function(e) {
			$('.fp-carousel-container').removeClass('fp-opening');
		});

		$('#food-price-carousel .carousel-close').on('click',function(e) {
			$('.fp-carousel-container').removeClass('fp-reveal');
			$('.food-prices-factors-mod').removeClass('fp-hide');
			if ($(window).width() < 992 ) {
				$('#food-prices__mod').height('auto');
			}	
			setTimeout(function() {
				$('.food-prices-factor').removeClass('fp-flip');
				$('.food-prices-factor').addClass('fp-unflip');
			}, 200);	
		});
	}

	function animationSize() {
		var animWidth = $('.active .anim_container').outerWidth(true);
		if ($(window).width() < 768 ) {
			var animWidth = $('.item.active').outerWidth(true);
		}
		var animHeight = (animWidth);

		$('.anim_inner').height(animHeight * 0.64);
		$('#protect_market_infographic .anim_inner').height(animHeight * 0.62);
		$('.trade-title_animation.anim_inner').height(animHeight * 0.30265);
	}

})( jQuery );