## 使用`Object`实例方法`toString()`准确判断一个值的数据类型

**`toString()`方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。**

```js
var obj = {};
obj.toString() // "[object Object]"
```

`"[object Object]"`第二个object表示该值的构造函数

由于实例对象可能会自定义`toString()`覆盖Object实例方法，所以在这里我们使用`Object.prototype.toString()`通过函数的`call`方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型：

```js
Object.prototype.toString.call(value)
```

不同的值返回的类型如下：

- 数值：返回`[object Number]`。
- 字符串：返回`[object String]`。
- 布尔值：返回`[object Boolean]`。
- undefined：返回`[object Undefined]`。
- null：返回`[object Null]`。
- 数组：返回`[object Array]`。
- arguments 对象：返回`[object Arguments]`。
- 函数：返回`[object Function]`。
- Error 对象：返回`[object Error]`。
- Date 对象：返回`[object Date]`。
- RegExp 对象：返回`[object RegExp]`。
- 其他对象：返回`[object Object]`。

```js
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```

**封装成函数**

```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```