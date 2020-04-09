import $ from 'jquery'

export default () => {
  if ($('.cf-content').length) {
    articleSocial()

    $(window).resize(function () {
      articleSocial()
    })

    $(document).scroll(function () {
      articleSocial()
    })
  }
}

function articleSocial () {
  const $offsetTop = $('.cf-content').offset()
  const $offsetBottom = $offsetTop.top + $('.cf-content').outerHeight(true)

  var root = $('#article-social')

  if (root.length) {
    root.css('top', $offsetTop.top - 60)
  } else {
    return false
  }

  if ($(window).width() > 991) {
    if ($(window).scrollTop() > ($offsetTop.top - 80) && $(window).scrollTop() < ($offsetBottom - 416)) {
      root.removeClass('bottom-fix')
      root.addClass('sticky')
    } else if ($(window).scrollTop() > ($offsetBottom - 416)) {
      root.removeClass('sticky')
      root.addClass('bottom-fix')
    } else {
      root.removeClass('bottom-fix')
      root.removeClass('sticky')
    }
  }
}
