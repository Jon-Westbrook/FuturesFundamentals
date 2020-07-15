const nav = require('./nav')
const footer = require('./footer')
const resourceCards = require('./resource-cards')

module.exports = {
  nav,
  footer,
  resourceCards,

  // Site settings
  url: 'https://futuresfundamentals.org/',
  title: 'Futures Fundamentals',
  email: 'info@vsapartners.com',
  description: 'A one-stop educational resource designed to explain the role of futures markets in everyday life and provide information on the derivatives industry as a whole.',

  // Google webmaster tools
  google_verify: 'google2d5c2611c2c87360.html',
  google_analytics: null,

  // https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
  bing_verify: null,

  // Contact form:
  // - static : pass through formspree.io to validate email sending
  // - disqus : replace contact form by disqus thread
  // - comment the line below if you want to stick with the default PHP contact form
  contact: 'static'

  // Credits content
  // credits: 'Freelancer is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.'
}
