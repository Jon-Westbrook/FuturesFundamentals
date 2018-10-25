(function($) {

	$(document).ready(function(){
		carouselInit();
		// loadCarouselVideos();
		quizLogic();
		foodPrices();
		protectMarket();
		animationSize();
		carouselAutoPlay();
		bodymovin();

		$('.carousel-control').on('click',function(e) {
			setTimeout(function() {
				animationSize();
			},800);
		});

	});

	$(window).resize(function() {
		carouselInit();
		// loadCarouselVideos();
		foodPrices();
		protectMarket();
		animationSize();
		carouselAutoPlay();
	});

	function loadCarouselVideos() {
		var irItems = $("#interest_rate_infographic .item");
		var cerealItems = $("#cereal_infographic .item");
		var info = "interest_rate";
		var items = irItems.length > 0 ? irItems : cerealItems;

		for(var i = 0; i < items.length; i++){
			if ($(items[i]).find('video')[0] !== undefined) {
				$(items[i]).find('video')[0].load();
			}
		}
	}

	function random(min, max){
		if(max == null){
			max = min;
			min = 0 ? (min + 1) : (min - 1);
		}
		return Math.floor(Math.random() * (max - min) + min);
	}

	function playSvg(anim, id){
		var currentSvg = id.getElementsByTagName('svg');

		if(currentSvg.length > 0){
			$(currentSvg[0]).remove();
			anim.play();
		} else {
			anim.addEventListener('DOMLoaded',function(){
				anim.play();
			});
		}
	}

	function setSvg(id) {
		return anim = lottie.loadAnimation({
			container: id,
			render: 'svg',
			loop: false,
			autoplay: false,
			isPaused: false,
			path: id.dataset.path
		});
	}

	function animateCereal(id) {
		var cheerios = [];
		console.log('id', id);
		for(var i = 0; i <= 35; i++){
			if(id === 'cereal_title'){
				cheerios.push(document.getElementById("group" + [i]));
			} else {
				if([i] > 5){
					cheerios.push(document.getElementById(id + "_group" + [i]));
				}
			}
		}
		console.log('cheerios', cheerios);
		for(var j = 0; j < cheerios.length; j++){
			if(cheerios[j] !== null){
				var style = window.getComputedStyle(cheerios[j]);
				var matrix = new WebKitCSSMatrix(style.webkitTransform);
				var rainbow = "rbg()";

				TweenMax.to(cheerios[j], random(3,5), {
					opacity: 1,
					x: matrix.e + random(-20, 20),
					y: matrix.f - random(-20, 25),
					yoyo: true,
					repeat: 20,
					ease: Power0.easeInOut
				});
			}
		}
	}

	function bodymovin() {
		var cerealTitle = document.getElementById("cereal_title");
		var info = "interest_rate";

		if (!document.getElementById('interest_rate_infographic')) {
			info = "cereal";
			var animationTitle = setSvg(cerealTitle);

			animationTitle.addEventListener('DOMLoaded',function(){
				animationTitle.goToAndPlay(1,true);
				animateCereal("cereal_title");
			});
		}

		$("#" + info +"_infographic .right.carousel-control").on('click',function(e) {
			var nextCarousel = $(this).parents('.active').next().find('.carousel-animate');

			if (nextCarousel[0] !== undefined) {
				var nextId = nextCarousel[0].id;
				var nextEl = document.getElementById(nextId);
				var animNext = setSvg(nextEl);

				playSvg(animNext, nextEl);

				animNext.addEventListener('DOMLoaded',function(){
					console.log('dom loaded');
					animateCereal(nextId);
				});
			}
		});

		$("#" + info +"_infographic .left.carousel-control").on('click',function(e) {
			var previousCarousel = $(this).parents('.active').prev().find('.carousel-animate');

			if (previousCarousel[0] !== undefined) {
				var prevId = previousCarousel[0].id;
				var prevEl = document.getElementById(prevId);
				var animPrev = setSvg(prevEl);

				playSvg(animPrev, prevEl);

				animPrev.addEventListener('DOMLoaded',function(){
					animateCereal(prevId);
				});
			}
		});
	}

	function carouselInit() {
	//	var carousel_img = $('.carousel-inner .active img').outerHeight(true),
	//		control_height = carousel_img/2;

		var carousel_width = $(window).width(),
			control_height = (carousel_width * 0.66667)/2;

		if ($(window).width() < 991 ) {
			$('.carousel-custom-slide .carousel-controls-container').css('top', control_height );
			$('.infographic .carousel-controls-container').css('top', 'initial' );
		} else {
			$('.carousel-custom-slide .carousel-controls-container').css('top', '40px' );
			$('.infographic .carousel-controls-container').css('top', 'initial' );
		}
	}

	function quizLogic() {
		var shareTitle,
			shareText,
			shareImage,
			facebookUrl,
			shareUrl = location.href,
			score = 0;

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
				shareTitle = "I’m a Market Amateur!";
				shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow amateur—or a dynamo. ";
				facebookUrl = location.href + "market-amateur-share/";
			} else if (score > 5) {
				$('.restuls-message').html("Nice Job!");
				shareTitle = "I’m a Market Dynamo!";
				shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow dynamo. ";
				facebookUrl = location.href + "market-dynamo-share/";
				if ($(window).width() > 991 ) {
					$('.results-icon').css('background-position', '50% -575px');
				} else {
					$('.results-icon').css('background-position', '50% -230px');
				}
			} else {
				$('.restuls-message').html("Not Bad!");
				$('.results-icon').css('background-position', '50% 50%');
				shareTitle = "I’m a Market Up-and-Comer! ";
				shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow up-and-comer—or a dynamo. ";
				facebookUrl = location.href + "market-comer-share/";
			}

			var facebookLink = "javascript:popup_share('http://www.facebook.com/sharer.php?u="+facebookUrl+"',800,400)";
			var twitterLink = "javascript:popup_share('https://twitter.com/intent/tweet?status="+shareText+shareUrl+"',800,400)";
			var linkedinLink = "javascript:popup_share('https://www.linkedin.com/shareArticle?mini=true&url="+shareUrl+"&title="+shareTitle+"&summary="+shareText+"',800,400)";
			var emailLink = "javascript:popup_share('mailto:?&subject="+shareTitle+"&body="+shareText+" "+shareUrl+"',800,400)";

			$('.quiz-share-holder .fb-icon').attr('href',facebookLink);
			$('.quiz-share-holder .twitter-icon').attr('href',twitterLink);
			$('.quiz-share-holder .linkedin-icon').attr('href',linkedinLink);
			$('.quiz-share-holder .email-icon').attr('href',emailLink);

		});

		$('.retake').on('click', function(e) {
			score = 0;
			$('.score-holder .score').html(score);
			$('.share-foldout').removeClass('share-open');
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

				smoothScroll('.fp-carousel-container', 0);

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

	function protectMarket() {
		$('.touch #protect_market_infographic .carousel-control').on('click',function(e) {
			if ($(window).width() < 768 ) {
				smoothScroll('#protect_market_infographic', -30);
			}
		});

		$('.touch #clearing_infographic .carousel-control').on('click',function(e) {
			if ($(window).width() < 768 ) {
				smoothScroll('#clearing_infographic', -30);
			}
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

	function carouselAutoPlay() {
		var irItems = $("#interest_rate_infographic .item");
		var cerealItems = $("#cereal_infographic .item");
		var info = "interest_rate";

		if (!document.getElementById('interest_rate_infographic')) {
			info = "cereal";
		}

		var firstItem = $(irItems[0]).hasClass('active')  ? $(irItems[0]) : $(cerealItems[0]);
		var firstVid = $(firstItem).find('video')[0];
		if (firstVid !== undefined) {
			firstVid.currentTime = 0;
			firstVid.play();
		}

		$("#" + info +"_infographic .right.carousel-control").on('click',function(e) {
			var nextVid = $(this).parents('.active').next().find('video')[0];
			if(nextVid !== undefined){
				nextVid.currentTime = 0;
				nextVid.play();
			}
		});

		$("#" + info + "_infographic .left.carousel-control").on('click',function(e) {
			var prevVid = $(this).parents('.active').prev().find('video')[0];
			if(prevVid !== undefined) {
				prevVid.currentTime = 0;
				prevVid.play();
			}
		});
	}

	function smoothScroll(scrollTo, scrollOffset) {
		$('html, body').animate({
			scrollTop: ($(scrollTo).offset().top) - (scrollOffset+80)
		}, 600);
	}

})( jQuery );

/* Global Functions */
function popup_share(url, width, height) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(url, '" + id + "', 'toolbar=0,scrollbars=1,location=1,statusbar=0,menubar=0,resizable=0,width=" + width + ", height=" + height + ", left = 363, top = 144');");
}
