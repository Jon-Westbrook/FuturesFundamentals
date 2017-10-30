(function($) {
	

	$(document).ready(function() {
		$.getJSON( "/js/data/infographic-corn.json", function( data,status ) {
			if(status === "success") {
				json = data;
				makePricesMove(json);
			}
		});

		$('.price-move-button').on('click',function(e) {
			//remove scroll classes
			$('#food-prices-move').removeClass('scrollAnimation--capable');
			$('#food-prices-move').removeClass('scrollAnimation--active');

			$('#food-prices-move').removeClass('animate');
			$('#food-prices-move').addClass('animate-up');
			setTimeout(function() {
				makePricesMove(json);
			}, 800);
		});
	});

	function makePricesMove(data) {
		var $cols = $('.trend-col'),
			$iconLeft = $('.fp-icon.icon-left'),
			$iconRight = $('.fp-icon.icon-right'),
			$textLeft = $('.info-text.text-left'),
			$textRight = $('.info-text.text-right'),
			$trend = $('.trend-holder'),
			numData = data.scenario.length,
			randNum;

		
			var factorsScore = 0,
				checkData = [];
			

			setTimeout(function() {
				$cols.each(function(i){
					var $col = $(this),
						$icon = $col.find('.fp-icon'),
						$text = $col.find('.info-text'),
						$validate = validate(json, numData, checkData)
						$randNum = $validate.rand;

					if($validate.status === 'success') {
						checkData.push($randNum);

						// Change Icon
						$icon.attr('class','fp-icon icon-'+data.scenario[$randNum].factorID);

						// Change Arrow Direction of Col
						if(data.scenario[$randNum].factorValue === 'up') {
							$('.trend-icon',$col).attr('class','trend-icon trend-up');
							factorsScore++;

						} else {
							$('.trend-icon',$col).attr('class','trend-icon trend-down');
							factorsScore--;
						}

						// Change Title Text
						$('h4',$text).text(data.scenario[$randNum].factorTitle);

						// Change Content Text
						$('p',$text).text(data.scenario[$randNum].text);

					}
				});

				// Change Trend Col
				if( factorsScore > 0 ) {
					$('h3',$trend).text('Prices trend Up');
					$trend.attr('class', 'trend-holder trend-up');
				} else if (factorsScore < 0 ){
					$('h3',$trend).text('Prices trend Down');
					$trend.attr('class', 'trend-holder trend-down');
				} else {
					$('h3',$trend).text('Prices Stable');
					$trend.attr('class', 'trend-holder trend-stable');
				}

				if ($('#food-prices-move').hasClass('scrollAnimation--before')) {

				} else {
					$('#food-prices-move').removeClass('animate-up');
					$('#food-prices-move').addClass('animate');
				}

			}, 200);
		
	}

	function validate(data, num, check) {

		// Choose a random number
		randNum = Math.ceil(Math.random() * (num-1));

		// Check to Make sure Factor Names are not the same.
		$.each( check, function(i, l){
			if(data.scenario[l].factorID === data.scenario[randNum].factorID) {
				// Fail
				validate(data, num, check);
			}
		});

		return {
	        status: "success",
	        rand: randNum
	    };
	}

})( jQuery );