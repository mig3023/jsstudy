//5강 기본 연산자

// 나머지(%) 연산자 활용
console.log(5 % 2); // 홀수
console.log(4 % 2); // 짝수

// 거듭제곱
const num1 = 2 ** 3;
console.log(num1);

// 연산자 줄여쓰기
let num = 10;
// num = num + 5;
num += 5;
num *= 5;
num -= 5;
num %= 5;
console.log(num);

// 증감 연산자 (값을 1만큼 증가, 감소시킴)
let a = 10;
let result2 = ++a;
console.log(a, result2);

let b = 10;
let result = b++;
console.log(b, result);
