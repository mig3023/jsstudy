// 1강 변수, 호이스팅, TDZ

// 변수 var, const, let 차이
// let, const --> ES6부터 생김. var --> 이전 JS버전

// var는 한번 선언된 변수를 다시 선언할 수 있음
var name = "Mike";
console.log(name);
var name = "Jane";
console.log(name); // 이렇게 name이 2번 선언되었지만 전혀 문제 없음!

// let은 불가능
let name = "Mike";
console.log(name); // Mike
let name = "Jane";
console.log(name); // Error!

// var는 선언하기 전에 사용 가능! 예시..
console.log(name);
var name = "Mike"; // undefined로 찍히고 오류 안남. why?

// var는 이렇게 동작하기 때문!
var name;
console.log(name);
name = "Mike";
// 실제로 코드가 이동하진 않지만 선언부가 최상위로 끌어올려진 것처럼 동작함 --> 호이스팅!
// console.log(name);에 undefined가 찍히는 이유 --> 선언은 호이스팅O but 할당은 호이스팅X

// let의 경우
console.log(name);
let name = "Mike"; // ReferenceError 발생. 그럼 let과 const는 호이스팅이 발생안함? --> No!!

// 그 이유는 TDZ(Temporary dead zone)때문..
// let, const는 TDZ의 영향을 받아서 할당을 하기 전에는 사용 불가능.
// 태블릿 필기 설명 ㄱㄱ

// 변수의 생성과정 3단계 --> 1.선언, 2.초기화, 3.할당
// 초기화 --> undefined를 할당해주는 단계

// var --> 선언, 초기화 동시에 됨. 그래서 할당 전에 호출해도 Error없이 undefined 나옴.
// let --> 선언, 초기화 단계가 분리되어서 실행됨.
// const --> 선언, 초기화, 할당 단계가 동시에 일어남.

// let, var는 선언 후 나중에 할당 가능. but const는 선언과 동시에 할당해야함.
// 예시
let name;
name = "Mike";

var age;
age = 30;

// const gender;
// gender = 'male'; // Error

// 스코프
// var --> 함수 스코프, let, const --> 블록 스코프

// 블록스코프? --> 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서 접근할 수 없다는 의미
// 즉, 코드블록 내부에서 선언한 변수는 지역변수인 것!
// 코드 블록? --> 함수, if문, for문, while문 등

// 함수스코프? --> 함수 내에서 선언된 변수만 그 지역변수가 됨.

// 함수스코프 예시
const age = 30;
if (age > 19) {
  var txt = "성인";
}
console.log(txt); // if문 안에서 var로 선언된 변수는 if문 밖에서도 사용 가능
// 하지만 let, const는 중괄호 내부에서만 사용 가능

function add(a, b) {
  var result = a + b;
}
add(2, 3);
console.log(result); // var는 함수 내에서 선언된 경우는 함수 외부에서 사용 불가능.
// var가 유일하게 벗어날 수 없는 스코프가 함수라고 생각하면 됨.
