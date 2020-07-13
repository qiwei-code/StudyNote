## ES6的Module 语法

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`

#### 1. export命令

* es6中一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。外部获取只能通过export导出。

```js
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

或者

```js
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

* `export`命令除了输出变量，还可以输出**函数或类（class）**。

```js
export function multiply(x, y) {
  return x * y;
};
```

* `export`输出的变量就是本来的名字，但是可以**使用`as`关键字重命名**

```js
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

`export`命令规定的是对外的接口，**必须与模块内部的变量建立一一对应关系**

```js
// 报错
export 1;

// 报错
var m = 1;
export m;
```

## export default