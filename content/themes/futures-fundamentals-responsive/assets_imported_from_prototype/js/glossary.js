(function($) {
	$.fn.hasAttr = function(name) {  
	   return this.attr(name) !== undefined;
	};

	$(document).ready(function(){
		glossary();
		
	});

	function glossary() {
	//	var glossaryJsonURL  = "/content/themes/futures-fundamentals-responsive/assets_imported_from_prototype/js/data/glossaryterms.json",
		var glossaryJsonURL  = "/glossary/?format=json",
		$pullJson = $.ajax({
                        url: glossaryJsonURL,
                        async: false,
                        dataType: 'json',
                        success: function (data) {
                            dataJ = data;
                            return dataJ;
                        }
                  });

		var glossary = dataJ;
		/*
		glossaryTitleDefArray = [];
		glossaryTitleSlugArray = [];

	    i = 0;
	    dataDfnLength = dataJ.length;    
	    for(i ; i < dataDfnLength ; i++) {
	        
	        allDef = dataJ[i].definition;
	        allTitle = dataJ[i].term;
	        allSlug = dataJ[i].slug;
	        glossaryTitleDefArray.push({
	            key: allTitle,
	            value: allDef
	        });
	        glossaryTitleSlugArray.push({
	            key: allTitle,
	            value: allSlug
	        });
	        
	    }
	    */
	    
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


		   	defContainer.html(
							"<div class='glossary-inner'><div class='glossary-title'>" + definition.term + ": </div>"
							+ "<div class='glossary-def'>" + definition.definition + "</div><a href='/glossary#"+ definition.slug +"'>View in Glossary</a></div>"
						)

		    defPosInit = $('.glossary__term.active').position();

		    $('.glossary-container')
		    	.css({
					'top':defPosInit.top
				});
		} else if ($(window).width() < 992 && $('.glossary__term').length) {
			$('.glossary__term:first').addClass('attention');
		}

		$('.glossary__term').on('click',function(e) {
			// this is a giant mess need to clean this up considerably
			$('.glossary__term').removeClass('attention');

			if ($(this).hasClass("active")) {
				$('.glossary__term.active').removeClass('active');
				$('.glossary-container').html("");
				$('.glossary-item-mobile').html("");
			} else {
				$('.glossary__term.active').removeClass('active');
				$(this).addClass('active');

				var term = $(this).attr('data-term');
			    var definition = find_glossary_term(term);
					
				var	defPos = $(this).position(),
					container = $(this).parents('.row'),
					containerHeight = container.outerHeight(true),
					defContainer = $(this).parents('.row').find('.glossary-container');

				if ($(window).width() < 992 ) {
					$(".glossary-item-mobile").remove();
					$(this).parents('.col-md-8').append('<span class="glossary-item-mobile"></span>');
					defContainer = $(".glossary-item-mobile");
				}

				$('.glossary-container').html("");
				$('.glossary-item-mobile').html("");

				defContainer
					.html(
						"<span class='glossary-caret'></span><div class='glossary-inner'><div class='glossary-title'>" + definition.term + ": </div>"
						+ "<div class='glossary-def'>" + definition.definition + "</div><a href='/glossary#"+ definition.slug +"'>View in Glossary</a></div>"
					)

				var defContainerBot = defPos.top + defContainer.outerHeight(true),
					defContainerRight = defPos.left + defContainer.find(".glossary-inner").outerWidth(true);

				if (defContainerBot > containerHeight) {
					glossaryTop = defPos.top - (defContainerBot - containerHeight)
				} else {
					glossaryTop = defPos.top
				}

				if ($(window).width() > 991 ) {
					defContainer	
						.css('top',glossaryTop);
				} else if ($(window).width() < 992) {

					if (defContainerRight > $(window).width()) {
						if (defPos.left < 315) {
							glossaryLeft = "50%"
							glossaryAdjust = "-50%"
						} else {
							glossaryLeft = (defPos.left + $(this).outerWidth()) - (defContainer.find(".glossary-inner").outerWidth(true))
							glossaryAdjust = 0

							console.log(defPos.left)
						}
					} else {
						glossaryLeft = defPos.left
						glossaryAdjust = 0
					}

					defContainer
						.find(".glossary-inner")
						.css({
							'top':defPos.top + $(this).outerHeight() + 5,
							'left':glossaryLeft,
							'transform':'translateX('+glossaryAdjust+')'
						})
						.animate({ marginTop: '15px'}, 800);

					defContainer
						.find(".glossary-caret")
						.css({
							'top':defPos.top + $(this).outerHeight() + 5,
							'left':defPos.left + ($(this).outerWidth(true)/2),
							'transform':'translateX(-50%)'
						})
						.animate({ marginTop: '0'}, 800);
				}	
			}
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