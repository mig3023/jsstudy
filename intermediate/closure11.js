//  11강 클로저

// JS는 lexical환경을 가짐

// 코드 실행 --> 선언한 변수들이 lexical 환경에 올라감
// 여기서 one은 초기화x 상태(사용불가). addOne(함수선언문)은 변수와 달리 바로 초기화됨(사용가능)
let one; // undefuned (but 사용 가능)
one = 1; // 1 할당됨
function addOne(num) {
  // -->
  console.log(one + num);
}
addOne(5); // 함수가 실행될 때 새로운 내부lexical환경이 만들어짐 (함수가 넘겨받은 매개변수, 지역변수가 저장됨)
// 함수가 호출되는 동안 함수에서 만들어진 내부lexical환경과 외부에서 받은 전역lexical환경 2개를 가짐
// 내부lexical환경은 외부lexical환경에 대한 참조를 가짐
// 코드에서 변수를 찾을 때: 내부 (없으면)--> 외부 (없으면)--> 전역lexical 환경
// 지금 이 함수는 외부lexical환경이 전역lexical환경임.

// 이 코드의 one, num을 찾기 --> 내부lexical: num: 5, 전역lexical: one: 1, addOne: function

// 예제2
// 최초 실행 시 --> 전역lexical: makeAdder: function, add3: 초기화x
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add3 = makeAdder(3); // 이 라인이 실행될 때 makeAdder의 lexical환경이 만들어짐. 이때, 전달받은 x의 값이 들어감.
// 그리고 전역lexcial의 add3은 function이 됨. 이부분 --> function (y) {return x + y;
console.log(add3(2)); // 이때 또 lexical환경이 만들어짐. y: 2

// 즉, closue --> 함수와 그 함수의 lexical환경의 조합
// 함수가 생성될 당시의 외부변수를 기억하고 생성된 이후에도 그 변수에 계속해서 접근이 가능한 것

// 정리
function makeAdder1(x) {
  return function (y) {
    // 이 함수는 자신이 y를 가지고 있고 상위함수인 makeAdder1의 x에 접근 가능
    return x + y;
  };
}
const add4 = makeAdder1(3);
console.log(add4(2)); // 5 --> add4 함수가 생성된 이후에도 상위함수인 makeAdder1의 x에 접근 가능

const add10 = makeAdder1(10);
console.log(add10(5)); // 15
console.log(add4(1)); // 4
// makeAdder1(10)이 호출되지만 add4에는 영향이 없음. --> add10과 add4는 서로 다른 lexical환경을 가지고 있기 때문.

// 은닉화
// https://velog.io/@mincho/%EB%B3%80%EC%88%98%EC%9D%98-%ED%81%B4%EB%A1%9C%EC%A0%80%EC%99%80-%EC%9D%80%EB%8B%89%ED%99%94
