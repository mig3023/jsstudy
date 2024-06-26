// 18강 Generator

// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}
// next()로 호출 --> 가장 가까운 yield문을 만날 때까지 실행되고 데이터 객체를 반환
// 반환된 데이터 객체는 value, done 프로퍼티 가짐
// value: yield 오른쪽 값, done: 함수 코드 종료 유무 (끝O: true, 끝X: false)
const a = fn();
a.next(); // 1 --> {value: 1, done: false}
a.next(); // 2 --> {value: 2, done: false}
a.next(); // 3, 4 --> {value: 3, done: false}
a.next(); // {value: finish, done: true}
a.next(); // {value: undefined, done: true}

// retuen(): 그 즉시 done 속성값이 true가 됨. 이후에 next()를 실행해도 값을 얻을 수 없고 done도 true가 됨.
a.next(); // 1 --> {value: 1, done: false}
a.return("END"); // {value: "END", done: true}
a.next(); // {value: undefined, done: true}

// throw(): done을 true로 바꿈.
function* fnc() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
  } catch (e) {
    console.log(e);
  }
}
const a2 = fnc();
a2.next(); // 1 --> {value: 1, done: false}
a2.throw(new Error("err")); // {value: undefined, done: true}
a2.next(); // {value: undefined, done: true}

// iterable: 반복 가능, Symbol.iterator 메서드가 구현되어 있어야 함. Symbol.iterator는 iterator를 반환해야 함.
// iterator: (메서드로 호출한 결과), next를 가짐, 작업이 끝나면 done은 true가 됨.
// 즉, Generator는 iterable이면서 iterator

// 배열, 문자열 모두 Symbol.iterator로 호출 가능, for of로 순회 가능 --> iterable

// next()에 인수 전달
function* fn2() {
  const num1 = yield "첫번째 숫자";
  console.log(num1);

  const num2 = yield "두번째 숫자";
  console.log(num2);
  return num1 + num2;
}
const b = fn2();
b.next();
b.next(3); // num1에 3들어감
b.next(2); // num2에 2들어감

// 값을 미리 만들어 두지 않음. --> 메모리 관리 효율적
function* fn3() {
  let index = 0;
  while (true) {
    // while true로 무한반복을 만들어도 호출할 때만 값이 나옴
    yield index++;
  }
}
const c = fn3();
c.next(); // 0 --> {value: 0, done: false}
c.next(); // 1 --> {value: 1, done: false}
c.next(); // 2 --> {value: 2, done: false}

// yield*을 이용해서 다른 generator 부르기
function* gen1() {
  yield "w";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}
function* gen2() {
  yield "Hello";
  yield* gen1();
  yield "!";
}
console.log(...gen2());
// spread연산자 --> done이 true가 될 때까지 값을 펼쳐주는 역할을 함.
