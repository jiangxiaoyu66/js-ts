abstract class Animal {
  public name;
  public constructor(name:string) {
    this.name = name;
  }
  public abstract sayHi():void;
}

// let a = new Animal('Jack');  // 无法创建抽象类的实例

// class Cat extends Animal {   // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHi”。
//   public eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// let cat = new Cat('Tom');