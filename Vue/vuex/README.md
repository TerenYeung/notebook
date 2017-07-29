
### 什么是Vuex

- 状态管理模块
- 集中式管理应用的所有组件状态（状态用数据表示，可以理解为数据管理）

### 理解状态管理

SPA应用中，每一种页面视图可以赋予一种状态，用户操作出发路由变化，获取路由参数生产视图对象，改变页面状态，页面重新渲染实现视图更新；

![vuex的单项数据流理念](https://vuex.vuejs.org/zh-cn/images/flow.png)

### 核心概念

- store
	store相当于一个仓库，存储app的大部分状态（state）;
	store引入脚本有两种方式：
		- 作为全局状态单例
		```
			const store = new Vuex.store({
				state: {
					count: 0
				},

				mutations: {
					increment(state) {
						state.count++
					}
				}
			})
		```
		- 作为vue实例的store选项
		```
			Vue.use(Vuex)

		```
		- 作为根组件的store选项，同时该store实例会注入到根组件下的所有子组件
		```
			const app = new Vue({
			  el: '#app',
			  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
			  store,
			  components: { Counter },
			  template: `
			    <div class="app">
			      <counter></counter>
			    </div>
			  `
			})
			const Counter = {
			  template: `<div>{{ count }}</div>`,
			  computed: {
			    count () {
			      return this.$store.state.count
			    }
			  }
			}

		```
- state
	app的所有组件的状态, 是单一状态树，一个对象包含全部的应用层级状态，将作为唯一数据源（SSOT）存在，故每个vue应用有且仅有一个state;

	store.state一般定义全局状态，当然每个组件总是会有各自独立的状态，所有每个组件还应该有属于自己的局部状态；

	- Getters——派生状态
	有时候，store.state里面的原始状态并不能满足我们需要，如显示age > 18的人群，store.state.people里面包含所有年龄段的人群，虽然我们可以在组件中通过computed进行，但是如果该需求普遍适用于多个组件，没可能在每个组件都定义相同的computed；

	getters就是在store.getters下定义原始状态的派生状态的属性；

	```
		const store = new Vuex.Store({
		  state: {
		    todos: [
		      { id: 1, text: '...', done: true },
		      { id: 2, text: '...', done: false }
		    ]
		  },
		  getters: {
		    doneTodos: state => {
		      return state.todos.filter(todo => todo.done)
		    },
		     doneTodosCount: (state, getters) => {
   			 	return getters.doneTodos.length
 			 }
		  }
		})
		store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

	```
- mutation
	state不能直接改变，需要通过mutation，mutation相当于处理数据函数，并且具有记录功能；

	```
		// ...
		mutations: {
		  increment (state, payload) {
		    state.count += payload.amount
		  }
		}
		store.commit('increment', {
		  amount: 10
		})
		//或者
		store.commit({
		  type: 'increment',
		  amount: 10
		})
	```

	- mutatios需要遵守Vue的响应规则
		因为state也是响应式的，vue规定任何响应式数据要触发页面响应式变化,必需采用:
		```
			Vue.set(object, key, value)
		```
	- mutations必需是同步函数，如果是异步函数，那么多个异步的mutation在使用devtools追踪mutation日志时状态变得无法追踪；

- actions
	mutation是同步直接操作state,actions可以异步直接触发mutation，即：
	store.dispath('actionA') -> actions.actionA触发commit('actionA') -> store.mutations改变store.state
	```
		actions: {
			increment (context) {
			  	context.commit('increment')
			}
		}
		//or
		actions: {
			increment ({ commit }) {
				commit('increment')
			}
		}
		store.dispatch('increment')
	```
	可以简单理解为，actions直接操作mutation，mutation直接操作state

- modules
	modules可以将单一状态树进行拆分成独立的子模块，每个模块拥有自己的state、mutation、getters、actions
	```
		const moduleA = {
		  state: { ... },
		  mutations: { ... },
		  actions: { ... },
		  getters: { ... }
		}

		const moduleB = {
		  state: { ... },
		  mutations: { ... },
		  actions: { ... }
		}

		const store = new Vuex.Store({
		  modules: {
		    a: moduleA,
		    b: moduleB
		  }
		})

		store.state.a // -> moduleA 的状态
		store.state.b // -> moduleB 的状态
	```
	记住，mutation、getters的state参数都是局部state,actions的context.state也是局部状态，可以通过context.rootState访问根节点的状态
### 基本应用

#### 引入Vuex插件
```
var Vue = require('vue')
var Vuex = require('Vuex')

//引入Vuex插件
Vue.use(Vuex)

//封装一下console.log
function print(val){
	console.log(val)
}
```

#### 获取state和改变state

store.commit -> mutation -> state

```
const store = new Vuex.store({
	state: {
		count: 0
	},

	mutations: {
		increment(state) {
			state.count++
		}
	}
})

store.commit('increment')

---
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}

```

store的状态是响应式的（响应用户操作，是经常变化的），所以：
store的state通过vue实例的computed属性返回值；
改变state，只需要在methods属性定义store.commit




