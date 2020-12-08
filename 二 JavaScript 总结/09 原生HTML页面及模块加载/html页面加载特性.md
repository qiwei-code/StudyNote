## HTML页面加载特性

浏览器对于`Javascript`的运行如下特性：

1. 载入后马上执行

2. 执行时会阻塞页面后续的内容（包括页面的渲染、其它资源的下载）

3. 多个`js`文件引入，这些`js`文件被被串行地载入，并依次执行

4. 浏览器一般不会并行下载`CSS`并行下载`js`，是因为`js`特殊性造成的

   **注意：**

   由于`js`文件引入会阻塞，所以如果在`<head></head>`引入，此时`dom`结构还未产生，`js`操作`dom`节点就会报错。所以很多网站通常把`js`文件最后引入，或者在`js`中采用`window.onload`或`document ready`之类的事件（采用`document.write`方式同样会阻塞）

解决`js`阻塞问题：

1. 对于IE可以使用defer标签`<script defer type="text/javascript" src="./alert.js" ></script>`defer标签会让IE并行下载`js`文件，并且把其执行hold到了整个`DOM`装载完毕`DOMContentLoaded`，多个`defer`的<script>在执行时也会按照其出现的顺序来运行。最重要的是<script>被加上defer后，其不会阻塞后续`DOM`的的渲染。defer只是IE专用

2. `HTML5`中可以使用`async`，但是`async`加载后`js`还是会立马执行，所以很难控制

3. 动态创建`DOM`这是一般框架使用的方式

   ```js
   function loadjs(script_filename) {
       var script = document.createElement('script');
       script.setAttribute('type', 'text/javascript');
       script.setAttribute('src', script_filename);
       script.setAttribute('id', 'coolshell_script_id');
       script_id = document.getElementById('coolshell_script_id');
       if(script_id){
           document.getElementsByTagName('head')[0].removeChild(script_id);
       }
       document.getElementsByTagName('head')[0].appendChild(script);
   }
   var script = 'https://coolshell.cn/asyncjs/alert.js';
   loadjs(script);
   /* 也可以使用如下方式动态加载，即需要的时候执行上面的方法 */
   window.load = loadjs("https://coolshell.cn/asyncjs/alert.js")
   <p style="cursor: pointer" onclick="LoadJS()">Click to load alert.js </p>
   
   ```

   