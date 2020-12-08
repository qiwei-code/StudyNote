## form表单验证

第一种方式
```html
<!-- 在onsubmit返回一个方法，方法返回false验证不通过，返回true验证通过 -->
<form action="http://baidu.com" method="POST" onsubmit="return validata(this)">
    姓名：<input type="text" name="name">
    年龄：<input type="text" name="age">
    性别：
    <!-- label的两种使用方法 -->
    <label for="">男</label>
    <input type="radio" name="sex" id="male" value="male">
    <label for="female">
        女<input type="radio" name="sex" id="female" value="female">
    </label>
    <select name="city" id="ccity">
        <option value="成都">成都</option>
        <option value="重庆">重庆</option>
        <option value="武汉">武汉</option>
        <option value="上海" selected>上海</option>
        <option value="北京">北京</option>
    </select>
    <input type="submit" name="submits" value="登录">
</form>

<script>
  function validata(form) {
    // 这个form传过来的是整个form节点
    console.log(form.city.value)
    // 对传过来的值进行验证,如：
    if(form.sex.value === "male") {
      return true
    }
    return false  // return false可以阻断提交
  }
</script>
```
第二种方式
```html
<!-- 在onsubmit返回一个方法，方法返回false验证不通过，返回true验证通过 -->
<form action="http://baidu.com" method="POST" name="formdd" >
    姓名：<input type="text" name="name">
    年龄：<input type="text" name="age">
    性别：
    <!-- label的两种使用方法 -->
    <label for="">男</label>
    <input type="radio" name="sex" id="male" value="male">
    <label for="female">
        女<input type="radio" name="sex" id="female" value="female">
    </label>
    <select name="city" id="ccity">
        <option value="成都">成都</option>
        <option value="重庆">重庆</option>
        <option value="武汉">武汉</option>
        <option value="上海" selected>上海</option>
        <option value="北京">北京</option>
    </select>
    <!-- 如果form没有onsubmit标签也可以使用如下方式实现提交验证	-->
	<input type="button" name="submit1" value="提交" onclick="return validata(this.form)">
</form>

<script>
  function validata(form) {
    // 这个form传过来的是整个form节点
    console.log(form.city.value)
    // 对传过来的值进行验证,如：
    if(form.sex.value === "male") {
        document.formdd.submit()
    }
  }
</script>
```

