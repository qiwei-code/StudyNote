## 响应式布局中关于rem的适配方案

#### 一	移动端宽度`750px`如何转换成`rem`开发（开发时直接使用rem为单位）

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




#### 二 `vue-cli3.0`结合`lib-flexible`、`px2rem`实现移动端适配（使用`px`开发后利用插件转换为`rem`）

1. 项目中安装`lib-flexible`和`postcss-px2rem`

   ```commonlisp
   npm install lib-flexible --save
   npm install postcss-px2rem --save-dev
   ```

2. 在项目的入口`main.js`文件中引入`lib-flexible`

   ```
   import 'lib-flexible'
   ```

3. 在`vue.config.js`中配置文件

   ```
   module.exports = {
       css: {
           loaderOptions: {
             postcss: {
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，建议使用37.5。
                plugins: [
                 require("postcss-px2rem")({
                   remUnit: 37.5
             })
           ]
         }
       }
   }
   ```

4. 引入三方库可能出现的问题以及解决方案

   如果引入了第三方库，以上以上配置可能会出问题，所有引入组件都变小了，原因是引入组件的`px`都被替换成了`rem`，组件中的`dpr`（设备像素比）为1，组件中的样式也是基于`dpr=1`写的，当我们的`dpr`为2时，组件就会缩小`50%`

   解决方案，首先卸载`postcss-px2rem`，安装`postcss-px2rem-exclude`

   ```
   npm  uninstall postcss-px2rem --save-dev
   npm  install postcss-px2rem-exclude --save
   ```

   然后在`postcss.config.js`中配置

   ```js
   // postcss.config.js
   
   module.exports = {
     plugins: {
       autoprefixer: {},
       "postcss-px2rem-exclude": {
         remUnit: 75,
         exclude: /node_modules|folder_name/i
       }
     }
   };
   ```

   如果没有这个文件也可以在`package.json`中配置

   ```js
   // package.json
   
   "postcss": {
       "plugins": {
         "autoprefixer": {},
         "postcss-px2rem-exclude":{
             "remUnit": 75,
             "exclude":"/node_modules|floder_name/i"
         }
       }
     },
   ```



#### 三 头部`meta`标签使用`viewport`

`viewport `是用户网页的可视区域，中文叫"视区"，一般对应如下设置

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

|    属性名     |          取值           | 描述                                                |
| :-----------: | :---------------------: | --------------------------------------------------- |
|     width     | 正整数 或 device-width  | 定义视口的宽度，单位为像素                          |
|    height     | 正整数 或 device-height | 定义视口的高度，单位为像素，一般不用                |
| initial-scale |       [0.0-10.0]        | 定义初始缩放值                                      |
| minimum-scale |       [0.0-10.0]        | 定义缩小最小比例，它必须小于或等于maximum-scale设置 |
| maximum-scale |       [0.0-10.0]        | 定义放大最大比例，它必须大于或等于minimum-scale设置 |
| user-scalable |         yes/no          | 定义是否允许用户手动缩放页面，默认值yes             |

