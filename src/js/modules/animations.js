import $ from 'jquery'

import trackThis from '../util/trackThis'
import simulatorFunctions from '../util/simulator'

/**
 * Logic for animations with scroll activation
 **/

// These items are capable of using an animation. JS will look for this class. DO NOT STYLE using this selector.
var classForAnimationItems = '.scrollAnimation--capable'

// Animated items before they are activated. Use styles to show their initial state.
var classForAnimationItemsBefore = '.scrollAnimation--before'

// Class given to an animated item when it is activated.
var classForAnimationItemsDuring = '.scrollAnimation--active'

// Optionally, a class given to an animated item after the animation completes, if needed.
var classForAnimationItemsAfter = '.scrollAnimation--after'

var debuggerActivate = '.animation__debugger__activate'
var debuggerBefore = '.animation__debugger__before'
var debuggerAfter = '.animation__debugger__after'

var attributeForHighlightElements = 'data-highlight-element'

var classForAnalyticItems = '.scrollAnalyticsItem'
var attributeForAnalyticsItemCategory = 'data-analytics-category'
var attributeForAnalyticsItemAction = 'data-analytics-action'
var attributeForAnalyticsItemLabel = 'data-analytics-label'
var attributeForAnalyticsItemAlreadyActivated = 'data-analytics-activated'

var windowHeight = ($(window).height())
var scrollAnimateCanBeReset = false

export default () => {
  setupAnimationDebugger()
  setupHighlightElementsOnHover()
  setupScrollActivatedAnimation()
  setupHashSmoothScroll()
  setupRiskRanchJS()

  $(window).resize(function () {
    windowHeight = ($(window).height())
    scrollAnimate()
  }).scroll(function () {
    scrollAnimate()
  })
}

function setupRiskRanchJS () {
  $('.open-in-risk-ranch-window').on('click', function (e) {
    var width = 480
    var height = 860
    windowHeight = $(window).height()

    var left = ($(window).width() / 2) - width / 2
    var top = windowHeight / 2 - height / 2

    if (windowHeight < height) {
      var originalHeight = height
      // var originalWidth = width
      height = windowHeight - 40
      width = width * (height / originalHeight)
    }

    var windowName = 'userConsole'
    var popUp = window.open($(this).attr('href'), windowName, 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top + ', scrollbars, resizable')

    if (popUp == null || typeof (popUp) === 'undefined') {
      $('.game-message').addClass('has-error')
    } else {
      popUp.focus()
    }

    return false
  })
}

function setupHashSmoothScroll () {
  if (window.location.hash) {
    $('html,body').scrollTop(0)
    setTimeout(function () {
      var me = $("[name='" + window.location.hash.replace('#', '') + "']")
      if (me.next().offset()) {
        var scrollToPixel = me.next().offset().top - 80

        $('html,body').animate({ scrollTop: scrollToPixel }, 500)
      }
    }, 500)
  }
}

function setupScrollActivatedAnimation () {
  scrollAnimate()
}

