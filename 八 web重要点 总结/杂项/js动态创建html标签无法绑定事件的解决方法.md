## js动态创建html标签无法绑定事件的解决方法

在前端页面的时候，会经常遇到用JavaScript动态创建出来的Button按钮或其他标签无法使用点击事件的问题。如下代码，使用jquery在body中动态创建一个class为demo的Button按钮，当点击这个按钮时无法触发点击事件。

```html
<script>
$(function(){
  $("body").html("<button class='demo'>按钮</button>");
  // 无法触发事件
  $(".demo").click(function(){
      alert("弹窗");
  });
});
</script>
<body></body>

<!-- 解决办法：将以上代码中的 $(“.demo”).click(function(){………}); 
修改为 $(document).on(“click”,”.demo”,function(){………})即可 -->

<script>
$(function(){
  $("body").html("<button class='demo'>按钮</button>");
  // 此时 事件冒泡到document对象上，当检测事件的target，如果与传入的选择符（这里是selector）匹配，就触发事件，否则不触发。
  $(document).on("click",".demo",function(){
      alert("弹窗");
  });
});
</script>
<body></body>
```

