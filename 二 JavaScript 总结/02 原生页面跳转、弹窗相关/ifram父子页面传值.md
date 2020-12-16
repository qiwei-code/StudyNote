## 使用`iframe`时的页面间传值

#### 1. 子页面向父页面传值

```html
/*father.html*/

/*引入jQuery*/
<script language="javascript" src="http://www.aspbc.com/js/jquery.js" type="text/javascript"></script> 
<script type="text/javascript"> 
    function fatherFun(data) { 
        alert('这是父页面中的函数弹出窗口哦！' + data); 
    } 
</script>
<div id="messagediv">test</div> 
<iframe id="son" name="son" src="son.html" width="400" height="200"></iframe>
```

```html
/*son.html*/

<script type="text/javascript"> 
    // 调用父页面函数 
    function sonFun() {     
        $(window.parent.fatherFun('son data'));  
    } 
    // 直接给父页面元素赋值
    function somFun_test() {
        (window.parent.("#messagediv").html("子页面赋过来的值")); 
    }
</script> 
<input name="测试按钮" type="button" onclick="sonFun()" value="调用父页面中的函数" />

```

#### 2. 父页面向子页面传值

```html
/*father.html*/

/*给子页面传入数据*/
<script type="text/javascript"> 
    // 通过子页面调用父页面方法，父页面方法返回一个值实现
    function toChildValue(){
        var txt = '这是父页面给子页面的数据';
        return txt;
    }
</script>
```

```html
/*son.html*/

// 子页面主动获取
<script type="text/javascript"> 
    // 获取父页面传来的数据
    var getParentVule = window.parent.toChildValue();
    console.log(getParentVule)
</script>
```

#### 3.父页面主动给子页面传值

```html
/*father.html*/

<script language="javascript" src="http://www.aspbc.com/js/jquery.js" type="text/javascript"></script> 
<script type="text/javascript"> 
function faterFun() 
{ 
    $('#son').contents().find("#b").val("父页面传的值！");  // 建议传给子页面的input触发onchange事件从而立即调用
} 
</script> 
<iframe id="son" name="son" src="son.html" width="400" height="200"></iframe><br /> 
<input type="button" value="给子页面表单中id为b的文本框赋值" onclick="faterFun()" /> 
```

```html
/*son.html*/

<form name="form2"><input type="text" name="b" id="b" /></form>
```

