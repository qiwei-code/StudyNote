## 复制内容到剪切板的js写法

```js
// 复制内容至剪切板

  copytest(event) {

   let copy = document.createElement("input");

   copy.value = event.target.innerText;

   document.body.appendChild(copy);

   copy.select();

   document.execCommand("copy");

   copy.style.display = "none";

   // this.$message.success("内容已复制到剪切板");

  }
```

