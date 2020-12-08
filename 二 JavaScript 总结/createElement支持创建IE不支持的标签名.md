## document.createElement支持创建IE不支持的标签名（此为IE6到IE8中著名的heck）

HTML5在ie低版本中不执行，但是通过js创建标签之后便可以执行



```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>html5shiv</title>
    <style>
        /*html5*/
        article {
            font-size: 40px;
            color: red;
        }
    </style>
    <script> 
        (function() {
            if (! /*@cc_on!@*/0) return;
	var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
            var i = e.length;
            while (i--){ document.createElement(e[i]);  }//不用装填
        })();
    </script>
</head>
<body>
    <article>  You are my sunshine. </article>
</body>
</html>
```



