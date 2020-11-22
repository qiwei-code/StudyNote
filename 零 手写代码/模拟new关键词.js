/**
 * 模拟实现new操作符
 * @param {function} constructor [构造函数]
 * @return {Object|function|Regex|Date|Error} [返回结果]
 */
function _new(constructor) {
  if(typeof constructor !== 'function') {
    throw '_new function the first param must be a function'
  }
  // 1. 创建一个空对象，作为返回的对象实例
  // 2. 将这个空对象的原型指向构造行数的prototype属性

  // ES6 new.target是指向构造函数
  _new.target = constructor
  var argsArr = [].slice.call(arguments, 1)   // _new中的参数
  var context = Object.create(constructor.prototype)
  var result = constructor.apply(context, argsArr)  // 将模拟_new中的第二个到第n个参数传给构造函数
  return (typeof result === 'object' && result != null) ? result : context
}