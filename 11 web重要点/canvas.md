## canvas详情

#### canvas基本用法

```html
<!-- 创建canvas标签 -->
<canvas id="canvas" width="800" height="500">你的浏览器不支持canvas</canvas>
<script>
	var canvas = document.getElementById('canvas');		// 获取元素
  var context = canvas.getContext('2d');		// 获取绘图环境
</script>
```



