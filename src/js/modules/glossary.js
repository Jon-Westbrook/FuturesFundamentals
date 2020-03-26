import $ from 'jquery'
import Cookie from 'js-cookie'

import trackThis from '../util/trackThis'

$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined
}

export default () => {
  glossary()

  // return bug logic
  var cookieVal = Cookie('glossary_cookie')

  if ($('.glossary__term').length) {
    $('.glossary__term').on('click', function (e) {
      $('.glossary__term').removeClass('attention')
      Cookie('glossary_cookie', 'true', { path: '/' })
    })
  }

  function checkCookie () {
    if (cookieVal == null) {
    } else {
      $('.glossary__term').removeClass('attention')
    }
  }

  checkCookie()

  $(window).resize(function () {
    $('.glossary-item-mobile').html('')
  })
}

function glossary () {
  var glossaryJsonURL = '/assets/json/glossary.json'
  // let glossary
  let dataJ

  $.ajax({
    url: glossaryJsonURL,
    async: false,
    dataType: 'json',
    success: function (data) {
      dataJ = data
      return dataJ
    }
  })

  // glossary = dataJ

  function findGlossaryTerm (theTerm) {
    theTerm = theTerm.toLowerCase()

    var validTerm = false

    $(dataJ).each(function (i, el) {
      if (theTerm === el.term.toLowerCase() || theTerm === el.term + 's'.toLowerCase()) {
        validTerm = el
        return false
      }
    })

    if (!validTerm) {
      console.log('Glossary term not found: ' + theTerm)
      console.log(dataJ)
      // debugger
    }

    return validTerm
  }

  if ($(window).width() > 991 && $('.glossary__term').length) {
    $('.glossary__term:first').addClass('active')

    let term
    if ($('.glossary__term.active').hasAttr('data-term')) {
      term = $('.glossary__term.active').attr('data-term')
    } else {
      term = $('.glossary__term.active').html()
    }

    var definition = findGlossaryTerm(term)

    // def = arraySearch(glossaryTitleDefArray,term)
    // slug = arraySearch(glossaryTitleSlugArray,term)
    const defContainer = $('.glossary__term.active').parents('.row').find('.glossary-container')

    defContainer.closest('.row').addClass('glossary-container-has-term')
    defContainer.html(
      "<div class='glossary-inner'><div class='glossary-title'>" + definition.term + ': </div>' +
            "<div class='glossary-def'>" + definition.definition + "</div><a class='glossary-cta' href='/glossary#" + definition.slug + "'>View in Glossary</a></div>"
    )

    const defPosInit = $('.glossary__term.active').offset()
    const defPosInnerInit = $('.glossary__term.active').position()

    $('.glossary-container')
      .css({
        top: defPosInnerInit.top
      })

    setTimeout(function () {
      var defContainerBot = defPosInit.top + defContainer.outerHeight(true)
      var fullWidthModule = $('.glossary__term.active').parents('.row').next('.full-width')
      var fullWidthModuleTop = fullWidthModule.offset()
      var bodyContainer = $('.glossary__term.active').parents('.cf-content')
      var bodyContainerBot = bodyContainer.offset().top + bodyContainer.outerHeight(true)

      if (typeof fullWidthModuleTop !== 'undefined' && defContainerBot > fullWidthModuleTop.top) {
        fullWidthModule.css('padding-top', (defContainerBot - fullWidthModuleTop.top - 10) + 'px')
      } else if (defContainerBot > bodyContainerBot) {
        $('.cf-content').css('margin-bottom', (defContainerBot - bodyContainerBot - 80) + 'px')
      }
    }, 300)
  } else if ($(window).width() < 992 && $('.glossary__term').length) {
    $('.glossary__term:first').addClass('attention')
  }

  $('.glossary__term').on('click', function (e) {
    // this is a giant mess need to clean this up considerably
    $('.glossary__term').removeClass('attention')
    $('.full-width').css('padding-top', '0')
    $('.full-width').removeClass('pushed-down')
    $('.cf-content').css('margin-bottom', '0')

    if ($(window).width() < 992) {
      setTimeout(function () {
        $('body').addClass('tooltip-open')
      }, 800)
    }

    if ($(this).hasClass('active')) {
      $('.glossary__term.active').removeClass('active')
      $('.glossary-container').html('')
      $('.glossary-item-mobile').html('')
      $('.glossary-container-has-term').addClass('glossary-container-has-term')
      $('body').removeClass('tooltip-open')
    } else {
      $('.glossary__term.active').removeClass('active')
      $(this).addClass('active')

      let term
      if ($('.glossary__term.active').hasAttr('data-term')) {
        term = $(this).attr('data-term')
      } else {
        term = $(this).html()
      }

      trackThis({ category: 'Glossary Link', action: 'show definition', label: term })

      var definition = findGlossaryTerm(term)

      var defPos = $(this).offset()
      var parentPos = $('.cf-content').offset()
      var defInnerPos = $(this).position()
      var container = $(this).parents('.row')
      // var containerHeight = container.outerHeight(true)
      var defContainer = $(this).parents('.row').find('.glossary-container')

      if ($(window).width() < 992) {
        $('.glossary-item-mobile').remove()
        $(this).parents('.cf-content').append('<span class="glossary-item-mobile"></span>')
        defContainer = $('.glossary-item-mobile')
      }

      $('.glossary-container').html('')
      $('.glossary-item-mobile').html('')

      container.addClass('glossary-container-has-term')

      defContainer
        .html(
          "<span class='glossary-caret'></span><div class='glossary-inner'><div class='glossary-title'>" + definition.term + ': </div>' +
          "<div class='glossary-def'>" + definition.definition + "</div><a href='/glossary#" + definition.slug + "'>View in Glossary</a></div><div class='tooltip-overlay'></div>"
        )

      var defContainerBot = defPos.top + defContainer.outerHeight(true)
      var fullWidthModule = $(this).parents('.row').next('.full-width')
      var fullWidthModuleTop = fullWidthModule.offset()
      var defContainerRight = defPos.left + defContainer.find('.glossary-inner').outerWidth(true)
      var bodyContainer = $('.glossary__term.active').parents('.cf-content')
      var bodyContainerBot = bodyContainer.offset().top + bodyContainer.outerHeight(true)

      const glossaryTop = defInnerPos.top

      if ($(window).width() > 991) {
        defContainer
          .css('top', glossaryTop)

        if (typeof fullWidthModuleTop !== 'undefined' && defContainerBot > fullWidthModuleTop.top) {
          fullWidthModule.css('padding-top', (defContainerBot - fullWidthModuleTop.top - 10) + 'px')
          fullWidthModule.addClass('pushed-down')
        } else {
          fullWidthModule.css('padding-top', '0')
        }

        if (defContainerBot > bodyContainerBot) {
          $('.cf-content').css('margin-bottom', (defContainerBot - bodyContainerBot - 10) + 'px')
        } else {
          $('.cf-content').css('margin-bottom', '0')
        }
      } else if ($(window).width() < 992) {
        $('body').addClass('tooltip-open')
        let glossaryLeft
        let glossaryAdjust
        let caretAdjust
        let widthOffset

        if (defContainerRight > $(window).width()) {
          if (defPos.left < 315) {
            glossaryLeft = '50%'
            glossaryAdjust = '-50%'
            caretAdjust = 0
          } else if ($(window).width() > 767) {
            widthOffset = ($(window).width() - 750) / 2
            glossaryLeft = (defPos.left + $(this).outerWidth()) - (defContainer.find('.glossary-inner').outerWidth(true)) - widthOffset
            glossaryAdjust = 0
            caretAdjust = widthOffset
          } else {
            glossaryLeft = (defPos.left + $(this).outerWidth()) - (defContainer.find('.glossary-inner').outerWidth(true))
            glossaryAdjust = 0
            caretAdjust = 0
          }
        } else {
          if ($(window).width() > 767) {
            widthOffset = ($(window).width() - 750) / 2
            glossaryLeft = defPos.left - widthOffset
            glossaryAdjust = 0
            caretAdjust = widthOffset
          } else {
            glossaryLeft = defPos.left
            glossaryAdjust = 0
            caretAdjust = 0
          }
        }

        defContainer
          .find('.glossary-inner')
          .css({
            top: defPos.top - parentPos.top + $(this).outerHeight() + 5,
            left: glossaryLeft,
            transform: 'translateX(' + glossaryAdjust + ')'
          })
          .animate({ marginTop: '15px' }, 800)

        defContainer
          .find('.glossary-caret')
          .css({
            top: defPos.top - parentPos.top + $(this).outerHeight() + 5,
            left: defPos.left + ($(this).outerWidth(true) / 2) - caretAdjust,
            transform: 'translateX(-50%)'
          })
          .animate({ marginTop: '0' }, 800)
      }
    }

    $('.tooltip-overlay').on('click', function (e) {
      $('.glossary__term.active').removeClass('active')
      $('.glossary-container').html('')
      $('.glossary-item-mobile').html('')
      $('.glossary-container-has-term').addClass('glossary-container-has-term')
      $('body').removeClass('tooltip-open')
    })
  })
}

// function arraySearch (arr, val) {
//   let scrollId

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].key === val) {
//       scrollId = arr[i].value
//       return scrollId
//     }
//   }

//   return false
// }
