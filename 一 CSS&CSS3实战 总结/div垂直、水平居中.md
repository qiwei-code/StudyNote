## DIV居中

#### div水平居中

```css
/* 行内元素 */

.parent {
  text-align: center;
}

/* 块级元素 */

.son {
  margin: 0 auto;
}

/* 块元素设为行内元素再居中 */

.son{
  display:inline;
  text-align:center
}

/* flex布局 */

.parent {
  display: flex;
  justify-content: center;
}

/* 绝对定位定宽 */

.son {
  position: absolute;
  width: 宽度;
  left: 50%;
  margin-left: -0.5*宽度
}

/* 绝对定位不定宽 */

.son {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

/* left/right: 0 */

.son {
  position: absolute;
  width: 宽度;
  left: 0;
  right: 0;
  margin: 0 auto;
}
```

#### div垂直居中

```css
/* 行内元素（单行文字）*/

.parent {
  height: 高度;
}
.son {
  line-height: 高度;
}

/* table */

.parent {
 display: table;
}
.son {
 display: table-cell;
 vertical-align: middle;
}

/* flex */

.parent {
  display: flex;
  align-items: center;
}

/* 绝对定位定高 */

.son {
  position: absolute;
  top: 50%;
  height: 高度;
  margin-top: -0.5高度;
}

/* 绝对定位不定高 */

.son {
  position: absolute;
  top: 50%;
  transform: translate( 0, -50%);
}

/* top/bottom: 0; */

.son {
  position: absolute;
  height: 高度;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
```

