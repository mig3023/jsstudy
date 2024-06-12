// 6강 비교연산자, 조건문

// 비교연산자
a = 3; // = 1개는 할당
a == 3; // 같은가 (Boolean)
a != 3; // 다른가 (Boolean)

console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

// == 동등 연산자 (값만 비교)
const a = 1;
const b = "1";
console.log(a == b);
console.log(a === b); // === 일치 연산자 (값+type 비교)

//조건문 if, else, else if
const age = 19;

if (age > 19) {
  console.log("환영해요.");
}
if (age <= 19) {
  console.log("안녕히 가세요.");
}

if (age > 19) {
  console.log("환영해요.");
} else {
  console.log("안녕히 가세요.");
}

if (age > 19) {
  console.log("환영해요.");
} else if (age === 19) {
  console.log("수능 대박");
} else {
  console.log("안녕히 가세요.");
}
