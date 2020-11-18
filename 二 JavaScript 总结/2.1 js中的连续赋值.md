## js中的连续赋值

```js
// 例子一
let a = {
  n: 2
}
let b = a
a.x = a = {
  l: 2
}

console.log(a)		// {l: 2}
console.log(b)		//{n: 2, x: {l: 2}}

// 对于连续赋值，带有点号的会优先执行，其余的赋值同时执行
// 上面的赋值等价于：
let m = {l: 2}
a.x = m
a = m
```

```js
// 例子二
var a = { n: 1 }
var b = a 
a.x = a = { n: 2 }
// a = a.x = { n: 2}	根据上面的原则，交换顺序，不影响执行结果

console.log(a.x)		// undefined	
console.log(b.x)		// {n: 2}
```

