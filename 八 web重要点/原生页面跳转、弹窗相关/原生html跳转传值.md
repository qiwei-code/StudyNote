## 原生`html`间`js`跳转与传值

#### 1. 跳转

```html
/*a.html*/

<script>
    // js使用，可以实现页面跳转
    window.location.href = 'b.html';	// window.location = 'b.html'
</script>

```

#### 2. 传值

```html
/*a.html*/

<script>
	window.location.href = "https://www.google.com/search?q=hello&oq=hello"
</script>
```

```html
/*b.html*/

<script>
	var url = document.location.toString();	// 获取url
    // 然后自己封装解析函数
</script>
```



#### 3. 其他传值方法

1）通过`cookie`传值

2）通过`local Storage`传值

