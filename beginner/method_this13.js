// 13강 method, this

// method: 객체 프로퍼티로 할당된 함수
const superman = {
  name: "clark",
  age: 30,
  fly: function () {
    console.log("날아가요");
  },
  // fly() {console.log("날아가요")} --> function 키워드 생략해서 이렇게도 축약 가능
};
superman.fly();

// 객체와 method의 관계
const user = {
  name: "Mike",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};
user.sayHello();
// user.sayHello()를 호출하면 .앞에 있는 user가 sayHello 메서드의 this가 됨.

// 예제를 더 살펴보면..
// let boy = { name: "Mike" };
// let girl = { name: "Jane" };
let sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
}; // 여기서 this는 아직 결정되지 않았음. 어떻게 호출하냐에 따라 달라짐.

let boy = { name: "Mike", sayHello };
let girl = { name: "Jane", sayHello };
boy.sayHello();
girl.sayHello(); // sayHello의 this는 boy, girl처럼 . 앞에 있는 객체임.

// 하지만 sayHello 함수를 화살표 함수로 선언했으면 동작이 전혀 달라짐.
// 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음.
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴.
let boy2 = {
  name: "Mike",
  sayHello: () => {
    console.log(this);
  },
};
boy2.sayHello(); // 이때 this는 boy객체를 가리키지 않고 전역객체를 가리킴.
// 전역객체 --> 브라우저 환경: window, Node.js: global

// 다시 method로 돌아와서..
let boy3 = {
  name: "Mike",
  showName: function () {
    console.log(boy3.name);
  },
};
boy3.showName();

let man = boy3; // 객체 하나에 man, boy3으로 접근 가능하도록 해줌. 사람은 Mike 한명인데 별명이 2개같은 느낌.
// man.name = "Tom";
// console.log(boy3.name);
boy3 = null; // boy3을 null로 만들면 man으로만 접근 가능
man.showName(); // 에러남. boy가 사라졌기 때문에 동작 불가능
// 이럴 땐 boy3을 this로 바꿔주면 동작 가능! this는 해당 객체를 가리키기 때문.

// 화살표 함수로 작성
// 화살표 함수로 메소드를 작성하면 this는 boy4를 가리키는게 아니라 전역객체를 가리킴
// 그래서 객체의 메소드를 작성할 때는 화살표 함수로 작성하지 않는 게 좋음.
let boy4 = {
  name: "Mike",
  sayThis: () => {
    console.log(this);
  },
};
boy4.sayThis();
