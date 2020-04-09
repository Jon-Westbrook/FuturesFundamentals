var handlebars = require('handlebars')

module.exports = function (string, match, replacement) {
  return new handlebars.SafeString(
    (string instanceof handlebars.SafeString ? string.string : string)
    .replace(match, replacement)
  )
}
