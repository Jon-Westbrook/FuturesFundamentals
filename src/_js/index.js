import $ from 'jquery'

// must come before imports that require jquery
// adds jquery-easing to jquery import
import './vendor/jquery-easing'

import 'bootstrap-sass'
import './vendor/modernizr'

import analytics from './modules/analytics'
import nav from './modules/nav'
import glossary from './modules/glossary'
import animations from './modules/animations'
import carousel from './modules/carousel'
import articleSocial from './modules/article-social'
import datagramAnimation from './modules/datagram-animation'
import foodPrices from './modules/food-prices'

$(document).ready(() => {
  analytics()
  nav()
  glossary()
  animations()
  carousel()
  articleSocial()
  datagramAnimation()
  foodPrices()
})
