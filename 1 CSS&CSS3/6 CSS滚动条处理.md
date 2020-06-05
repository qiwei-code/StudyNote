#### CSS滚动条处理

* HTML部分
```html
  <div class="test test-1">
          <div class="scrollbar"></div>
  </div>
```

* CSS部分

```css
.test{
    width: 50px;
    height: 200px;
    overflow: auto;
    float: left;
    margin: 5px;
    border: none;
}
.scrollbar{
    width: 30px;
    height: 300px;
    margin: 0 auto;
 
}
.test-1::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
}
.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
}
```

* 在其他浏览器隐藏滚动条

  ```css
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ```

  