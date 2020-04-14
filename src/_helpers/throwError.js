module.exports = function (...args) {
  const suppliedArgs = Array.prototype.slice.call(args, 0, -1)
  throw new Error(suppliedArgs.join(''))
}
