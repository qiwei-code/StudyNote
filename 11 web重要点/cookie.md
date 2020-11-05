## Cookie的使用

#### cookie的作用

1. Cookie在远程**浏览器端**存储数据并以此**跟踪和识别用户**的机制
2. 从实现上说，Cookie是存储在客户端上的一小段数据，浏览器（即客户端）**通过HTTP协议和服务器端进行Cookie交互**



#### cookie的使用

1. JavaScript可以通过document.cookie 属性来创建 、读取、及删除 cookie。

   ```js
   // 创建cookie
   document.cookie="username=John Doe"
   // 添加一个过期时间
   document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT"
   // 可以使用path参数告诉cookie路径，默认为当前页面
   document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"
   
   // 读取cookie
   var x = document.cookie
   // 注意
   // 设置document.cookie并不会覆盖cookie，除非设置的name value domain path都与一个已存在cookie重复
   ```

   

#### cookie的属性

1. `name`	一个唯一确定的cookie名称，通常来讲cookie的名称是不区分大小写的

2. `value`	存储在cookie中的字符串值，最好为cookie的name和value进行url编码

3. `domain`	`cookie`对于哪个域是有效的，所有向该域发送的请求中都会包含这个cookie信息，这个值可以包含子域(如：`yq.aliyun.com`)，也可以不包含它(如：`.aliyun.com`，则对于`aliyun.com`的所有子域都有效)

4. `path`	表示这个cookie影响到的路径，浏览器跟会根据这项配置，像指定域中匹配的路径发送`cookie`

5. `expires`	失效时间，表示cookie何时应该被删除的时间戳(也就是，何时应该停止向服务器发送这个cookie)。如果不设置这个时间戳，浏览器会在页面关闭时即将删除所有cookie；不过也可以自己设置删除时间。这个值是GMT时间格式，如果客户端和服务器端时间不一致，使用expires就会存在偏差。

6. `max-age`	 与`expires`作用相同，用来告诉浏览器此`cookie`多久过期（单位是秒），而不是一个固定的时间点。正常情况下，`max-age`的优先级高于`expires`

7. `HttpOnly`	告知浏览器不允许通过脚本`document.cookie`去更改这个值，同样这个值在`document.cookie`中也不可见。但在`http`请求张仍然会携带这个`cookie`。注意这个值虽然在脚本中不可获取，但仍然在浏览器安装目录中以文件形式存在。这项设置通常在服务器端设置。

8. `secure`	 安全标志，指定后，只有在使用`SSL`链接时候才能发送到服务器，如果是http链接则不会传递该信息。就算设置了`secure `属性也并不代表他人不能看到你机器本地保存的 `cookie `信息，所以不要把重要信息放`cookie`就对了服务器端设置



服务器端通常将cookie设置在请求头里，如下

```js
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  res.setHeader('status', '200 OK');
  res.setHeader('Set-Cookie', 'isVisit=true;domain=.yourdomain.com;path=/;max-age=1000');
  res.write('Hello World');
  res.end();
}).listen(8888);
console.log('running localhost:8888')
```

