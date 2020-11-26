/**
 * @param {Object} thisArg
 * 模拟bind
 */
Function.prototype._bind = function bind(thisArg) {
  if(typeof this !== 'function') {
    throw new TypeError(this + 'must be a function')
  }
  let self = this
  let args = [].slice.call(arguments, 1)
  let bound = function() {
    let boundArgs = [].slice.apply(arguments)
    return self.apply(thisArg, args.concat(boundArgs))
  }
  return bound
}