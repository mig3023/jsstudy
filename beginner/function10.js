// 10강 함수의 기초

// 함수란 예를 들어, 팝업 띄우기, 결제 등 서비스를 만들 때 자주 사용되는 동작들을
// 하나로 만들어 재활용할 수 있도록 하게 해줌. 코드 중복 줄어듦, 유지보수 편해짐.

// console, alert, confirm --> 브라우저가 가지고 있는 내장함수

// 함수 작성법
function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("서영");
// function 함수, sayHello 함수명(자유롭게 설정 가능),
// name 매개변수(없거나, 1개 or 2개 이상일 수도. 여러개면 쉼표로 구분)
// 중괄호 내부 --> 함수의 실행코드 작성함.
// sayHello처럼 함수명 뒤에 괄호를 붙여서 호출 가능. 매개변수가 필요하면 괄호 안에 넣어줌.

// 매개변수가 없는 함수 https://codepen.io/pen/?editors=1111
// function showError() {
//   alert("에러 발생, 다시 시도");
// }
// showError();

// 매개변수가 있는 함수
function sayHello2(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello2("Mike");
sayHello2("Tom");
sayHello2("Jane"); // 함수를 한번 만들어 놓으면 매개변수를 바꿔가면서 다양한 대응 가능

// 만약 사용자 이름을 모를 때
function sayHello3(name) {
  // console.log(name);
  let msg = "Hello";
  if (name) {
    msg = `Hello, ${name}`;
  }
  console.log(msg);
}
sayHello3(); // 이렇게 name이 없으면 undefined, 즉 false라서 if문을 통과하지 못하고 Hello만 찍힘

// 위 함수를 더 간결하게 바꾸기 (+= 연산자 사용)
function sayHello3(name) {
  let msg = "Hello";
  if (name) {
    // msg += ", " + name;
    msg += `, ${name}`;
  }
  console.log(msg);
}
sayHello3();
sayHello3("Jake");
// console.log(msg); // 에러남. 그 이유는..
// 여기서 msg는 지역변수라서 함수 내부에서만 사용 가능. 함수 외부에서 사용하려면 바깥으로 빼줘야함.

// msg 바깥으로 빼주기
let msg = "Hello"; // 전역 변수

function sayHello4(name) {
  if (name) {
    // msg += ", " + name;
    msg += `, ${name}`;
  }
  console.log(msg);
}
sayHello4();
sayHello4("Amy");
console.log(msg); // if문에서 msg 값이 변경되었기 때문에 Hello가 아닌 Hello, Amy가 뜸
// 이렇게 어디서나 접근 가능한 변수를 전역변수라고 함.

// 전역변수 지역변수로 구분되어 있을 때는 함수 내부에서도 let으로 전역변수와 동일한 이름으로 선언 가능.
// 서로 간섭을 받지 않음.
let msg2 = "Welcome";
// console.log(msg2);
function sayHello5(name) {
  let msg2 = "Hello";
  console.log(msg2 + " " + name);
}
sayHello5("John");
console.log(msg2);

// 다른 예시
let name = "Mike";
function sayHello6(name) {
  console.log(name);
}
sayHello6();
sayHello6("Jane"); // Mike가 아니라 Jane이 출력된 이유?
// 매개변수로 받은 값은 복사된 후 함수의 지역변수가 되기 때문에 Mike가 아닌 Jane이 출력됨.

// 사용자 이름을 모를 때, OR 연산자 사용
function sayHello7(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}
// 기본값 사용(default value)
function sayHello7(name = "friend") {
  // name이 없을 때만 할당됨
  let msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello7(); // 그래서 매개변수를 입력하지 않으면 name은 false가 되고 true인 friend 출력됨.
sayHello7("Sunny");

// return
// return으로 값 반환 (return 오른쪽에 있는 값 반환)
function add(a, b) {
  return a + b;
}
const result = add(1, 2); // 반환된 값이 변수 result에 들어감
console.log(result);

// return이 없을 때 (return 오른쪽에 있는 값을 반환하고 그 즉시 종료)
function returntest() {
  console.log("리턴 앞부분"); // 여기까지만 실행됨.
  return;
  console.log("리턴 뒷부분");
}
returntest();

// 함수 팁!
// 한번에 한 작업만 집중 (하나의 함수가 여러 작업을 진행하면 함수를 더 잘게 나눠서 쓰는게 좋음)
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍 (예시: showError, getName, createUserData, checkLogin)
