#  new Vue(options) 

vm = {}


# 执行了 _init
file:  `src/core/instance/index.js`  ->  `src/core/instance/init.js`

``

vm._uid = 0;  // 实例的唯一标识，从0自增的。     
vm._isVue = true;// vue实例的标记

// 对options 进行处理
### ---> 以下内容需要重新整理
vm.$options ={
  props:{  // options的 props 可以是数组也可以是 对象
    [key]:value, 
    /*  
    对options的props处理，如果是数组，则会是[key]={type:null},如果是options的props是对象，则机选判断 ptions.props[key]的值value是不是一个对象，如果是对象
    则 [key] = value,否则 [key]= {type:value}；
    */
  },
  inject:{ // options的 inject 可以是数组，也可以是对象
    [key]:{ from: value },
    /*  
    对options的 inject 处理，如果是数组，则会是 inject[key]={from:`${key}`},如果是options的inject是对象，则会继续判断ptions.inject[key]的值 value（ptions.inject[key]） 是不是一个对象，如果值是一个对象，则 inject[key] ={ from:`${key}`, ...value },不是对象则  inject[key] ={ from: value }。
    */
  }
  directives:{
    [key]:{
      bind:fn, update:fn,
    }
    /*
    指令相关，如果options.directives[key]是一个函数 fn ，,则会处理成 { bind:fn, update:fn} 所以在bind和uodate时候都会执行 fn，
    可以推测出  指令应该是至少有bind和update函数。
    */
  }
}

```
