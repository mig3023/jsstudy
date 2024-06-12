// 4강 형변환
const mathScore = prompt("수학 점수");
const engScore = prompt("영어 점수");
const result = (mathScore + engScore) / 2;
console.log(result); // 4540 --> prompt로 입력받은 값: 문자형
console.log(("90" + "80") / 2);

// 1. 자동형변환
console.log("9080" / 2); // 숫자형이 아니더라도 나누기같은 표현식은 자동으로 형변환됨.
console.log("6" * "2");
console.log("4" - "2");

// 2. 명시적형변환 (의도를 가지고 원하는 타입으로 변환한 것.)
// string
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
);

// Nunber
console.log(Number("123"));
console.log(Number("123abcd"), Number(true), Number(false));
console.log(Number(null), Number(undefined)); // 이건 외우는 수밖에.

// Boolean
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
); // false
console.log(Boolean("0"), Boolean(" ")); // true
