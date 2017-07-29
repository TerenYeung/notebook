## Vuex

状态管理工具

### 两大特点
  Vuex的状态存储是响应式的，当store中的状态发生改变时，相应的组件也会同步更新；
  store的状态无法直接改变，只能通过显示store.commit(mutation)方式进状态更新；

### State
  整个应用的状态由一个store来表示；

  所谓应用的状态：就是应用的运行情况；

- 全局状态和局部状态的权衡
  注意区分好哪些状态属于全局状态，哪些属于局部状态

- 如何获取状态？

  由于状态存储是响应式的，从store中获取状态的方法就是从计算属性中返回某个状态

  ```
    const Counter = {
      template: `<div>{{ count }}</div>`
      computed: {
        count() {
          return store.state.count
        }
      }
    }
  ```
  每当store.state.count变化时，都会重新求取计算属性，并触发更新相关联的DOM

  上面引入store的方式导致每个用到state的地方都要引入store

  Vuex提供一种机制将store注入到每一个子组件，就是在根实例中注册store选项

  ```
    const app = new Vue({
      el: '#app',
      store,
      components: {
        Counter,
      },
      template: `
        <div class="app">
          <counter></counter>
        </div>
      `
    })

    const Counter = {
      tempalte: `<div>{{ count }}</div>`,
      computed: {
        count() {
          return this.$store.state.count
        }
      }
    }
  ```



  - mapState辅助函数快速为计算属性添加state

  ```
    // 1. 基本用法
    import { mapState } from 'vuex'

    export default {
      computed: mapState({
        count: state => state.count,

        // 为了使用this获取局部状态，必需使用常规函数
        countPlusLocalState(state) {
          return state.count + this.localCount
        }
      })
    }

    // 2. 当计算属性名和state的子节点名称相同时，可以为mapState传递一个字符串数组
    // mapState返回的是一个对象，可以通过扩展运算符将局部的computed属性结合起来

    computed: {
      ...mapState({}),
      localComputed(){},
    }
  ```

### Getters
  有时，服务器的数据获取后更新到store，然后我们需要进行一定处理获取我们需要的数据，例如过滤出todos列表中已经做完的项目

  ```
    computed: {
      doneTodosCount() {
        return this.$store.state.todos.filter(todo=>todo.done).length
      }
    }
  ```
  如果多个组件需要用到该属性，那么我们将复制该函数到每个组件或是抽离到一个函数，然后多处导入它

  store中提供getters选项，定义公共的计算属性

  ```
    const store = new Vuex.Store({
        state: {
          todos: [
            {id: 1, done: true},
            {id: 2, done: false},
          ]
        },
        getters: {
          doneTodos: state => {
            return state.todos.filter(todo=>todo.done)
          },
          doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
          }
        }
      })

    export default {
      computed: {
        doneTodos() {
          return this.$store.getters.doneTodos
        },
        donTodosCount() {
          return this.$store.getters.doneTodos.Count
        }
      }
    }
  ```

  - mapGetters辅助函数
  和mapState一样，快速为计算属性添加Getters
    ```
      import {mapGetters} from 'vuex'

      export default {
        computed: {
          ...mapGetters([
            'doneTodos',
            'doneTodosCount'
          ])
        }
      }
      // 也可以传入一个对象为getter属性重命名
      mapGetters({
        doneCount: 'doneTodosCount',
      })
    ```

### Mutations
  如何改变store的状态?
  // type as mutation, type的回调 as mutation handler
  通过store.commit(type)，然后store.mutations接收到对应的type执行回调

  ```
    const store = new Vuex.store({
      state: {
        count: 1
      },
      mutations: {
        increment(state) {
          state.count++
        }
      }
    })

    store.commit('increment')
  ```

  你可以在store.commit时传入额外的参数 payload
  ```
    mutations: {
      increment(state, payload) {
        state.count += payload.n
      }
    }

    store.commit('increment', {n:10})
  ```

  - 另一种提交风格
  ```
    store.commit({
      type: 'increment',
      n: 10
    })
  ```

  - 使用常量替代Mutation事件类型
  - mutaion必须是同步函数
    mutation是改变store的直接方法，因此为了进行状态追踪，mutation不可能是异步函数，否则将使得状态不可预测

  - 在Vue实例的methods中mapMutations
  ```
    import {mapMutations} from 'vuex'

    export default {
      ...mapMutations([
        'increment, //映射 this.increment() 为 this.$store.commit('increment')
      ])
    }

  ```

  ### Actions
    处理异步操作的方法——Actions

    - Actions的特点
      Action提交mutation，而不是直接改变状态
      Action可以包含异步操作

    ```
      const store = new Vuex.Store({
        statei: {
          count: 0,
        },
        mutations: {
          increment(state) {
            state.count
          }
        },
        actions: {
          increment(context) {
            context.commit('increment)
          }
        }
      })

      // index.vue
      store.dispatch('increment')
    ```

    - dispatch载荷的方式去dispath一个action
      ```
        store.dispatch({
          type: 'incrementAsync',
          amount: 10
        })

        //
        actions: {
          incrementAsync({commit, state}, payload) {

          }
        }
      ```
    
    - 在组件中分发Action
    ```
      import {mapActions} from 'vuex'

      export default {
        methods: {
          ...mapActions([
            'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
          ])
        }
      }
    ```

  ### Modules
  使用的单一状态树的缺点是将所有状态集中到一个对象上，当应用变得复杂时，store对象就变得臃肿不堪

  为解决上面问题，可以将store分割为module
  每个module拥有自己的state、getter、mutation、action。

  ```
    const moduleA = {
      state: {
        count: 0,
      },
      getters: {
        doubleCount (state) {
          return state.count * 2
        }
      },
      mutations: {
        increment (state) {
          state++
        }
      },
      actions: {},
    }
     const moduleB = {
      state: {},
      getters: {},
      mutations: {},
      actions: {},
    }
    const store = new Vuex.Store({
      modules: {
        a: moduleA,
        b: moduleB
      }
    })

    store.state.a
    store.state.b
 ```