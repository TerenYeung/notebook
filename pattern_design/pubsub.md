### 发布订阅模式
publisher -> middler -> subscriber

消息发布者不直接向订阅者发布消息，而是发布到中介，中介根据不同主题消息进行过滤，并通知对该主题感兴趣的订阅者；

#### PubSub模块主要方法
- 订阅：订阅者
- 发布：发布者
- 退订：订阅者

#### 模块开发

```
var PubSub = {};
// 用于储存事件队列
var queue = {};

// 订阅接口
PubSub.on = function(event, cb) {
  if (!queue[event]) {
    queue[event] = [];
  }
  queue[event].push(cb);
};

// 退订接口
PubSub.off = function(event, cb) {
  var currentEvent = queue[event];
  var len = 0;
  if (currentEvent) {
    len = currentEvent.length;
    for (var i = len - 1; i >= 0; i--) {
      if (currentEvent[i] === cb) {
        currentEvent.splice(i, 1);
      }
    }
  }
};

// 发布接口
PubSub.emit = function(event) {
  var currentEvent = queue[event];
  if (currentEvent) {
    for (var i = 0; i < currentEvent.length; i++) {
      currentEvent[i]();
    }
  }
};
```

#### 模块调用

```
// 订阅
var callbackA = function () {
    console.log('event a happened')
};
PubSub.on('a', callbackA);
PubSub.on('b', function() {
    console.log('event b happened')
});

// 退订 , 第二个参赛传入回调函数的引用
PubSub.off('a', callbackA);

// 发布
PubSub.emit('a');
PubSub.emit('b');
```