// 箭头函数与 this
// 箭头函数不会改变 this 指向
// 普通函数的this指向调用对象

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(`hi, my name is ${this.name}`)  // hi, my name is tom
  // },
  sayHi: () => {
    console.log(`hi, my name is ${this.name}`)  // hi, my name is undefined
  },
  sayHiAsync: function () {
    // const _this = this
    // setTimeout(function () {
    //   console.log(_this.name)
    // }, 1000)

    console.log(this)
    setTimeout(() => {
      // console.log(this.name)
      console.log(this)
    }, 1000)
  }
}

person.sayHiAsync()
// person.sayHi()
