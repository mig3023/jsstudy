// 11강 함수표현식, 화살표 함수

// 함수선언문 vs 함수표현식
// 함수 선언문 (10강에서 배운 거)
function sayHello() {
  console.log("Hello");
}
sayHello();

// 함수 표현식
let sayHello1 = function () {
  console.log("Hello");
};
sayHello1();
// 둘은 실행방식, 동작방식도 동일하지만 호출할 수 있는 타이밍에 차이가 있음.

// 함수선언문: 어디서든 호출 가능
sayHello2(); // 이렇게 위에서 먼저 호출해도 됨
function sayHello2() {
  console.log("Hello");
}
// JS는 위에서 아래로 코드를 한줄씩 읽으면서 실행.
// 이렇게 순차적으로 실행되고 즉시 결과를 반환하는 언어 --> 인터프리터 언어
// 호출하는 부분이 위에 있는데 실행되는 이유? --> JS 내부 알고리즘 때문.
// JS는 실행 전 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성해둠.
// 즉,이 함수를 사용할 수 있는 범위는 코드 위치보다 위로 올라가는 것임. --> 호이스팅
// 코드 위치가 실제로 올라간다는 건 아님.
// 함수표현식은 해당코드에 도달해야 생성되기 때문에 해당 안됨.
// 함수선언문이 더 자유롭고 편하게 코딩 가능

// 화살표 함수
// let add = function (a, b) {
//   return a + b;
// };

let add = (a, b) => a + b;
// function 제거, 괄호 뒤에 화살표 추가,
// return은 일반괄호로 변경 가능, return문이 한줄이면 괄호 생략 가능

let sayHello3 = (name) => `Hello, ${name}`;
// 그리고 name처럼 인수가 하나이면 괄호도 생략 가능. (이건 prettier때문에 자동으로 괄호 붙음)
// 만약 인수가 없는 함수면 괄호 생략 불가능

// return문이 있어도 return 앞에 코드가 여러 줄이 있으면 일반괄호 사용 불가능
let add2 = (a, b) => {
  const result = a + b;
  return result;
};

// 함수 표현식 https://codepen.io/pen/?editors=1111
showError();
let showError = function () {
  console.log("에러");
};
// showError();가 여기 있어야 Error 안남.

// 함수 선언문
showError();
function showError() {
  console.log("에러");
}
// 화살표 함수
let showError = () => {
  console.log("에러");
};

// 화살표 함수로 바꾸기
// const sayHello4 = function (name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// };
// -->
const sayHello4 = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
};
// 인수 2개일 때
// const add3 = function (a, b) {
//   const result = a + b;
//   return result;
// };
// -->
const add3 = (a, b) => a + b;
