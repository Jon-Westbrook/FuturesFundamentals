var handlebars = require('handlebars')

module.exports = function (condition, pass, fail) {
  return new handlebars.SafeString(condition ? pass : fail)
}
