// 14강 상속, Prototype

// const bmw = {
//   color: "red",
//   wheels: 4,
//   navigation: 1,
//   drive() {
//     console.log("drive..");
//   },
// };

// const benz = {
//   color: "black",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const audi = {
//   color: "blue",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// wheels, drive는 모두 동일. 새로운 변수가 생길 때마다 반복됨. 이 공통된 부분을 proto로 처리할 수 있음.
const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
}; // car라는 상위개념 객체 생성

const bmw = {
  color: "red",
  navigation: 1,
}; // 아까전 반복되는 부분 지우기

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car; // car가 bmw의 프로토타입이 됨. 즉, bmw는 car를 상속 받음.
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw.wheels); // bmw 객체 내부에서 wheels 프로퍼티를 찾고, 없으면 프로토타입에서 확인함.

// 상속은 계속 이어질 수 있음.
const x5 = {
  color: "white",
  name: "x5",
};
x5.__proto__ = bmw; // bmw를 x5에 상속
console.log(x5.navigation);
console.log(x5.wheels);
// 즉, 이렇게 상속받은 prototype 객체의 프로퍼티나 메소드를 차례대로 참고하는 것 --> Prototype chain

// for in으로 객체의 프로퍼티 순회하기
for (p in x5) {
  console.log(p);
} // 상속받은 상위 객체의 프로퍼티까지 다 나옴

// 키, 값과 관련된 객체 내장 메소드는 상속된 프로퍼티 안나옴
console.log(Object.keys(x5)); // [ 'color', 'name' ]
console.log(Object.values(x5)); // [ 'white', 'x5' ]

// for in문에서 상속 받은 프로퍼티와 아닌 프로퍼티 구분하고 싶을 때 --> hasOwnProperty 사용
for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log("o", p);
  } else {
    console.log("x", p);
  }
}

// 생성자 함수 사용해서 상속
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4; // 생성자함수가 생성하는 객체에 __proto__를 wheels로 설정한다는 의미.
Bmw.prototype.drive = function () {
  console.log("dirve..");
};

// Bmw.prototype = {
//   // constructor: Bmw,
//   wheels: 4,
//   drive() {
//     console.log("dirve..");
//   },
// };

const x4 = new Bmw("red");
const z4 = new Bmw("blue");

// 생성자함수가 새로운 객체를 만들어낼 때 그 객체는 생성자의 instance라고 불려짐.
// 이걸 확인할 수 있는 연산자 --> instanceof
console.log(z4 instanceof Bmw); // true --> z4는 Bmw로 생성됐기 때문에 Bmw의 instance임.

// constructor 프로퍼티
// 생성자로 만들어진 instance 객체에는 constructor라는 프로퍼티 존재. 이는 생성자를 가리킴.
console.log(z4.constructor === Bmw);

// 프로퍼티 값 변경 제한하기 --> closure 사용
// clousure x
// const Bmw1 = function (color) {
//   this.color = color;
// };
// const x3 = new Bmw1("red");
// console.log(x3.color); // red
// x3.color = "black";
// console.log(x3.color); // black

// closure o
const Bmw1 = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};
const x3 = new Bmw1("red");
x3.getColor(); // 초기 셋팅했던 color값을 얻을 수만 있고 바꿀 수는 없음.

console.log(x3);
console.log(x3.color); // color가 getColor 함수 속에 있어서 이렇게는 못찾는 것 같음 (맞나?)
