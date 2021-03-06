// 模拟实现apply关键字
Function.prototype._apply = function apply(thisArg, args) {
  if (typeof this !== 'function') {
    throw new TypeError(this + ' is not a funtion')
  }
  if (typeof args === 'undefined' || args === null) {
    args = []
  }
  if (args !== new Object(args)) {
    throw new TypeError("obj必须是一个对象")
  }
  if (typeof thisArg === 'undefined' || thisArg === null) {
    thisArg = getGlobleObj()
  }
  let __fn = '__fn'
  // 缓存obj可能存在的__fn属性
  let origenFu = thisArg[__fn]
  let hasOrigenFu = thisArg.hasOwnProperty(__fn)
  // 覆盖
  thisArg[__fn] = this
  // 使用数组的结构可以直接使用下面这种方式执行
  // let result = thisArg[__fn](...args)
  // 如果不使用数组结构，需要使用下面这样的方式
  let code = getGenerateFnCode(args.length)
  let result = (new Function(code))(thisArg, __fn, args)
  // 还原
  if (hasOrigenFu) {
    thisArg[__fn] = origenFu
  }
  return result
}

// 基于模拟apply实现模拟call
Function.prototype._call = function call(thisArg) {
  let args = [].slice._apply(arguments, [1])
  this.apply(thisArg, args)
}



// 全局对象，这里指window
function getGlobleObj() {
  return this
}

// // 参数解析函数模拟“解构”符号'...'
function getGenerateFnCode(argsLength) {
  let code = "return arguments[0][arguments[1]]("
  for (let i = 0; i < argsLength; i++) {
    if (i > 0) code += ','
    code += `arguments[2][${i}]`
  }
  code += ')'
  return code
}