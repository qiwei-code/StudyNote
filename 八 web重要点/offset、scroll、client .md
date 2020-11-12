##  offset、 scroll、client 三大系列

#### offset获取元素尺寸

`offsetWidth = width + padding + border`（不包括`margin`，左右都有`padding`和`border`）

`offsetHeight = Height + padding + border`（不包括`margin`，上下都有`padding`和`border`）

`offsetLeft`当前元素相对于其定位父元素的水平偏移量。

`offsetTop`当前元素相对于其定位父元素的垂直偏移量。（如果没有定位父元素，以`body`为准）

`offsetParent`如果当前元素的父元素，有`CSS`定位（`position`为`absolute`、`relative`、`fixed`），那么 `offsetParent `获取的是最近的那个父元素。如果没有定位父元素则获取body节点。

#### scroll

`ScrollWidth `和 `scrollHeight`：获取元素整个滚动区域的宽、高。包括 `width `和 `padding`，不包括 `border`和`margin`。

`scrollLeft `获取水平滚动条 滚动 的距离。

`scrollTop `获取垂直滚动条 滚动 的距离。

**实战经验**：

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明**垂直滚动条滚动到底了**。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明**水平滚动条滚动到底了**。

这个实战经验非常有用，可以用来判断用户是否已经将内容滑动到底了。比如说，有些场景下，希望用户能够看完“长长的活动规则”，才允许触发接下来的表单操作。

**兼容性写法**，对应的浏览器： `window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;`

（火狐/谷歌/ie9+）||（文档没有 DTD 声明chrome认识）||（如果文档有 DTD 声明IE6、7、8认识）。

`window.onscroll() `方法，当我们用鼠标滚轮，滚动网页的时候，会触发。

`window.scrollTo(x-coord,y-coord )`

`window.scrollTo(options)`

参数：`x-coord` 是文档中的横轴坐标。`y-coord` 是文档中的纵轴坐标。

`options `是一个包含三个属性的对象:

`top `等同于` y-coord`

`left `等同于` x-coord`

`behavior `类型`String`,表示滚动行为,支持参数 `smooth`(平滑滚动),`instant`(瞬间滚动),默认值`auto`,实测效果等同于`instant`

#### client

元素调用时

`clientWidth`：获取该元素的可见宽度`（width + padding）`。

`clientHeight`：获取该元素的可见高度`（height + padding）`。

`body/html` 调用时`clientWidth`：获取网页可视区域宽度。`clientHeight`：获取网页可视区域高度。

**`clientX `和 `clientY`（`event`调用）**

`clientX`：鼠标距离可视区域左侧距离。

`clientY`：鼠标距离可视区域上侧距离。

**`clientTop `和 `clientLeft`**

`clientTop`：盒子的上边框`border`的宽度，返回整数，没有单位。`container.style.borderTopWidth`中的`borderTopWidth`返回有单位，且是一个精确的值

`clientLeft`：盒子的左边框`border`的宽度，返回整数，没有单位。

#### window.screen.width 与 window.screen.height获取屏幕宽高