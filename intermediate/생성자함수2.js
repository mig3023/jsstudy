// 2강 생성자 함수

// 객체 리터럴
let user = { name: "Mike", age: 30 };

// 만약 이런 비슷한 객체를 여러개 만들어야 할 때 --> 생성자 함수 사용

// 보통 첫글자를 대문자로 해서 함수를 만듦

// 예시
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);
console.log(user1, user2, user3);
// name, age를 인자로 받아서 this에 넣어주고 new 연산자를 사용해서 함수를 호출하고 있음!

// 동작 원리 (실제로 코드엔 없지만 속에서 이렇게 동작!)
function User(name, age) {
  // this {} // --> new함수명을 실행하면 이렇게 빈 객체를 생성!!
  this.name = name;
  this.age = age; // this의 프로퍼티들을 추가
  //  return this; // --> this 반환
}
// let user1 = new User("Mike", 30);
// let user2 = new User("Jane", 22);
// let user3 = new User("Tom", 17);

// 메소드 추가해보기
function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name); // this로 할당된 객체에 sayName 메소드를 추가했음
  };
}
let user5 = new User("Han", 40);
user5.sayName(); //user5.sayName()으로 호출했을 때 sayName함수의 this는 user5를 가리키기 때문에 Han 출력됨.

// 상품 객체를 생성해보자
function Item(title, price) {
  // this {}
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
    // return this;
  };
}
const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);
console.log(item1);
console.log(item2);
console.log(item3);
item3.showPrice();

// 만약 new를 안붙이면 단순히 함수가 실행된 것이라 아무것도 리턴해주지 않아서 undefined가 출력됨
