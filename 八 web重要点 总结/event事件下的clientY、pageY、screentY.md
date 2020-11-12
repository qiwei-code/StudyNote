## event事件下的clientY、pageY、screentY代表的意义

`clientY`指浏览器顶部底边到鼠标点击位置，不计算滚动轴位置

`pageY`浏览器顶部底边到鼠标位置，计算滚动轴隐藏掉的位置

`screentY`屏幕顶部到鼠标点击的问题

示例：

```js
var parent = document.getElementById("parent")
parent.addEventListener('click', function() {
    alert('parent')
})
child.addEventListener('click', function() {
    alert('child')
    event.stopPropagation()
})
var gaodu = document.getElementById('gaodu')
gaodu.addEventListener('click', function(event) {
    alert('clientY' + event.clientY + ';pageY:' + event.pageY + ';screenY' + event.screenY)
})
```

