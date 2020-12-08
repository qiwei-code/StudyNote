
// 复制内容至剪切板

function copytest(event) {
  let event = event || window.event
  // 创建一个input框
  let copy = document.createElement("input");
  copy.value = event.target.innerText;
  document.body.appendChild(copy);
  copy.select();
  document.execCommand("copy");
  copy.style.display = "none";
  // this.$message.success("内容已复制到剪切板");

}

// 还可参考地址： https://wangdoc.com/javascript/dom/document.html#documentexeccommand%EF%BC%8Cdocumentquerycommandsupported%EF%BC%8Cdocumentquerycommandenabled