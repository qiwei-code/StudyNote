## EventBus事件总线

#### 一．首先创建一个 .js 文件，比如 eventbus.js
```js
// eventbus.js

import Vue from 'vue'
export const EventBus = new Vue()
```

实质上`EventBus`是一个不具备` DOM` 的组件，它具有的仅仅只是它实例方法而已，因此它非常的轻便。

另外一种方式，可以直接在项目中的 `main.js `初始化` EventBus` :
```js
// main.js

Vue.prototype.$EventBus = new Vue()
```

#### 二、发送事件（假如A页面向B页面发送数据）
```vue
<!-- A.vue -->

<template>
  <button @click="sendMsg()">-</button>
</template>
<script> 
import { EventBus } from "../eventbus.js";
export default {
 methods: {
  sendMsg() {
   EventBus.$emit("aMsg", '来自A页面的消息');
  }
 }
}; 
</script>
```
#### 三、接收事件

```vue
<!-- IncrementCount.vue -->

<template>
  <p>{{msg}}</p>
</template>
<script> 
// 如果是全局注册就不用引入文件
import { EventBus } from "../event-bus.js";
export default {
 data(){
  return {
   msg: ''
  }
 },
 mounted() {
  EventBus.$on("aMsg", (msg) => {
   // A发送来的消息
   this.msg = msg;
  });
 }
};
</script>
```
`vue`是单页应用，如果你在某一个页面刷新了之后，与之相关的`EventBus`会被移除，这样就导致业务走不下去。还要就是如果业务有反复操作的页面，`EventBus`在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理`EventBus`在项目中的关系。通常会用到，在`vue`页面销毁时，同时移除`EventBus`事件监听。

如果想移除事件的监听，可以像下面这样操作：

```vue
import { eventBus } from './event-bus.js'

EventBus.$off('aMsg', {})
```

你也可以使用 `EventBus.$off('aMsg')`来移除应用内所有对此某个事件的监听。或者直接调用 `EventBus.$off()` 来移除所有事件频道，不需要添加任何参数 。

**全局注册使用EventBus方法**

```js
// 在main.js中注册

Vue.prototype.$EventBus = new Vue(); //全局的事件总线

// 在A页面使用：

this.$EventBus.$emit('testEventBus', id);

// 在B页面接收：

this.$EventBus.$on("testEventBus", res => {
   console.log(res);
})
```

移除同上面一样

