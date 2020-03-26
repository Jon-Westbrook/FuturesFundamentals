import $ from 'jquery'

import trackThis from '../util/trackThis'

/*
Container function for analytics event tracking.

@param var json = {
  "category":"",
  "action":"",
  "label":""
}

Sample usage
trackThis({"category":"", "action":"", "label":""})
*/

// Place for any functions that don't require being placed in other locations in the code.

// Scroll activated functionality is within animations.js, inside the scrollAnimate function in order to aid performance and not have multiple scroll listeners.

export default () => {
  // Glossary definition CTA
  $('.glossary-cta').on('click', function (e) {
    // trackThis({ category: 'Glossary Page', action: 'link to page', label: term })
    trackThis({ category: 'Glossary Page', action: 'link to page' })
  })

  // To do - carousel comes into view

  // carousel next/previous button

  $('.carousel').not('#quiz-carousel').not('#food-price-carousel').on('slide.bs.carousel', function (e) {
    var newSlide = $(e.relatedTarget)
    var me = $(this)
    var slideLabel = 'Slide ' + (parseInt(newSlide.index()) + 1)
    // Please change the "initial carousel" scroll event in animations.js if you make any changes to this
    trackThis({ category: me.attr('data-analytics-category') ? me.attr('data-analytics-category') : 'Carousel View', action: me.attr('data-analytics-action') ? me.attr('data-analytics-action') : 'Carousel: ' + newSlide.find('.carousel-title').text().trim(), label: slideLabel })
  })

  // hedger speclator quiz
  $('#quiz-carousel').on('slide.bs.carousel', function (e) {
    var newSlide = $(e.relatedTarget)
    var slideNumber = newSlide.find('.slide-number-index').text()
    var slideFinal = newSlide.find('.results-score').text()

    if (slideNumber !== '' && slideNumber !== 'null') {
      trackThis({ category: 'Hedger Speculator Quiz', action: 'question answered', label: 'Question ' + slideNumber })
    }

    if (slideFinal) {
      trackThis({ category: 'Hedger Speculator Quiz', action: 'quiz completed', label: slideFinal })
    }
  })

  $('#quiz-carousel .share-buttons a').on('click', function (e) {
    var me = $(this)
    trackThis({ category: 'Hedger Speculator Quiz', action: 'Share - ' + me.text(), label: $('.results-score').text() })
  })

  $('.retake').on('click', function (e) {
    trackThis({ category: 'Hedger Speculator Quiz', action: 'quiz restarted', label: $('.results-score').text() })
  })

  // Next / Previous article
  $('.nav-previous').on('click', function (e) {
    var me = $(this).find('h3').text().trim()
    trackThis({ category: 'Article Pagination', action: 'previous article', label: me })
  })

  $('.nav-next').on('click', function (e) {
    var me = $(this).find('h3').text().trim()
    trackThis({ category: 'Article Pagination', action: 'next article', label: me })
  })

  // Risk Ranch
  $('#module_promo__Risk_Ranch .button').on('click', function (e) {
    var me = $(this).text().trim()
    trackThis({ category: 'Promo', action: 'risk ranch', label: me })
  })

  // Related Links
  $('.callout a').on('click', function (e) {
    var me = $(this)
    let action

    if (me.attr('href').endsWith('.pdf')) {
      action = 'file download'
      var hrefPieces = me.attr('href').split('/')
      action = hrefPieces[hrefPieces.length - 1]
    } else {
      action = 'link clicked'
      var label = me.attr('href')
    }
    trackThis({ category: 'Related Links Module', action: action, label: label })
  })

  // For Educators - PDFs
  $('.module__two-col-links a').on('click', function (e) {
    var me = $(this)
    var hrefPieces = me.attr('href').split('/')
    trackThis({ category: 'For Educators', action: 'file download', label: hrefPieces[hrefPieces.length - 1] })
  })

  // For Educators - infographics
  $('.infographic_links a').on('click', function (e) {
    var me = $(this)
    trackThis({ category: 'For Educators', action: 'infographic', label: me.find('p').text().trim() })
  })

  // For Educators - videos
  $('.video_links a').on('click', function (e) {
    var me = $(this)
    trackThis({ category: 'For Educators', action: 'video', label: me.find('p').text().trim() })
  })

  // Glossary page - as seen in links
  $('.glossaryTerm a').on('click', function (e) {
    var me = $(this)
    var term = me.closest('.glossaryTerm')
    trackThis({ category: 'Glossary page as seen in link', action: 'Term: ' + term.find('.glossaryTerm__term').text().trim(), label: 'To Article: ' + me.text().trim() })
  })

  // Food Price Factors - Click on 1 of the 8 factors
  $('.food-prices-factor').on('click', function (e) {
    var me = $(this)
    trackThis({ category: 'Interactive Infographic View', action: 'Food Price Factor Thumbnail Clicked', label: me.text().trim() })
  })

  $('#food-price-carousel').on('slide.bs.carousel', function (e) {
    var newSlide = $(e.relatedTarget)

    trackThis({ category: 'Interactive Infographic View', action: 'Food Price Factors Carousel', label: newSlide.find('h4').text().trim() })
  })

  // Homepage promo links
  $('.section_intro a').on('click', function (e) {
    var me = $(this)
    trackThis({ category: 'Homepage Link', action: 'Section Promo', label: me.text().trim() })
  })
}
