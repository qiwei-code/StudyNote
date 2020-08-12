## webSocket的使用

#### 1 初始化webSocket

```js
// 初始化的方法，也可以把回调拆开写
initWebSocket() {
  const self = this;
  let address = this.address;
  let id = this.id;
    
  return new Promise((resolve, reject) => {
    if(!'WebSocket' in window){
      this.$message.error("当前浏览器不支持webSocket");
      reject();
      return;
    } 
    // 创建连接
    self.ws = new WebSocket(`ws://${address}/Webocket/${id}`);
    // 连接成功回调
    self.ws.onopen = () => {
      console.log("连接成功...");
      resolve();
    }
    // 连接关闭回调
    self.ws.onclose = () => {
      console.log("webSocket关闭...");
      slef.ws.close();
    }
    // 接收消息回调
    self.ws.onmessage = (event) => {
      let wsData = JSON.parse(event.data);	// 存放接收到的内容
      // 前后端约定的状态
      let status = {
        error: () => {
          self.$message.error("连接出错，请刷新！")
        },
        ...
      }
      // 调用status对象的对应属性，执行方法
      if(!Reflect.get(status, `${wsData.type}`)) {
        Reflect.get(status, `${wsData.type}`)();
      };
    }
  })
}
```

```js
// 发送消息回调一定要单独写，方便全局调用
wsSendMsg(params) {
  this.ws.send(JSON.stringify({
    // 与后台约定的相关参数
    ...
  }))
}
```

