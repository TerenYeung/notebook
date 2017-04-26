
### React 学习线路

- React UI库

- Redux

- Flux

- Babel

- webpack

---

#### React UI库

##### 组件

- 组件生命周期

##### 虚拟DOM

##### View Controller

[view-controller](http://blog.andrewray.me/the-reactjs-controller-view-pattern/)


##### 纯React UI库的使用心得

- 虚拟DOM

  - 所有挂载在真实DOM节点之前的DOM元素都是虚拟DOM
  - 虚拟DOM就是一种具备DOM结构的JavaScript的数据类型
  - 操作虚拟DOM与真实DOM的区别在于：
    - 操作虚拟DOM就是进行JS的数据变化
    - 操作真实DOM则是进行视图的重绘
  - 因此，虚拟DOM的性能优势在于利用JS解释器的高效计算替代真实DOM的重绘成本，重绘与运算相比开销更大；

- 代码逻辑

  用户 -> views -> state
      <-  views <- state

#### Flux

**Flux Profile**

APPLICATION ARCHITECTURE FOR BUILDING USER INTERFACES

**Attributes**

- a pattern for managing data flow

- unidirectional cycles

dispatcher是是事件调度程序（一个对象），它在action中定义事件触发程序，在store中定义事件注册程序；

整个架构的运转逻辑是view层进行交互触发actions的事件分发程序，store层接收事先定义的事件触发回调；

store的变化重置app的state，视图进行重绘；

store的重绘具体逻辑：

1. actions改变store (store与state进行联系)
2. 然后emit change event
3. view监听change, 触发后state重置而进行视图重绘


**Flux Parts**

- Action

- Dispatcher

- Store

- View

![](https://github.com/facebook/flux/raw/master/examples/flux-concepts/flux-simple-f8-diagram-with-client-action-1300w.png)

- Dispathcher

receives actions and dispatches them to stores that have registered with the dispatcher

There should be only one singleton dispatcher in each application.

```
const TodoAction = {
  create(todo) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_TODO',
      todo
    });
  },
  delete(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_TODO',
      id
    });
  }
};
```

```
AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'CREATE_TODO':
      TodoStore.addTodo(action.todo);
      TodoStore.emitChange();
      break;
    case 'DELETE_TODO':
      TodoStore.deleteTodo(action.id);
      TodoStore.emitChange();
      break;
    default:
      //  nothing to do here

  }
});
```

Dispatcher tips

Callbacks are not subscribed to particular events. Every payload is dispatched to every registered callback.
Callbacks can be deferred in whole or part until other callbacks have been executed.

- Store

holds the data of an application

store register the event dispatched from actions

data in a store only be mutated by responding to an action

data changes it must emit a 'change' event

Key Concept: A store is not a model. A store contains models

Key concept: A store is the only thing in your application that knows how to update data. This is the most important part of Flux. The action we dispatched doesn't know how to add or remove items.

Only your stores are allowed to register dispatcher callbacks! Your views should never call AppDispatcher.register

Key Concept: We don't pass the newest item when we trigger. Our views only care that something changed.

- Actions

capture the ways in which anything might interact with your application.

objects that have a "type" field and some data.

```
const TodoAction = {
  create(todo) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_TODO',
      todo
    });
  },
  delete(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_TODO',
      id
    });
  }
};
```

Actions should be semantic and descriptive of the action

should not describe implementation details of that action. Use "delete-user" rather than breaking it up into "delete-user-id", "clear-user-data", "refresh-credentials" 

What The Hell Is An "Action Creator"?



- Views

Data from stores is displayed in views

Views can use whatever framework

 When a view uses data from a store it must also subscribe to change events from that store.


 ```
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }
 ```

 Key Concept: When store data changes, your views shouldn't care if things were added, deleted, or modified. They should just re-render entirely. React's "virtual DOM" diff algorithm handles the heavy lifting of figuring out which real DOM nodes changed. This makes your life much simpler, and will lower your blood pressure.

 - example

 Example:

The main view subscribes to the TodoStore.
It accesses a list of the Todos and renders them in a readable format for the user to interact with.
When a user types in the title of a new Todo and hits enter the view tells the Dispatcher to dispatch an action.
All stores receive the dispatched action.
The TodoStore handles the action and adds another Todo to its internal data structure, then emits a "change" event.
The main view is listening for the "change" event. It gets the event, gets new data from the TodoStore, and then re-renders the list of Todos in the user interface.

Views send actions to the dispatcher.
The dispatcher sends actions to every store.
Stores send data to the views.

**Flux Practice**

```
import { Dispatcher } from 'flux';

```

```
import EventEmitter from 'events';
```

---

#### Redux

![Redux](https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67)

##### What is Redux ?

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

##### Motivation

JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. 

- what state includes ?

	- server responses
	- cached data
	- created by locally that has not yet been persisted to the server
	- UI state
	- routes

##### Redux Function

React attempt to  solve this problem in the view layer by removing both asynchrony and direct DOM manipulation.

- **Core Concepts**

reducer(function): to tie state and actions together

it’s just a function that takes state and action as arguments, and returns the next state of the app



---
参考资料
[Flux-docs](http://facebook.github.io/flux/docs)
[Flux-examples](https://github.com/facebook/flux/tree/master/examples)
[flux-for-stupid-people](http://blog.andrewray.me/flux-for-stupid-people/)
[getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)
