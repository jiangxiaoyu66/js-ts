// Object.assign 方法：把后续对象的属性写入第一个对象

// const source1 = {
//   a: 123,
//   b: 123
// }

// const source2 = {
//   b: 789,
//   d: 789
// }

// const target = {
//   a: 456,
//   c: 456
// }

// const result = Object.assign(target, source1, source2)

// console.log(target)
// console.log(result === target) // true


////////////////////////////////


// 应用场景

function func (obj) {
  // obj.name = 'func obj'
  // console.log(obj)

  const funcObj = Object.assign({}, obj)
  funcObj.name = 'func obj'
  console.log(funcObj)  // { name: 'func obj' }
}

const obj = { name: 'global obj' }

func(obj)  
console.log(obj)  // { name: 'global obj' }

