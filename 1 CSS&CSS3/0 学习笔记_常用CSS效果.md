## CSS常用效果

#### CSS布局

1. `display: relative`，元素相对于自身定位，不会自身原有的位置会被保留，不会被其它元素占据

2. `display: absolute`，相对于最近的`relatvie`定位，**会脱离文档流**

3. `display: fixed`，相对于浏览器定位，**会脱离文档流**

   **注意：**定位为`relative`，`absolute`，`fixed`的元素可以使用`z-index`，`float`元素浮动**会脱离文档流，但是不脱离文本流**

4. `display: inline-block`，父级采用`inlin-block`布局子元素会有间隙，在父元素上设立`font-size: 0`可以解决，在子元素上面需要把font-size设回来

5. `display: table`

   | `table`              | （类似 <table>）此元素会作为块级表格来显示，表格前后带有换行符。 |
   | -------------------- | ------------------------------------------------------------ |
   | `inline-table`       | （类似 <table>）此元素会作为内联表格来显示，表格前后没有换行符。 |
   | `table-row-group`    | （类似 <tbody>）此元素会作为一个或多个行的分组来显示。       |
   | `table-header-group` | （类似 <thead>）此元素会作为一个或多个行的分组来显示。       |
   | `table-footer-group` | （类似 <tfoot>）此元素会作为一个或多个行的分组来显示。       |
   | `table-row`          | （类似 <tr>）此元素会作为一个表格行显示。                    |
   | `table-column-group` | （类似 <colgroup>）此元素会作为一个或多个列的分组来显示。    |
   | `table-column`       | （类似 <col>）此元素会作为一个单元格列显示。                 |
   | `table-cell`         | （类似 <td> 和 <th>）此元素会作为一个表格单元格显示。        |
   | `table-caption`      | （类似 <caption>）此元素会作为一个表格标题显示。             |

6. 响应式布局主要方法：

   1）rem

   2）viewport，在移动端加上

   * `<meta name="viewport" content="width=device-width, initial-scale=1.0">`动态适配屏幕大小，字体大小不会变
   * 也可以固定宽度`<meta name="viewport" content="320">`，文字大小会根据设备被缩小或者放大

   

   3）media query



#### CSS效果属性

1. `box-shadow`，

   * `box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, .6) inset;`
   * 第三个参数是阴影大小，第四个参数是扩展（**扩展是实心的，类似于边框，可选参数，同outline一样不占空间**）
   * 可用通过投影画图方式为（通过无数投影画图）
     
     * ```css
       box-shadow: 50px 60px 0 80px #fff, 
       			50px 40px 0 -1px #fff,
     				30px 50px 0 10px #fff,
       			20px 60px 0 20px #fff,
       			45px 60px 0 30px #fff;
       ```
   
2. `text-shadow`,

   * `text-shadow: 5px 5px 5px #FF0000;`

| 值         | 描述                             | 测试                                                         |
| :--------- | :------------------------------- | :----------------------------------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。 | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow) |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。 | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow) |
| *blur*     | 可选。模糊的距离。               | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow&p=11) |
| *color*    | 可选。阴影的颜色。               | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow&p=13) |

3. `border-radius`,
   * `border-radius: 10px 10px 20px 20px;`正常写法
   * `border-radius: 10px 10px 20px 20px / 30px 20px 10px 30px;`长轴/短轴的写法

4. `background`,

   | 值                                                           | 说明                                      |
   | :----------------------------------------------------------- | :---------------------------------------- |
   | [linear-gradient()](https://www.runoob.com/cssref/func-linear-gradient.html) | 创建一个线性渐变的 "图像"(从上到下)       |
   | [radial-gradient()](https://www.runoob.com/cssref/func-radial-gradient.html) | 用径向渐变创建 "图像"。 (center to edges) |
   | [repeating-linear-gradient()](https://www.runoob.com/cssref/func-repeating-linear-gradient.html) | 创建重复的线性渐变 "图像"。               |
   | [repeating-radial-gradient()](https://www.runoob.com/cssref/func-repeating-radial-gradient.html) | 创建重复的径向渐变 "图像"                 |

5. `clip-path`,根据节点裁剪

   

6. `transform`,

   ```css
   /*要使用3d效果必须添加这两个属性*/
   transform-style: preserve-3d;
   perspective: 500;
   ```

7. `outline`可拆分成`outline-width`，`outline-style`，`outline-color`


8. calc()函数


