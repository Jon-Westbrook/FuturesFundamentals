/**
 * Logic for animations with scroll activation
 **/


var classForAnimationItems = ".scrollAnimation--capable";		// These items are capable of using an animation. JS will look for this class. DO NOT STYLE using this selector.
var classForAnimationItemsBefore = ".scrollAnimation--before";	// Animated items before they are activated. Use styles to show their initial state.
var classForAnimationItemsDuring = ".scrollAnimation--active";	// Class given to an animated item when it is activated.
var classForAnimationItemsAfter = ".scrollAnimation--after";	// Optionally, a class given to an animated item after the animation completes, if needed.

var debugger_activate = ".animation__debugger__activate";
var debugger_before = ".animation__debugger__before";
var debugger_after = ".animation__debugger__after";

var attributeForHighlightElements = "data-highlight-element";

var classForAnalyticItems = ".scrollAnalyticsItem";
var attributeForAnalyticsItemCategory = "data-analytics-category";
var attributeForAnalyticsItemAction = "data-analytics-action";
var attributeForAnalyticsItemLabel = "data-analytics-label";
var attributeForAnalyticsItemAlreadyActivated = "data-analytics-activated";

var window_height = ($(window).height());
var scrollAnimateCanBeReset = false;





$(document).ready(function() {
	console.log("Init: Animations");
	setupAnimationDebugger();
	setupHighlightElementsOnHover();
	setupScrollActivatedAnimation();

	setupHashSmoothScroll();

	setupRiskRanchJS();
});

$(window).resize(function() {
	window_height = ($(window).height());
	scrollAnimate();
}).scroll(function() {
	scrollAnimate();
});






