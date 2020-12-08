## `JS`模块加载详解

在 `ES6` 之前，社区制定了一些模块加载方案，最主要的有 `CommonJS` 和 `AMD` 两种。前者用于服务器，后者用于浏览器。`ES6` 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 `CommonJS` 和 `AMD` 规范，成为浏览器和服务器通用的模块解决方案。

#### 一 无模块加载

无模块加载就是传统的在`html`文件中通过`script`标签加载，加载后会立即执行。如：

```html
<script src="main.js"></script> 
<script src="jquery.js"></script>　
```

缺点：会污染全局变量。由于浏览器**同步加载机制**，当前面的文件如`mian.js`文件出现错误会阻断后续文件的加载与执行



#### 二  `CommonJS`规范

`CommonJS`主要用于服务器端模块加载的规范，`Node.js`使用的就是`CommonJS`规范

```js
let math = require('./math.js');
math.add(10, 20);
```

`CommonJS`加载模块也是**同步加载机制**，只有当加载完成才能执行后面的操作，所以对于浏览器这种需要在线请求文件后再加载显然不适用。

**注意：**

`Node`内部提供一个`Module`构建函数。所有模块都是`Module`的实例，模块内部都有一个`module`对象，代表当前模块。

`module.exports`属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取`module.exports`变量。



#### 三 `AMD`规范

`AMD`全称`Asynchronous Module Definition`即异步模块定义，主要用于浏览器模块开发规范，`AMD`也采用`require`关键字加载。与`CommonJS`区别：

```js
require('./math.js', callback);	// 要求两个参数

// 也可以使用define，他们有如下区别:
// define定义的模块可以被其它模块调用，require只是加载模块。
// define的回调函数需要有return语句返回模块对象，这样define定义的模块才能被其他模块引用
// require的回调函数没有return语句，所以不能被其他模块调用。
```

`AMD `是 `RequireJS `在推广过程中对模块定义的规范化产出

`AMD`异步加载模块。它的模块支持`对象 函数 构造器 字符串 JSON`等各种类型的模块。

```js
// 采用define可以被其他模块引用
define([`Module1`, `Module2`], function (Module1, Module2) {
    function foo () {
        /// someing
        Module1.test();
    }
    return {foo: foo}
});
```

`AMD`规范允许输出的模块兼容`CommonJS`规范，这时`define`方法需要写成下面这样

```js
define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");
  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();
  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});
```



#### 四 `CMD`规范

`AMD`推崇依赖前置（**在定义模块的时候就要声明其依赖的模块**），`CMD`推崇依赖就近（**只有在用到某个模块的时候再去`require`——按需加载**）

```js
define(function (requie, exports, module) {
    //依赖可以就近书写
    var a = require('./a');
    a.test();
  	...
    if (status) {
        var b = requie('./b');
        b.test();
    }
});
```



注意：

```text
同样都是异步加载模块，AMD在加载模块完成后就会执行改模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行

CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的
```



#### 五 `ES6`模块

采用`import`加载，具体参考

[ECMAScript6]:https://es6.ruanyifeng.com/#docs/module





## `module.exports`与`exports`，`export`与`export default`之间的关系和区别

#### `CommonJS`模块规范

`Node`应用由模块组成，采用`CommonJS`模块规范。根据这个规范，**每个文件就是一个模块，有自己的作用域**。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。例如：

```js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

require方法用于加载模块

```
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

为了方便，Node为每个模块提供一个`exports`变量，指向`module.exports`。这等同在每个模块头部，有一行这样的命令。

```js
var exports = module.exports;		// 我们可以直接在 exports 对象上添加方法，表示对外输出的接口，如同在module.exports上添加一样
```

**不能直接给exports赋值**，因为`Node `模块是通过 `module.exports` 导出的，如果直接将`exports`变量指向一个值，就切断了`exports`与`module.exports`的联系。

#### `ES6`模块规范

不同于`CommonJS`，`ES6`使用 `export `和 `import `来导出、导入模块。

```js
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```

`export default`导出默认项，只能有一个`export default`