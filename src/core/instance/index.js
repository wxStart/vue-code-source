import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//! 给Vue的原型上添加 _init 方法
initMixin(Vue)

//!原型上添加 $set、$delete、 $watch 方法，
//! 同时代理了$data(访问的是 _data,?_data什么时候给的呢) 和 $props （访问的是_props？_props什么时候给的，后续才知道） 
stateMixin(Vue)
//! 原型上事件相关方法,$on、$once、$off、$emit方法
eventsMixin(Vue)
//! 原型上事件相关方法,_update、$forceUpdate、$destroy方法
lifecycleMixin(Vue)

//! 给原型上挂载渲染相关的函数 $nextTick 、 _render以及 src/core/instance/render-helpers/index.js中的一些辅助函数
renderMixin(Vue)

export default Vue
