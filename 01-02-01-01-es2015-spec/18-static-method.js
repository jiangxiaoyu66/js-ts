// static 方法
// 类的静态方法只能通过类来调用

class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hi, my name is ${this.name}`)
  }

  static create (name) {
    return new Person(name)
  }
}

const tom = Person.create('tom')
tom.say()
