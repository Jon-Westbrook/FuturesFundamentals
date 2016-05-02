console.log("Simulator JS");


var simulator_functions = {
	"simulator_market_snapshot_colors" : function (module) {
		console.log("ScrollAnimation", module);

		var high_green = 371.25;
		var low_green = 366.75;
		var low_red = 371.25;
		var high_red = 366.75;
		var green = module.find('.market-snapshot--green .market_snapshot_component__current-price');
		var red = module.find('.market-snapshot--red .market_snapshot_component__current-price')
			
		setTimeout(function(){
			$({someValue: low_green}).animate({someValue: high_green}, {
			    duration: 4500,
			    easing:'easeOutQuad', // can be anything
			    step: function() { // called on every step
			        green.text(parseFloat(this.someValue).toFixed(2));
			    }
			});
		});
		
		setTimeout(function(){
			$({someValue: low_red }).animate({someValue: high_red}, {
			    duration: 4500,
			    easing:'easeOutQuad', // can be anything
			    step: function() { // called on every step
			        red.text(parseFloat(this.someValue).toFixed(2));
			    }
			});
		},1250);
		
	},
	
	"simulator_market_snapshot_group" : function (module) {
		console.log("ScrollAnimation", module);

		// Prices = [[Start Value, End Value, Milliseconds timing]]
		var prices = [ 
			[868.50, 877.44, 4500], 
			[878.00, 873.29, 4000],
			[476.50, 479.45, 3000],
			[366.75, 371.25, 3500]
		];

		var ms = module.find('.market-snapshot');
			
		setTimeout(function(){
			
			ms.each(function(i, el){
				$({someValue: prices[i][0]}).animate({someValue: prices[i][1]}, {
				    duration: prices[i][2],
				    easing:'easeOutQuad', // can be anything
				    step: function() { // called on every step
				        $(el).find(".market_snapshot_component__current-price").text(parseFloat(this.someValue).toFixed(2));
				    }
				});
			});
		});
	}
} 




/*
	
	$('.vert-center').flexVerticalCenter();
			setTimeout(function(){
				var zeroes = $(".infographic-simulator").find(".panel-0");
				if (zeroes.length > 1) {
					zeroes.first().remove();
					$('.vert-center').flexVerticalCenter();
				}
			},500);
			

			
			click_highlight = function(selector) {
				var target = $(selector);

				if (target.hasClass("is-highlighted")) {
					return false;
					/*target.removeClass("is-highlighted");	
					target.closest(".highlight-container").removeClass("has-selected");
					setTimeout(function(){ $(".popup.active").hide().removeClass("active"); },300);
					return false;* /
					
				} else {
					$(".is-highlighted").removeClass("is-highlighted");
					target.addClass("is-highlighted");	
					target.closest(".highlight-container").addClass("has-selected");
				}
				
			};
			
			market_order = function(selector, val) {
				var me = $(selector);
				
				me.closest(".market_order").addClass("has-selected").find(".selected").removeClass("selected");
				
				me.addClass("selected").find("span").text(val);
			}
			
			$(".accordion-btns").find("a").on("click",function(e){
				$(".accordion.active").removeClass("active").find(".text").slideUp();
				var me = $(this).closest(".accordion");
				me.addClass("active");
				me.find(".text").slideDown();
				
				
				// Set candlestick class
				var stick = $(this).data("css-id");
				var stickClass = $(this).data("class-to-add");
				$(stick).removeClass().addClass(stickClass);
			});
		}
		
		*/