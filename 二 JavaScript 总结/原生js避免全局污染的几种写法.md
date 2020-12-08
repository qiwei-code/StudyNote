## 原生js避免全局污染的几种写法

那为了避免过多这样的冲突，以及模块之间的耦合性更低，需要减少这样的污染



* 第一种

```js
;!function() {
   let obj = {}
   obj.addFun = function() {
       ...
   }
   obj.a = 12
    
    window.mySelfObj = obj
    
}(window)
// 在外面就可以调用了
```



* 第二种

```js
// jQuery就采用了这种写法
(function() {
//  这里同上
})(window)
```

