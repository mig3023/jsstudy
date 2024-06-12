// 2강 자료형
const name = "Mike";
const age = 30;

// 1. 문자형(string) 3가지 방식 ("",'',``)
const name1 = "Mike";
const name2 = "Mike";
const message = `My name is ${name}`; //문자열 내부에 변수 표현할 때 가능. ${30+1} 표현식도 가능
console.log(message);
// const message1 = 'I\'m a boy.';

// 2. 숫자형(number)
console.log(6 + 3); // 더하기
console.log(6 - 3); // 빼기
console.log(6 * 3); // 곱하기
console.log(6 / 3); // 나누기
console.log(6 % 3); // 나머지

const a = 1 / 0;
console.log(a); // Infinity

const b = name / 2;
console.log(b); // NaN (Not a Nunber)

//3. Boolean (true, false 반환)
console.log(name == "Mike");
console.log(age > 40);

// 4. null(존재하지 않는 값) & undefined(값이 할당되지 않음)
let age2;
console.log(age2);
let user = null;

// 5. typeof 연산자
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "zzz");
console.log(typeof null); // null은 사실 객체x, JS초기 버전 오류. 하위호환성 유지 위해 냅둠.
console.log(typeof undefined);

// 문자형 + 숫자 = 문자형
const a2 = "올해";
const b2 = 2024;
console.log(a2 + b2);
console.log(typeof (a2 + b2));
