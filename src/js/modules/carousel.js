import $ from 'jquery'

export default () => {
  carouselInit()
  quizLogic()
  foodPrices()
  protectMarket()
  animationSize()

  $('.carousel-control').on('click', function (e) {
    setTimeout(function () {
      animationSize()
    }, 800)
  })

  $(window).resize(function () {
    carouselInit()
    foodPrices()
    protectMarket()
    animationSize()
  })
}

function carouselInit () {
  // var carousel_img = $('.carousel-inner .active img').outerHeight(true),
  // controlHeight = carousel_img/2

  var carouselWidth = $(window).width()
  var controlHeight = (carouselWidth * 0.66667) / 2

  if ($(window).width() < 991) {
    $('.carousel-custom-slide .carousel-controls-container').css('top', controlHeight)
    $('.infographic .carousel-controls-container').css('top', 'initial')
  } else {
    $('.carousel-custom-slide .carousel-controls-container').css('top', '40px')
    $('.infographic .carousel-controls-container').css('top', 'initial')
  }
}

function quizLogic () {
  var shareTitle
  var shareText
  // var shareImage
  var facebookUrl
  var shareUrl = window.location.href
  var score = 0

  $('.quiz-answer a').on('click', function (e) {
    if ($(this).hasClass('correct')) {
      score++
      $('.score-holder .score').html(score)
      $('.answer-icon').removeClass('icon-incorrect')
      $('.answer-icon').addClass('icon-correct')
    } else {
      $('.answer-icon').removeClass('icon-correct')
      $('.answer-icon').addClass('icon-incorrect')
    }
  })

  $('.results').on('click', function (e) {
    $('.results-score .score').html(score)

    if (score < 4) {
      $('.restuls-message').html('Keep Learning')
      $('.results-icon').css('background-position', '50% 0px')
      shareTitle = 'I’m a Market Amateur!'
      shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow amateur—or a dynamo. "
      facebookUrl = window.location.href + 'market-amateur-share/'
    } else if (score > 5) {
      $('.restuls-message').html('Nice Job!')
      shareTitle = 'I’m a Market Dynamo!'
      shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow dynamo. "
      facebookUrl = window.location.href + 'market-dynamo-share/'
      if ($(window).width() > 991) {
        $('.results-icon').css('background-position', '50% -575px')
      } else {
        $('.results-icon').css('background-position', '50% -230px')
      }
    } else {
      $('.restuls-message').html('Not Bad!')
      $('.results-icon').css('background-position', '50% 50%')
      shareTitle = 'I’m a Market Up-and-Comer! '
      shareText = "I took the Hedger vs. Speculator quiz on FuturesFundamentals.com. Try it out for yourself, and see if you're a fellow up-and-comer—or a dynamo. "
      facebookUrl = window.location.href + 'market-comer-share/'
    }

    var facebookLink = "javascript:popupShare('http://www.facebook.com/sharer.php?u=" + facebookUrl + "',800,400)"
    var twitterLink = "javascript:popupShare('https://twitter.com/intent/tweet?status=" + shareText + shareUrl + "',800,400)"
    var linkedinLink = "javascript:popupShare('https://www.linkedin.com/shareArticle?mini=true&url=" + shareUrl + '&title=' + shareTitle + '&summary=' + shareText + "',800,400)"
    var emailLink = "javascript:popupShare('mailto:?&subject=" + shareTitle + '&body=' + shareText + ' ' + shareUrl + "',800,400)"

    $('.quiz-share-holder .fb-icon').attr('href', facebookLink)
    $('.quiz-share-holder .twitter-icon').attr('href', twitterLink)
    $('.quiz-share-holder .linkedin-icon').attr('href', linkedinLink)
    $('.quiz-share-holder .email-icon').attr('href', emailLink)
  })

  $('.retake').on('click', function (e) {
    score = 0
    $('.score-holder .score').html(score)
    $('.share-foldout').removeClass('share-open')
  })

  $('.share').on('click', function (e) {
    $('.share-foldout').addClass('share-open')
  })
}

function foodPrices () {
  // var buttonHeight = $('.food-prices-factors-mod').outerHeight(true)
  var carouselHeight = $('.fp-carousel-container').outerHeight(true)

  $('.food-prices-factor').on('click', function (e) {
    $(this).addClass('fp-flip')
    $('.fp-carousel-container').addClass('fp-opening')
    setTimeout(function () {
      $('.fp-carousel-container').addClass('fp-reveal')
      $('.food-prices-factors-mod').addClass('fp-hide')
      if ($(window).width() < 992) {
        $('#food-prices__mod').height(carouselHeight)
        $('#food-prices__mod .item').height(carouselHeight)
      }

      smoothScroll('.fp-carousel-container', 0)
    }, 200)
  })

  $('#food-price-carousel .carousel-control').on('click', function (e) {
    $('.fp-carousel-container').removeClass('fp-opening')
  })

  $('#food-price-carousel .carousel-close').on('click', function (e) {
    $('.fp-carousel-container').removeClass('fp-reveal')
    $('.food-prices-factors-mod').removeClass('fp-hide')
    if ($(window).width() < 992) {
      $('#food-prices__mod').height('auto')
    }
    setTimeout(function () {
      $('.food-prices-factor').removeClass('fp-flip')
      $('.food-prices-factor').addClass('fp-unflip')
    }, 200)
  })
}

function protectMarket () {
  $('.touch #protect_market_infographic .carousel-control').on('click', function (e) {
    if ($(window).width() < 768) {
      smoothScroll('#protect_market_infographic', -30)
    }
  })

  $('.touch #clearing_infographic .carousel-control').on('click', function (e) {
    if ($(window).width() < 768) {
      smoothScroll('#clearing_infographic', -30)
    }
  })
}

function animationSize () {
  let animWidth = $('.active .anim_container').outerWidth(true)

  if ($(window).width() < 768) {
    animWidth = $('.item.active').outerWidth(true)
  }

  var animHeight = (animWidth)
  $('.anim_inner').height(animHeight * 0.64)
  $('#protect_market_infographic .anim_inner').height(animHeight * 0.62)
  $('.trade-title_animation.anim_inner').height(animHeight * 0.30265)
}

function smoothScroll (scrollTo, scrollOffset) {
  $('html, body').animate({
    scrollTop: ($(scrollTo).offset().top) - (scrollOffset + 80)
  }, 600)
}

/* Global Functions */
window.popupShare = function (url, width, height) {
  const day = new Date()
  const id = day.getTime()
  /* eslint-disable no-eval */
  eval('page' + id + " = window.open(url, '" + id + "', 'toolbar=0,scrollbars=1,location=1,statusbar=0,menubar=0,resizable=0,width=" + width + ', height=' + height + ", left = 363, top = 144')")
  /* eslint-enable no-eval */
}
