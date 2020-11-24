// 生成随机数方法封装，这里包含n,也包含m
function randomFun(n, m, length=1) {
  let arr = []
  while(arr.length != length ) {
    arr.push(Math.floor(Math.random() * (m - n + 1) + n))
  }
  return arr.join('')
}