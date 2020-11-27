## `js`事件委托（事件代理）

#### 一 什么是事件委托？

事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

事件委托是利用事件的冒泡原理来实现的，我们给最外面的`div`加点击事件，那么里面的`ul`，`li`，`a`做点击事件的时候，都会冒泡到最外层的`div`上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。



#### 事件委托实现

```html
<ul id="ul1">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
</ul>
```

常规方法，循环给每个`li`标签添加事件

```js
window.onload = function(){
    var oUl = document.getElementById("ul1");
    var aLi = oUl.getElementsByTagName('li');
    for(var i=0;i<aLi.length;i++){
        aLi[i].onclick = function(){
            alert(123);
        }
    }
}
```

这样效率低，资源消耗大，通过事件委托

```js
window.onload = function(){
　　var oUl = document.getElementById("ul1");
　　oUl.onclick = function(ev){
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
　　　　if(target.nodeName.toLowerCase() == 'li'){
          alert(123);
          alert(target.innerHTML);
　　　　}
　　}
}
```

















