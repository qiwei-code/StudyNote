## `canvas`详情

#### `canvas`基本用法

```html
<!-- 创建canvas标签 -->
<canvas id="canvas" width="800" height="500">你的浏览器不支持canvas</canvas>
<script>
  var canvas = document.getElementById('canvas');		// 获取元素
  var ctx = canvas.getContext('2d');		// 获取绘图环境
  // 注意，设置canvas的宽高最好通过标签直接设置，或者通过js代码设置，不要通过css设置
  // 通过标签或js设置是绘图之前画布的宽高被确定了，然后在确定宽高的画布上面绘图，图像不会变形
  // 通过css设置是绘图完成后再改变元素的宽高，图像会变形
  // canvas.width = 800;
  // canvas.height = 500;
  
  // canvas画线，线在内存中生成
  ctx.moveTo(0, 0)	// 笔从(0, 0)开始
  ctx.lineTo(100, 100)
  ctx.lineTo(200, 100)
  ctx.strokeStyle = "#F00"	// 绘制颜色
  ctx.stroke()	// 实际绘制
  
  ctx.beginPath()	// 重新绘制，调用之后就不会重新绘制上面的图形
  ctx.moveTo(100, 0)	// 笔从(100, 0)开始
  ctx.lineTo(200, 100)
  ctx.lineTo(300, 100)
  ctx.lineWidth = "10"	// 线宽
  ctx.closePath()	// ** 闭合路径
  ctx.strokeStyle = "#0F0"	// 绘制颜色
  ctx.stroke()	// 实际绘制
  
  ctx.beginPath()	
  // 画圆
  ctx.arc(300, 300, 50, 0, 2*Math.PI, true)	// 圆心坐标、半径、弧度、顺逆时针true逆
  ctx.strokeStyle = "#000"
  ctx.stroke()
  
  // 画矩形
  ctx.strokeRect(300, 100, 200, 100)	// 分装好了的,一二个参数左上角坐标，第三四个参数为宽高，里面封装了ctx.beginPath()与ctx.stroke()
  ctx.fillRect(200, 300, 100, 100) // 填充一个矩形
  
  // 闭合图形并填充
  ctx.beginPath()	
  ctx.moveTo(0, 100)
  ctx.lineTo(100, 100)
  ctx.lineTo(100, 200)
  ctx.fill() // 闭合，然后把内部区域填充,ctx.stroke() 描边，可以同时使用
  
  // 旋转
  ctx.rotate(Math.PI / 4)	// 顺时针弧度
  //移动
  ctx.translate(100, 200)
  // 缩放
  ctx.scale(1, .5)	// x轴缩放、y轴缩放
  // 上面的效果会叠加，变换的是当前整个画布
  
  // 在最前面使用
  ctx.save()	// 保存当前环境
  // 在变换后使用
  ctx.restore()	// 从绘图堆栈中的顶端弹出 最近保存的状态，并且根据这些存储的值来设置当前绘图状态
  
  // 创建线性渐变
  let linearGradient = ctx.createLinearGradient(50, 50, 150, 150) // 创建两个点，在两个点之间拉一条直线
  linearGradient.addColorStop(0, 'rgb(255, 0, 0)')	// 从0位置
  linearGradient.addColorStop(1, 'rgb(0, 255, 0)')	// 到100%位置
  ctx.fillStyle = linearGradient
  ctx.fillRect(0, 0, 200, 200)
  
  // 创建径向渐变
  let radialGradient = ctx.createRadialGradient(400, 150, 0, 400, 150, 100) // 两个圆，第一个园坐标、半径，第二个园坐标、半径。
  radialGradient.addColorStop(0, 'rgb(255, 0, 0)')
  radialGradient.addColorStop(1, 'rgb(255, 0, 0)')
  ctx.fillStyle = radialGradient
  ctx.beginPath()
  ctx.arc(400, 150, 100, 0, Math.PI * 2, true)
  ctx.fill()
  
  // 创建画刷
  let img = new Image()
  img.src = "./xxx.png"
  img.onload = function() {
    let pattern = ctx.createPattern(img, 'repeat')	// 创建出图形画刷，海鸥no-repeat/repeat-x/repeat-y
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  
  
  // canvas中显示文字
  let str = "这是一个测试"
  ctx.font = "50px sans-serif" // 大小、字体
  // 水平对齐center/left/right
  ctx.textAlign = "center"	// 如果设置了这个属性，下面的坐标就变成了文字中间的坐标
  // 垂直对齐top/middle/bottom
  ctx.textBaseline = "top"
  ctx.fillText(str, 0, 100) // 填充文字，文字左上角坐标
  ctx.strokeText(str, 0, 200)	// 描边文字
  // 获取文本的宽度
  let width = ctx.measureText(str).width
  console.log(width, '输出文本的宽度')
  
  // canvas中绘制图片
  let img = new Image()
  img.src = "testImg.png"
  img.onload = function() {
    ctx.drawImage(img, 0, 0)	// 后面两个参数为图片绘制的位置
  }
  
  // canvas中的区域剪切，只会在剪切路径内显示
  ctx.arc(300, 100, 200, 0, Math.PI * 2, true)
  // 剪辑区域
  ctx.clip()
  ctx.fillStyle = "#f00"
  ctx.fillRect(100, 100, 200, 200)
  ctx.beginPath()	// 写了beginPath()还是会被剪切
  ctx.arc(400, 300, 100, 0, Math.PI * 2, true)
  ctx.fillStyle = "#00f"
  ctx.fill()
  
  // canvas中设置阴影
  ctx.shadowOffsetX = 100	// 阴影偏移
  ctx.shadowOffsetY = 100
  ctx.shadowColor = 'rgba(0, 0, 0, .8)'
  ctx.shadowBlur = 10	// 模糊半径
  ctx.fillStyle = 'rgba(0, 255, 0, .7)'
  ctx.fillRect(100, 100, 200, 300)
	// 设置阴影后后面都会有
  ctx.font = '100px yahei'
  ctx.fillText('测试这是', 300, 300)	// 文字内容、位置
  
  // 贝塞尔曲线绘制
  ctx.lineWidth = 6
  ctx.strokeStyle = '#0090D2'
  ctx.beginPath()
  ctx.moveTo(250, 350)	// 左边点
  ctx.quadraticCurveTo(280, 140, 400, 360)	// 中间点与右边点
  // ctx.bezierCurveTo(290, 180, 360, 100, 500, 380)	// 左上，右上，右边点
  ctx.stroke()
  
  // 清空区域内图形
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // 离屏幕技术
  // 重叠canvas
  ctx.drawImg(offCanvas, 0, 0, offCanvas.width, offCanvas.height)
  
</script>
```

