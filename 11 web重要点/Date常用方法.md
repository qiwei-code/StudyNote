## Date常用方法

```js
new Date().getTime();      		//返回当前毫秒时间戳			1552472541228
new Date().getFullYear();  		//当前年份					2019
new Date().getYear();      		//当前年份-1900的结果			119
new Date().getMonth();    		//当前月份-1的结果(0-11)       2
new Date().getDate();     	 	//当前日期(1-31) 				13（日） 
new Date().getHours();     		//当前小时(0-23) 				18（时）
new Date().getMinutes();   		//当前分钟(0-59)  			45(分)
new Date().getSeconds;     		//当前秒钟(0-59)              34(秒)
new Date().getMilliseconds();	//当前毫秒(0-999)
new Date().toLocaleString(); 	//当前日期和时间字符串     "2019/3/13 下午6:35:25"
new Date().toLocaleDateString(); 	//当前日期字符串       "2019/3/13" 
new Date().toLocaleTimeString();	//当前时间字符串       "下午6:34:22"
```