setupRiskRanchJS = function() {
	$(".open-in-risk-ranch-window").on("click", function(e){
  		var width = 480;
  		var height = 860;
  		var window_height = $(window).height();

  		var left = ($(window).width() / 2) - width/2;
      	var top = window_height/2 - height/2;

  		if (window_height < height) {
      		var original_height = height;
      		var original_width = width;
      		height = window_height - 40;
      		width = width * (height/original_height);

  		}

      	var windowName = 'userConsole';
		var popUp = window.open($(this).attr('href'), windowName, 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars, resizable');

		if (popUp == null || typeof(popUp)=='undefined') {
			$(".game-message").addClass("has-error");
		}
		else {
			popUp.focus();
		}

		return false;
  	});
}


setupHashSmoothScroll = function() {
	console.log("Init: Hash Smooth Scroll");

	if (location.hash) {

		$("html,body").scrollTop(0);
		setTimeout(function(){
			var me = $("[name='" + location.hash.replace("#","") + "']");
			if (me.next().offset()) {
				var scroll_to_pixel = me.next().offset().top - 80;

				$("html,body").animate( {scrollTop: scroll_to_pixel}, 500);
			}


		},500);
	}
}

setupScrollActivatedAnimation = function() {
	console.log("Init: Scroll Activated Animation");

	scrollAnimate();
}

scrollAnimate = function() {
	var scrollTop = $(window).scrollTop();

	if (scrollTop < 10 && scrollAnimateCanBeReset) {
		/* DISABLING RESET FOR TESTCO
		var resetting = $(".scrollAnimation--capable")
			.not(".scrollAnimation--dontReset")
			.not(function(i,el){isScrolledIntoView(el)})
			.removeClass("scrollAnimation--after scrollAnimation--active")
			.addClass("scrollAnimation--before");

		console.log("Resetting ScrollAnimation elements");
		scrollAnimateCanBeReset = false;
		*/
	} else {

		$(classForAnimationItems).add(classForAnalyticItems).each(function() {
			var me = $(this);
			var top = me.offset().top;

			// Decide when to trigger the breakpoint
			if (me.attr("data-scrollAnimation-pixels")) {
				top = top + parseInt(me.attr("data-scrollAnimation-pixels"));
				//console.log(top);
			} else if (me.outerHeight() > $(window).height() * .8) { // If height of module is greater than 80% of the browser window height - e.g. mobile
				top = top + ($(window).height() * .4); // Show when 40% of screen is covered by module
				//console.log("Case 2");
			} else {
				// Otherwise, trigger when 80% of module is visible
				top = top + (me.outerHeight()*.8);
			}



			// console.log("         Checking Scroll Position", top);

			if (scrollTop > (top - window.window_height) ) {
				if (me.hasClass(classForAnimationItemsBefore.replace(".",""))) {

					console.log("Scroll Event", top, window.window_height, me);
					me.removeClass(classForAnimationItemsBefore.replace(".","")).addClass(classForAnimationItemsDuring.replace(".",""));
					scrollAnimateCanBeReset = true;
					if (typeof simulator_functions[me.attr("id")] === "function") {
						simulator_functions[me.attr("id")](me);
					}

				}

				if (me.attr(attributeForAnalyticsItemAlreadyActivated) != "yes" && me.hasClass(classForAnalyticItems.replace(".",""))) {
					console.log("Scroll Analytics Event");

					track_this({"category":me.attr(attributeForAnalyticsItemCategory), "action":me.attr(attributeForAnalyticsItemAction), "label":me.attr(attributeForAnalyticsItemLabel)});
					me.attr(attributeForAnalyticsItemAlreadyActivated, "yes")
				}
			}
		});

	}

}

setupAnimationDebugger = function() {

	$(debugger_activate).add(debugger_before).add(debugger_after).off("click").on("click",function(){

		var me = $(this);
		var container = me.closest(".module__animated-image");
		var module = container.find(".module");
		// var module_bg =  module.hasClass("module__bg") ? module : module.find(".module__bg")
		// var bg_color = module_bg.css("background-color");

		// Flash the module to show it's activated
		
		setTimeout(function(){ module_bg.css('background-color', 'white'); }, 0);
		setTimeout(function(){ module_bg.css('background-color', bg_color); }, 50);
		setTimeout(function(){ module_bg.css('background-color', 'white'); }, 100);
		setTimeout(function(){ module_bg.css('background-color', bg_color); }, 150);
		setTimeout(function(){ module_bg.css('background-color', 'white'); }, 200);
		setTimeout(function(){ module_bg.css('background-color', bg_color); }, 250);


		setTimeout(function(){

			if (me.hasClass(debugger_activate.replace(".",""))) { module.removeClass(classForAnimationItemsBefore.replace(".","")).removeClass(classForAnimationItemsAfter.replace(".","")).addClass(classForAnimationItemsDuring.replace(".",""))}
			if (me.hasClass(debugger_before.replace(".",""))) { module.removeClass(classForAnimationItemsDuring.replace(".","")).removeClass(classForAnimationItemsAfter.replace(".","")).addClass(classForAnimationItemsBefore.replace(".",""))}
			if (me.hasClass(debugger_after.replace(".",""))) { module.removeClass(classForAnimationItemsBefore.replace(".","")).removeClass(classForAnimationItemsDuring.replace(".","")).addClass(classForAnimationItemsAfter.replace(".",""))}

			if (typeof simulator_functions[module.attr("id")] === "function") {
				simulator_functions[module.attr("id")](module);
			}

		}, 10);

		return false;
	});
	console.log("Init: Animation Debugger");

}

setupHighlightElementsOnHover = function() {
	var elements = $("[" + attributeForHighlightElements + "]").on("mouseover",function(){
		var target = $($(this).attr(attributeForHighlightElements));

		target.addClass("is-highlighted");
	}).on("mouseout",function(){
		var target = $($(this).attr(attributeForHighlightElements));
		target.removeClass("is-highlighted");
	})
	/*
	if (elements.length) {



		elements.each(function(i,el) {

			$()
			debugger;
			var top = $(this).offset().top;

			if ( $(window).scrollTop() > (top - height) ) {
				$(this).addClass(classForAnimationItemsDuring);
			}
		});
	} */
}



/* jQuery Easing */
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*(((r*=1.525)+1)*e-r))+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

/* http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling */
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}