function scrollAnimate () {
  var scrollTop = $(window).scrollTop()

  if (scrollTop < 10 && scrollAnimateCanBeReset) {
    /* DISABLING RESET FOR TESTCO
    var resetting = $(".scrollAnimation--capable")
      .not(".scrollAnimation--dontReset")
      .not(function(i,el){isScrolledIntoView(el)})
      .removeClass("scrollAnimation--after scrollAnimation--active")
      .addClass("scrollAnimation--before")

    scrollAnimateCanBeReset = false
    */
  } else {
    $(classForAnimationItems).add(classForAnalyticItems).each(function () {
      var me = $(this)
      var top = me.offset().top

      // Decide when to trigger the breakpoint
      if (me.attr('data-scrollAnimation-pixels')) {
        top = top + parseInt(me.attr('data-scrollAnimation-pixels'))
      } else if (me.outerHeight() > $(window).height() * 0.8) { // If height of module is greater than 80% of the browser window height - e.g. mobile
        top = top + ($(window).height() * 0.4) // Show when 40% of screen is covered by module
      } else {
        // Otherwise, trigger when 80% of module is visible
        top = top + (me.outerHeight() * 0.8)
      }

      if (scrollTop > (top - windowHeight)) {
        if (me.hasClass(classForAnimationItemsBefore.replace('.', ''))) {
          me.removeClass(classForAnimationItemsBefore.replace('.', '')).addClass(classForAnimationItemsDuring.replace('.', ''))
          scrollAnimateCanBeReset = true
          if (typeof simulatorFunctions[me.attr('id')] === 'function') {
            simulatorFunctions[me.attr('id')](me)
          }
        }

        if (me.attr(attributeForAnalyticsItemAlreadyActivated) !== 'yes' && me.hasClass(classForAnalyticItems.replace('.', ''))) {
          trackThis({ category: me.attr(attributeForAnalyticsItemCategory), action: me.attr(attributeForAnalyticsItemAction), label: me.attr(attributeForAnalyticsItemLabel) })
          me.attr(attributeForAnalyticsItemAlreadyActivated, 'yes')
        }
      }
    })
  }
}

function setupAnimationDebugger () {
  $(debuggerActivate).add(debuggerBefore).add(debuggerAfter).off('click').on('click', function () {
    var me = $(this)
    var container = me.closest('.module__animated-image')
    var module = container.find('.module')
    let moduleBg
    let bgColor
    // var moduleBg =  module.hasClass("module__bg") ? module : module.find(".module__bg")
    // var bgColor = moduleBg.css("background-color")

    // Flash the module to show it's activated

    setTimeout(function () { moduleBg.css('background-color', 'white') }, 0)
    setTimeout(function () { moduleBg.css('background-color', bgColor) }, 50)
    setTimeout(function () { moduleBg.css('background-color', 'white') }, 100)
    setTimeout(function () { moduleBg.css('background-color', bgColor) }, 150)
    setTimeout(function () { moduleBg.css('background-color', 'white') }, 200)
    setTimeout(function () { moduleBg.css('background-color', bgColor) }, 250)

    setTimeout(function () {
      if (me.hasClass(debuggerActivate.replace('.', ''))) { module.removeClass(classForAnimationItemsBefore.replace('.', '')).removeClass(classForAnimationItemsAfter.replace('.', '')).addClass(classForAnimationItemsDuring.replace('.', '')) }
      if (me.hasClass(debuggerBefore.replace('.', ''))) { module.removeClass(classForAnimationItemsDuring.replace('.', '')).removeClass(classForAnimationItemsAfter.replace('.', '')).addClass(classForAnimationItemsBefore.replace('.', '')) }
      if (me.hasClass(debuggerAfter.replace('.', ''))) { module.removeClass(classForAnimationItemsBefore.replace('.', '')).removeClass(classForAnimationItemsDuring.replace('.', '')).addClass(classForAnimationItemsAfter.replace('.', '')) }

      if (typeof simulatorFunctions[module.attr('id')] === 'function') {
        simulatorFunctions[module.attr('id')](module)
      }
    }, 10)

    return false
  })
}

const setupHighlightElementsOnHover = function () {
  $('[' + attributeForHighlightElements + ']').on('mouseover', function () {
    var target = $($(this).attr(attributeForHighlightElements))

    target.addClass('is-highlighted')
  }).on('mouseout', function () {
    var target = $($(this).attr(attributeForHighlightElements))
    target.removeClass('is-highlighted')
  })
  /*
  if (elements.length) {

    elements.each(function(i,el) {

      $()
      debugger
      var top = $(this).offset().top

      if ( $(window).scrollTop() > (top - height) ) {
        $(this).addClass(classForAnimationItemsDuring)
      }
    })
  } */
}

/* http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling */
// function isScrolledIntoView (elem) {
//   var $elem = $(elem)
//   var $window = $(window)

//   var docViewTop = $window.scrollTop()
//   var docViewBottom = docViewTop + $window.height()

//   var elemTop = $elem.offset().top
//   var elemBottom = elemTop + $elem.height()

//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
// }
