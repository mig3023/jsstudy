// 15강 class

// class --> ES6에 추가된 스펙

class User {
  constructor(name, age) {
    // constructor: 객체를 만들어주는 생성자 메소드
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}
const tom = new User("Tom", 19); // new없이 호출하면 TypeError 발생
console.log(tom);

// for in문
for (p in tom) {
  console.log(p); // name age
} // 메소드 프로퍼티 없이 name과 age만 보여줌--> class의 메소드는 for in 문에서 제외됨.

// class에서의 상속 --> extends 사용
class Car {
  constructor(color) {
    // (왜 color만 있음..?)
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}
class Bmw extends Car {
  park() {
    console.log("PARK");
  }
}

const z4 = new Bmw("blue");

z4.drive(); // 일단 z4 객체에서 drive를 찾고 없으니까 __proto__로 가서 찾고, 또 없으니까 __proto__로 가서 찾음.
// class 내부에서 선언한 메소드는 프로토타입 밑으로 들어감. (사진 참고)

// 메소드 오버라이딩
// Bmw 내부에 Car에서 정의한 메소드와 동일한 이름의 메소드가 존재한다면?
class Car1 {
  constructor(color) {
    // (왜 color만 있음..?)
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}
class Bmw1 extends Car1 {
  park() {
    console.log("PARK");
  }
  stop() {
    // super.stop();
    console.log("OFF");
  }
}
const z3 = new Bmw1("blue");

z3.stop(); // OFF --> 동일한 이름으로 메소드를 정의하면 덮어쓰게 됨.

// 부모의 메소드를 그대로 사용하면서 확장하고 싶다면.. super.stop()
// super.메소드명 --> 부모class에 정의된 메소드를 사용 가능 --> 메소드 오버라이딩

// 생성자 오버라이딩
class Car2 {
  constructor(color) {
    // (왜 color만 있음..?)
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}
class Bmw2 extends Car2 {
  constructor(color) {
    super(color); // 자식클래스는 항상 super로 부모클래스의 constructor를 실행해줘야 함. 같은 인수(color)도 받아야함.
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
}
const z2 = new Bmw2("blue");

console.log(z2);

// 자식클래스에 constructor가 없을 때 내부에선 이렇게 작동..
// constructor(...args) {
//   super(...args);
// }
