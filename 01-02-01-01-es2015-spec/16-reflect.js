// Reflect 对象
// 详细可参考https://www.zhangxinxu.com/wordpress/2021/07/js-proxy-reflect/

const obj = {
  foo: '123',
  bar: '456'
}

const proxy = new Proxy(obj, {
  get (target, property) {
    console.log('watch logic~')
    
    return Reflect.get(target, property)
  }
})

console.log(proxy.foo)

// const obj = {
//   name: 'zce',
//   age: 18
// }

// // console.log('name' in obj)
// // console.log(delete obj['age'])
// // console.log(Object.keys(obj))

// console.log(Reflect.has(obj, 'name'))
// console.log(Reflect.deleteProperty(obj, 'age'))
// console.log(Reflect.ownKeys(obj))