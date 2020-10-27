## 响应式布局中关于rem的适配方案

#### 一	移动端宽度`750px`如何转换成`rem`开发

1. 由于移动端屏幕宽度一般在`375`左右，所以开发时通常需要将整体尺寸除以`2`

2. 开发中使用`rem`，`rem`在浏览器中是相对于`html`的`font-size`进行`px`转换显示，浏览器默认`font-size`大小为`16px`，所以`1rem=16px`

3. 为了方便开发，可以在`ps`中将图像大小除以（整体尺寸已经除过`2`后）`16`，量出来的大小可直接带上`rem`（比较小的单位可能会不准确）

4. 一般也会采用将`html`的`font-size`设为`62.5%`，`（10px=62.5%*16px）`不能直接将`html`的`font-size`设为`10px`，因为浏览器最小默认字体大小为`12px`，然后将量出来的尺寸除以（整体尺寸已经除过`2`后）`10`再带上`rem`就可以了

5. 可以根据屏幕大小，使用媒体查询动态的修改`font-size`达到响应式效果

   ```css
    1 @media only screen and (min-width: 320px){
    2   html {
    3     font-size: 62.5% !important;
    4   }
    5 }
    6 @media only screen and (min-width: 640px){
    7   html {
    8     font-size: 125% !important;
    9   }
   10 }
   11 @media only screen and (min-width: 750px){
   12   html {
   13     font-size: 150% !important;
   14   }
   15 }
   16 @media only screen and (min-width: 1242px){
   17   html {
   18     font-size: 187.5% !important;
   19   }
   20 }
   ```

   也可以使用`js`代码动态改变

   ```js
   (function(){  
       change();  
       function change(){     
            /* 这里的html字体大小利用了一个简单书序公式（十字相乘），当我们默认设置以屏幕320px位基准此时的字体大小为20px(320    20px),那么浏览器窗口大小改变的时候新的html的fontSize（clientWidth  新的值）就是clientWidth*20/320 */
            document.documentElement.style.fontSize = document.documentElement.clientWidth*20/320 + 'px';  
       }    
    /* 监听窗口大小发生改变时 */
     window.addEventListener('resize',change,false);})();
   ```

   







2. 

