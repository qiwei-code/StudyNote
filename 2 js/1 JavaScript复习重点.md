## JavaScript教程复习重点一



[1. null与undefined区别如下](#1)
[2. Base64 相关的方法](#2)
[3. escape、encodeURI和encodeURIComponent的区别](#3)
[4. js对象](#4)






#### <span id='1'>1. null与undefined区别如下</span>

```javascript
null == undefined			//true
Number(undefined)			//NaN
Number(null)				//0
```

#### <span id='2'>2. Base64 相关的方法</span>

* btoa()：任意值转为 Base64 编码

* atob()：Base64 编码转为原来的值

#### 这两个方法不适合非 ASCII 码的字符，会报错
`ASCII 码`字符转为 `Base64` 编码，必须中间插入一个转码环节，再使用这两个方法

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

#### <span id='3'> 3. escape、encodeURI和encodeURIComponent的区别 </span>

* `escape`是对字符串`string`进行编码,`encodeURI`和`encodeURIComponent`是对`URL`编码
* 编码之后的效果是`%XX`或者`%uXXXX`这种形式，让它们在所有电脑上可读
* `encodeURI`方法不会对下列字符编码` ASCII字母、数字、~!@#$&*()=:/,;?+'`
* `encodeURIComponent`方法不会对下列字符编码` ASCII字母、数字、~!*()'`
* `encodeURIComponent`编码范围更广，会对`http://XXX`中的`//`也编码，会导致URL不可用类似于java中的`URLEncoder.encode(str,char)`方法

#### <span id='4'> 4. js对象 </span>

**键名**
* 对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名）,所以**可以加、也可以不加引号**

**表达式还是语句？**
对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？
```{ foo: 123 }```
为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

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

**1 查看所有的键`Object.keys()`**

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

**[2 属性删除`delete`](https://wangdoc.com/javascript/types/object.html#属性的删除：delete-命令)**

```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

**3 判断某个属性是否存在**

