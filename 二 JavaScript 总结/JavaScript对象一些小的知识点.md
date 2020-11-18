## JavaScript对象一些小的知识点

#### finedBase64 相关的方法</span>

* btoa()：任意值转为 Base64 编码

* atob()：Base64 编码转为原来的值

#### 这两个方法不适合非 ASCII 码的字符，会报错

非`ASCII 码`字符转为 `Base64` 编码，必须中间插入一个转码环节，再使用这两个方法

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') 					// "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE')	// "你好"
```

#### 4. js对象

**键名**

* 对象的所有键名都是**字符串**（ES6 又引入了 Symbol 值也可以作为键名）,
* 所以键名**可以加、也可以不加引号**

**首行大括号，是表达式还是语句？**

如果行首是一个大括号，它到底是表达式还是语句？
```{ foo: 123 }```
为了避免歧义，JavaScript 引擎的做法是，无法确定是对象还是代码块，一律解释为代码块。

**如果要解释为对象，最好在大括号前加上圆括号**

```javascript
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```
这种差异在`eval`语句（作用是对字符串求值）中反映得最明显。
```javascript
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
```
上面代码中，如果没有圆括号，`eval`将其理解为一个代码块；加上圆括号以后，就理解成一个对象。

##### 4.1 查看所有的键`Object.keys()`

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

##### [4.2 属性删除`delete`](https://wangdoc.com/javascript/types/object.html#属性的删除：delete-命令)

```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```
删除一个不存在的属性，delete不报错，而且返回true，详细点击上面链接

##### 4.3 判断某个属性是否存在`in `运算符（继承的也算）

```js
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
```

这时，可以使用对象的`hasOwnProperty`方法判断一下，是否为对象自身的属性。

```js
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

##### 4.4 属性的遍历 `for...in` 循环

- 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。
例：遍历自身属性
```js
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
```
#### <span id='5'> 5. [with语句(语义不明确，尽量少使用)](https://wangdoc.com/javascript/types/object.html#with-语句) </span>

作用是操作同一个对象的多个属性时，提供一些书写的方便
```js
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

#### <span id='6'> 6. 自定义错误（Error）对象</span>

```js
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
```

上面代码自定义一个错误对象`UserError`，让它继承`Error`对象。然后，就可以生成这种自定义类型的错误了。

```js
new UserError('这是自定义的错误！');
```