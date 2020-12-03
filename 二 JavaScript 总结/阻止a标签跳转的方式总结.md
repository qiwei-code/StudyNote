## 阻止`a`标签跳转的方法总结

#### 1. 最常见的，也是最常用的方法

```html
<a href="#"></a>
```

**但是这种a标签会在页面比较长的时候回到页面顶部****



#### 2. `onclick`事件返回`false`

```html
<a href="#"  onclick="return false" ></a>
```



#### 3. `onclick`事件中`event`对象调用`preventDefault()`方法

```html
<a href="#"  onclick="preventDo()" ></a>

<sript>
	function preventDo() {
  	let event = event || window.event
  	event.preventDefault()
  }
</sript>

<!-- 或者 -->

<a href="" id='preventA'></a>

<script>
	let a = document.getElementById('preventA')
  a.addEventListener('click', function(event) {
    event.preventDefault()
  }, false)
</script>
```



#### 4.  用`href=”javascript:void(0)”`伪协议,不建议使用（既不返回页面顶部，也不重新加载页面）

`a `标签的 `href `标签属性的属性值为以` javascript: `开头 且` javascript: `后面的代码没有返回任何东西 或者 返回为 `undefined `、 `null `、 `void `或者 `void表达式`

```html
<a href="javascript:void(0)" ></a>

<!-- 还有如下表达式，都可以 -->
<a href="javascript:"></a> 
<a href="javascript:undefined"></a>
<a href="javascript:null"></a>
<a href="javascript:void"></a>
<a href="javascript:undefined"></a>
<a href="javascript:void()"></a>
```



## 采用如下方式 `a `标签会触发重新加载当前的页面

1. `a`标签没有 `href `标签属性，如: `<a></a>；`
2. `a`标签有 `href `标签属性，但 `href `标签属性没有值，如: `<a href></a>；`
3. `a` 标签的 `href `标签属性的属性值为空字符 “” 或 只有空格的字符串 " "，如: `<a href=""></a> 、 <a href=" "></a>；`
4. `a` 标签的 `href `标签属性的属性值为以 ? 开头的字符串，如: `<a href="?"></a> 、 <a href="?任意字符串"></a>；`