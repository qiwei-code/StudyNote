## JavaScript教程复习重点





3. [escape、encodeURI和encodeURIComponent的区别](#3)







#### 1. null与undefined区别如下

```
null == undefined			//true
Number(undefined)			//NaN
Number(null)				//0
```

#### 2. Base64 相关的方法

* btoa()：任意值转为 Base64 编码

* atob()：Base64 编码转为原来的值

#### 这两个方法不适合非 ASCII 码的字符，会报错
`ASCII 码`字符转为 `Base64` 编码，必须中间插入一个转码环节，再使用这两个方法

```
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

