// 手动封装一个深拷贝函数
function deepClone(source) {
  let target = source.constructor === Array ? [] : {}
  for(let key in source) {
    if(source.hasOwnProperty(key)) {
      if(source[key] && typeof source[key] === 'object') {
       target[key] = source[key].constructor === Array ? [] : {}
       target[key] = deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}