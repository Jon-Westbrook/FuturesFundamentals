var handlebars = require('handlebars')

module.exports = function () {
  return new handlebars.SafeString(Array.prototype.slice.call(arguments, 0, -1).reduce(function (acc, item) {
    return item === undefined ? acc : acc + item
  }, ''))
}
