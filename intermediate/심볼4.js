// 4강 심볼

// 객체에서 일반적인 프로퍼티 키는 문자형임.
// 숫자나 Boolean형 등을 입력해도 속에서 암묵적 형변환이 일어나서 문자열이 됨.
// 예시
const obj = {
  1: "1입니다.",
  false: "거짓",
};
console.log(Object.keys(obj));

// 근데 프로퍼티 키가 될 수 있는게 하나 더 있음! --> 심볼형
// 그래서 객체 프로퍼티 키는 문자형, 심볼형 2가지임

// 심볼? --> 유일한 식별자를 만들 때 사용.
// 예시
const a = Symbol();
const b = Symbol();
console.log(a === b, a == b); // 생긴건 똑같은데 일치연산자, 동등연산자 모두 false 찍힘.
// why? 유일성이 보장되기 때문.

// symbol을 객체의 key로 사용해보자
const id = Symbol("id"); // symbol의 괄호 안 --> 설명 작성. 디버깅할 때 편함. 심볼 생성에는 어떠한 영향도 안 미침.
const user = {
  name: "Mike",
  age: 30,
  [id]: "myid",
};
console.log(user); // 심볼키까지 잘 들어가 있음.

console.log(Object.keys(user)); // 심볼키 없음. why?
// Object.keys, values, entries, for in문 --> 키가 심볼형인 건 건너뜀.

// 그럼 심볼 어디에 씀? --> 특정 객체의 원본데이터는 건들이지 않고 속성을 추가할 수 있음.
// 예시
const user1 = {
  name: "Mike",
  age: 30,
}; // 다른 개발자가 만들어 놓은 객체

// 내가 작업
// user1.showName = function () { }; // --> 이렇게 추가를 해버리면 사용자에게도 보임.
const showName = Symbol("show name");
user1[showName] = function () {
  console.log(this.name);
};
user1[showName]();
// --> 이렇게 작성해야 다른 작업자의 코드에 영향을 미치지 않음.

// 사용자가 접속하면 보는 메세지
for (let key in user1) {
  console.log(`His ${key} is ${user1[key]}.`);
}

// Symbol.for(): 전역 심볼.
// 매번 다른 Symbol 값을 생성하는 Symbol()과 달리 Symbol.for()는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유.
// 예시
const id1 = Symbol.for("id");
const id2 = Symbol.for("id");
console.log(id1 === id2);

// 괄호 안 설명 출력
console.log(Symbol.keyFor(id1)); // Symbol.for()
const id3 = Symbol("id 입니다.");
console.log(id3.description); // Symbol()

// 숨겨진 Symbol key 보는 법
const id4 = Symbol("id");
const user2 = {
  name: "Mike",
  age: 30,
  [id4]: "myid",
};
console.log(Object.getOwnPropertySymbols(user2)); //Symbol 키만 출력.
console.log(Reflect.ownKeys(user2)); // 모든 키 다 출력.
