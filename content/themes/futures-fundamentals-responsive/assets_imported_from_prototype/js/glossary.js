(function($) {
	$.fn.hasAttr = function(name) {
	   return this.attr(name) !== undefined;
	};

	$(document).ready(function(){
		glossary();

		//return bug logic
		var cookie_val = $.cookie('glossary_cookie');

		if ($('.glossary__term').length) {
			$('.glossary__term').on('click', function (e) {
				console.log("dismissed");
				$('.glossary__term').removeClass('attention');
				$.cookie('glossary_cookie', 'true', { path: '/' });
			});
		}

		function checkCookie() {
			if (cookie_val==null) {
			} else {
				$('.glossary__term').removeClass('attention');
			}
		}

		checkCookie();

	});

	$(window).resize(function() {
		$('.glossary-item-mobile').html("");
	});

	function glossary() {
		var production_servers = ["futuresfundamentals.cmegroup.com", "static.ff.cme.vsadev.com"]
		if (production_servers.indexOf(window.location.hostname) != -1) {
			var glossaryJsonURL  = "/glossary.json";
		} else {
			var glossaryJsonURL  = "/glossary/?format=json";
		}

		var $pullJson = $.ajax({
                        url: glossaryJsonURL,
                        async: false,
                        dataType: 'json',
                        success: function (data) {
                            dataJ = data;
                            return dataJ;
                        }
                  });

		var glossary = dataJ;


	    function find_glossary_term(the_term) {
		    the_term = the_term.toLowerCase();

		    var valid_term = false

			$(dataJ).each(function(i,el){
				if (the_term == el.term.toLowerCase() || the_term == el.term+"s".toLowerCase()) {
					valid_term = el;
					return false;
				}
			})

			if (!valid_term) {

				console.log("Glossary term not found: " + the_term);
				console.log(dataJ);
				//debugger;
			}

			return valid_term;
	    }


	    if ($(window).width() > 991 && $('.glossary__term').length) {
		    $('.glossary__term:first').addClass('active');

		    if ($('.glossary__term.active').hasAttr('data-term')) {
		    	term = $('.glossary__term.active').attr('data-term');
		    } else {
		    	term = $('.glossary__term.active').html();
		    }


		    var definition = find_glossary_term(term);

			//def = arraySearch(glossaryTitleDefArray,term);
			//slug = arraySearch(glossaryTitleSlugArray,term);
			defContainer = $('.glossary__term.active').parents('.row').find('.glossary-container');

			defContainer.closest(".row").addClass("glossary-container-has-term");
		   	defContainer.html(
							"<div class='glossary-inner'><div class='glossary-title'>" + definition.term + ": </div>"
							+ "<div class='glossary-def'>" + definition.definition + "</div><a class='glossary-cta' href='/glossary#"+ definition.slug +"'>View in Glossary</a></div>"
						)

		    defPosInit = $('.glossary__term.active').offset();
		    defPosInnerInit = $('.glossary__term.active').position();

		    $('.glossary-container')
		    	.css({
					'top':defPosInnerInit.top
				});

		    	setTimeout(function() {
					var defContainerBot = defPosInit.top + defContainer.outerHeight(true),
							fullWidthModule = $('.glossary__term.active').parents('.cf-content').find('.full-width'),
							fullWidthModuleTop = fullWidthModule.offset(),
							bodyContainer = $('.glossary__term.active').parents('.cf-content'),
							bodyContainerBot = bodyContainer.offset().top + bodyContainer.outerHeight(true);


					if (typeof fullWidthModuleTop != 'undefined' && defContainerBot > fullWidthModuleTop.top) {
						fullWidthModule.css('margin-top',(defContainerBot - fullWidthModuleTop.top - 10)+'px');
					} else if (defContainerBot > bodyContainerBot) {
						$('.cf-content').css('margin-bottom',(defContainerBot - bodyContainerBot - 80)+'px');
					}
				},300);

		} else if ($(window).width() < 992 && $('.glossary__term').length) {
			$('.glossary__term:first').addClass('attention');
		}


		$('.glossary__term').on('click',function(e) {



			// this is a giant mess need to clean this up considerably
			$('.glossary__term').removeClass('attention');
			$('.full-width').css('margin-top','0');
			$('.cf-content').css('margin-bottom','0');

			if ($(window).width() < 992) {
				setTimeout(function() {
					$('body').addClass('tooltip-open');
				},800);
			}

			if ($(this).hasClass("active")) {
				$('.glossary__term.active').removeClass('active');
				$('.glossary-container').html("");
				$('.glossary-item-mobile').html("");
				$(".glossary-container-has-term").addClass("glossary-container-has-term");
				$('body').removeClass('tooltip-open');
			} else {
				$('.glossary__term.active').removeClass('active');
				$(this).addClass('active');

				if ($('.glossary__term.active').hasAttr('data-term')) {
			    	var term = $(this).attr('data-term');
			    } else {
			    	var term = $(this).html();
			    }

			    track_this({"category":"Glossary Link", "action":"show definition", "label":term});

			    var definition = find_glossary_term(term);

				var	defPos = $(this).offset(),
					parentPos = $('.cf-content').offset(),
					defInnerPos = $(this).position(),
					container = $(this).parents('.row'),
					containerHeight = container.outerHeight(true),
					defContainer = $(this).parents('.row').find('.glossary-container');

				if ($(window).width() < 992 ) {
					$(".glossary-item-mobile").remove();
					$(this).parents('.cf-content').append('<span class="glossary-item-mobile"></span>');
					defContainer = $(".glossary-item-mobile");
				}

				$('.glossary-container').html("");
				$('.glossary-item-mobile').html("");

				container.addClass("glossary-container-has-term");

				defContainer
					.html(
						"<span class='glossary-caret'></span><div class='glossary-inner'><div class='glossary-title'>" + definition.term + ": </div>"
						+ "<div class='glossary-def'>" + definition.definition + "</div><a href='/glossary#"+ definition.slug +"'>View in Glossary</a></div><div class='tooltip-overlay'></div>"
					)

				var defContainerBot = defPos.top + defContainer.outerHeight(true),
					fullWidthModule = $(this).parents('.cf-content').find('.full-width'),
					fullWidthModuleTop = fullWidthModule.offset(),
					defContainerRight = defPos.left + defContainer.find(".glossary-inner").outerWidth(true),
					bodyContainer = $('.glossary__term.active').parents('.cf-content'),
					bodyContainerBot = bodyContainer.offset().top + bodyContainer.outerHeight(true);


				glossaryTop = defInnerPos.top;


				if ($(window).width() > 991 ) {
					defContainer
						.css('top',glossaryTop);


						if (typeof fullWidthModuleTop != 'undefined' && defContainerBot > fullWidthModuleTop.top) {
							fullWidthModule.css('margin-top',(defContainerBot - fullWidthModuleTop.top - 10)+'px');
						} else {
							fullWidthModule.css('margin-top','0');
						}

						if (defContainerBot > bodyContainerBot) {
							$('.cf-content').css('margin-bottom',(defContainerBot - bodyContainerBot - 80)+'px');
						} else {
							$('.cf-content').css('margin-bottom','0');
						}

				} else if ($(window).width() < 992) {
					$('body').addClass('tooltip-open');

					if (defContainerRight > $(window).width()) {
						if (defPos.left < 315) {
							glossaryLeft = "50%";
							glossaryAdjust = "-50%";
							caretAdjust = 0;
						} else if ($(window).width() > 767) {
							widthOffset = ($(window).width() - 750)/2;
							glossaryLeft = (defPos.left + $(this).outerWidth()) - (defContainer.find(".glossary-inner").outerWidth(true)) - widthOffset;
							glossaryAdjust = 0;
							caretAdjust = widthOffset;
						} else {
							glossaryLeft = (defPos.left + $(this).outerWidth()) - (defContainer.find(".glossary-inner").outerWidth(true));
							glossaryAdjust = 0;
							caretAdjust = 0;
						}
					} else {
						if ($(window).width() > 767) {
							widthOffset = ($(window).width() - 750)/2;
							glossaryLeft = defPos.left - widthOffset;
							glossaryAdjust = 0;
							caretAdjust = widthOffset;
						} else {
							glossaryLeft = defPos.left;
							glossaryAdjust = 0;
							caretAdjust = 0;
						}
					}

					defContainer
						.find(".glossary-inner")
						.css({
							'top':defPos.top - parentPos.top + $(this).outerHeight() + 5,
							'left':glossaryLeft,
							'transform':'translateX('+glossaryAdjust+')'
						})
						.animate({ marginTop: '15px'}, 800);

					defContainer
						.find(".glossary-caret")
						.css({
							'top':defPos.top - parentPos.top + $(this).outerHeight() + 5,
							'left':defPos.left + ($(this).outerWidth(true)/2) - caretAdjust,
							'transform':'translateX(-50%)'
						})
						.animate({ marginTop: '0'}, 800);

				}
			}

			$(".tooltip-overlay").on('click',function(e) {
				$('.glossary__term.active').removeClass('active');
				$('.glossary-container').html("");
				$('.glossary-item-mobile').html("");
				$(".glossary-container-has-term").addClass("glossary-container-has-term");
				$('body').removeClass('tooltip-open');
			});
		});

	}

	function arraySearch(arr,val) {
        for (var i=0; i<arr.length; i++) {

                if (arr[i].key === val) {

                    scrollId = arr[i].value;
                    // console.log(scrollId);
                    return scrollId;

                }


            }

       return false;

    }


})( jQuery );