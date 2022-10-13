import { h, init } from 'snabbdom'

/**
* init() 参数：数组、模块，返回值：patch()
* 是一个高阶函数，返回patch()，作用是比较两个VNode差异更新到真实DOM
 */
let patch = init([])

/**
* h() 参数：1，标签+选择器；2，如果是字符串的话就是标签中的内容
 */
let vnode = h('div#container.cls', {
  hook: {
    init (vnode) {
      console.log(vnode.elm)
    },
    create (emptyVnode, vnode) {
      console.log(vnode.elm)
    }
  }
}, 'hello world!')

let app = document.querySelector('#app')

/**
* patch(),参数：1，可以是DOM元素，内部会将DOM元素转换成VNode；2，VNode；返回值：VNode
 */
let oldVNode = patch(app, vnode)

// 举个例子
let newVNode = h('h1', 'hello, i am newVNode!')

patch(oldVNode, newVNode)