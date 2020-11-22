## web文档就绪后再执行代码的几种写法

#### 1. 纯js的写法

```js
// js 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行
window.onload = function() {
	// 执行代码
  ...
}
```

#### 2. jQuery中的写法

```js
// jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行
$(document).ready(function() {
  // 执行代码
  ...
})
// 也可以使用简写方式
$(function() {
  
})
```



