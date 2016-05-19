/*

Container function for analytics event tracking.


@param var json = {
			"category":"",
			"action":"",
			"label":""
		}


Sample usage
track_this({"category":"", "action":"", "label":""});
*/

function track_this(json) {
	json.value = null; // We are not using value on this website
	console.log("Analytics Event", json);
	ga('send', 'event', json.category, json.action, json.label, json.value);
}

// Place for any functions that don't require being placed in other locations in the code.

// Scroll activated functionality is within animations.js, inside the scrollAnimate function in order to aid performance and not have multiple scroll listeners.

$(document).ready(function(){


	// Glossary definition CTA
	$(".glossary-cta").on("click",function(e){
		track_this({"category":"Glossary Page", "action":"link to page", "label":term});
	});

	// To do - carousel comes into view

	// carousel next/previous button

	$(".carousel").not("#quiz-carousel").not("#food-price-carousel").on('slide.bs.carousel', function(e){
		var new_slide = $(e.relatedTarget);
		var me = $(this)
		var slide_label = "Slide " + (parseInt(new_slide.index()) + 1);
		// Please change the "initial carousel" scroll event in animations.js if you make any changes to this
		track_this({"category":me.attr("data-analytics-category") ? me.attr("data-analytics-category") : "Carousel View", "action": me.attr("data-analytics-action") ? me.attr("data-analytics-action") : "Carousel: "+ new_slide.find(".carousel-title").text().trim(), "label":slide_label});
	});


	// hedger speclator quiz
	$("#quiz-carousel").on('slide.bs.carousel', function(e){
		console.log(e);
		var new_slide = $(e.relatedTarget);
		var slide_number = new_slide.find(".slide-number-index").text();
		var slide_final = new_slide.find(".results-score").text();

		if (slide_number != "" && slide_number != "null") {
			track_this({"category":"Hedger Speculator Quiz", "action": "question answered", "label":"Question "+slide_number});
		} else {
			// console.log("Skipping");
		}

		if (slide_final) {
			console.log("Reached end");
			track_this({"category":"Hedger Speculator Quiz", "action": "quiz completed", "label":slide_final});
		}
	});

	$("#quiz-carousel .share-buttons a").on("click",function(e){
		var me = $(this);
		track_this({"category":"Hedger Speculator Quiz", "action":"Share - "+me.text(), "label":$(".results-score").text()});
	});

	$(".retake").on("click",function(e){

		track_this({"category":"Hedger Speculator Quiz", "action":"quiz restarted", "label":$(".results-score").text()});
	});


	//Next / Previous article
	$(".nav-previous").on("click",function(e){
		var me = $(this).find("h3").text().trim();
		track_this({"category":"Article Pagination", "action":"previous article", "label":me});
	});

	$(".nav-next").on("click",function(e){
		var me = $(this).find("h3").text().trim();
		track_this({"category":"Article Pagination", "action":"next article", "label":me});
	});

	// Risk Ranch
	$("#module_promo__Risk_Ranch .button").on("click",function(e){
		var me = $(this).text().trim();
		track_this({"category":"Promo", "action":"risk ranch", "label":me});
	});

	// Related Links
	$(".callout a").on("click",function(e){
		var me = $(this);
		if (me.attr("href").endsWith(".pdf")) {
			var action = "file download";
			var href_pieces = me.attr("href").split("/");
			var action = href_pieces[href_pieces.length-1];
		} else {
			var action = "link clicked";
			var label = me.attr("href");
		}
		track_this({"category":"Related Links Module", "action":action, "label":label});
	});


	// For Educators - PDFs
	$(".module__two-col-links a").on("click",function(e){
		var me = $(this);
		var href_pieces = me.attr("href").split("/");
		track_this({"category":"For Educators", "action":"file download", "label":href_pieces[href_pieces.length-1]});
	});


	// For Educators - infographics
	$(".infographic_links a").on("click",function(e){
		var me = $(this);
		track_this({"category":"For Educators", "action":"infographic", "label":me.find("p").text().trim()});
	});

	// For Educators - videos
	$(".video_links a").on("click",function(e){
		var me = $(this);
		track_this({"category":"For Educators", "action":"video", "label":me.find("p").text().trim()});
	});

	// Glossary page - as seen in links
	$(".glossaryTerm a").on("click",function(e){
		var me = $(this);
		var term = me.closest(".glossaryTerm");
		track_this({"category":"Glossary page as seen in link", "action":"Term: "+ term.find(".glossaryTerm__term").text().trim(), "label":"To Article: "+me.text().trim()});
	});

	// Food Price Factors - Click on 1 of the 8 factors
	$(".food-prices-factor").on("click",function(e){
		var me = $(this);
		track_this({"category":"Interactive Infographic View", "action":"Food Price Factor Thumbnail Clicked", "label":me.text().trim()});
	});

	$("#food-price-carousel").on('slide.bs.carousel', function(e){
		var new_slide = $(e.relatedTarget);

		track_this({"category":"Interactive Infographic View", "action":"Food Price Factors Carousel", "label":new_slide.find("h4").text().trim()});

	});

});

