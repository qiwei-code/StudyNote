## Vuex

### 一 无模块

#### 1. Vuex中的参数接受

`store/index.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        count: 0,
        todos：[{id:12,...},{id:13,...},...]
        ...
    },
    getters: {
        // getters机制类似于computed
        // 可接收两个参数，第一个参数是state，第二个参数是其它的getters
        doubleCount(state, getters) {
            return `${getters.dealCount + state.count}`
        },
        dealCount(state) {
            return state.count + 'test...'
        },
        // getters可以返回一个函数，可以实现给getter传参，对store里的数组查询时非常有用
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
  		}
    },
    mutations: {
        // mutations可以接收多个参数，第一个参数是state，后面的是store.commit传入的参数，推荐传入一个对象（简称有效载荷）
        increment(state, payload) {
            state.count++
        }
    },
    // mutation只能是同步操作，异步操作必须在actions中进行
    // actions不能直接操纵state，必须通过mutations操作state
    Actions: {
        // mutations接收一个context作为参数，context包含context.commit、context.state、context.getters，一个有效载荷
        increment (context, payload) {
          // 通过commit调用mutations中的方法
          context.commit('increment', payload)
        },
        // context也可以通过一下方式使用（对象解构赋值），选取你需要的就可以
         dosomething({commit, state, dispatch, getters}, payload)
    }
})
```

注意：对于mutations的提交和actions的分发有两种形式

```js
// 第一种
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})
// 第二种
// 以对象形式分发，使用type指定方法
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
接收都是通过一个对象payload有效载荷接收
```

#### 

#### 2. Vuex中的map辅助函数





#### 3. Vuex中动态添加state属性



#### 4. Vuex中mutations调用getters、mutations一个方法调用另一个方法



### 二、Vuex模块化



#### 1. Vuex中的模块



#### 2. Vuex中模块的参数接收