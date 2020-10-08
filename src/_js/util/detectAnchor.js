import $ from 'jquery'

export default () => {
  function jumpToAnchor () {
    var url = window.location.href
    var i = url.indexOf('#')
    var hash = (i !== -1) ? url.substring(i) : null
    if (hash) {
      var anchorID = hash.substring(1)
      document.getElementById(anchorID).scrollIntoView()
    } else {
      console.log('No anchor in URL')
    }
  }

  $(document).ready(function () {
    jumpToAnchor()
  })
}
