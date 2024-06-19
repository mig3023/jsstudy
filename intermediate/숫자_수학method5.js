// 5강 숫자, 수학 method

// toString() --> 숫자를 문자로 바꿔줌 (괄호 안에 숫자를 넣으면 그 진법으로 변환해줌)
let num = 10;
console.log(num.toString());
console.log(num.toString(2)); // 2진수로 표현
let num1 = 255;
console.log(num1.toString(16)); // 16진수로 표현
// Red RGB값: 255 0 0 --> 16진수: ff0000

// Math method
// Math.Ceil(): 올림
let num2 = 5.1;
let num3 = 5.7;
console.log(Math.ceil(num2)); // 6
console.log(Math.ceil(num3)); // 6

// Math.floor(): 내림
console.log(Math.floor(num2)); // 5
console.log(Math.floor(num3)); // 5

// Math.round(): 반올림
console.log(Math.round(num2)); // 5
console.log(Math.round(num3)); // 6

// 소수점 자릿수를 구하고 싶을 때...
let userRate = 30.1234; // --> 소수점 둘째자리까지만 구하고 싶을 때
console.log(Math.round(userRate * 100) / 100); // Math.round 사용

// toFixed 사용 (괄호에 나타내고 싶은 자릿수 입력)
console.log(userRate.toFixed(2));
console.log(userRate.toFixed(0)); // 정수부만 반환
console.log(userRate.toFixed(6)); // 소수부 개수를 넘는건 0으로 채워줌
// toFixed에서 주의해야할 점! --> 문자열 반환
console.log(userRate.toFixed(2)); // 문자열: 흰색
console.log(Number(userRate.toFixed(2)));
console.log(+userRate.toFixed(2)); // 숫자: 노란색

// isNaN(): NaN(Not a Number)인지 아닌지 판단
let x = Number("x"); // NaN
console.log(x == NaN);
console.log(x === NaN);
console.log(NaN === NaN); // NaN은 자기 자신도 똑같지 않다고 판단
console.log(isNaN(x)); // true
console.log(isNaN(3)); // false

// parseInt(): 문자열을 숫자로 바꿔줌, 정수만 반환 (number와 다른점: 문자가 혼용되어 있어도 동작함)
// but 숫자로 시작되는 문자열이어야 함
let margin = "10px";
console.log(parseInt(margin)); // 10
let redColor = "f3";
console.log(parseInt(redColor)); // NaN

// 2번째 인수에 변환될 진수를 지정하면 10진수로 반환해줌
console.log(parseInt(redColor, 16)); // 243
console.log(parseInt("11", 2)); // 3

// parseFloat(): parseInt와 동일하게 동작 but 부동소수점 반환
let padding = "18.5%";
console.log(parseFloat(padding)); // 18.5
// (부동소수점 이해 잘 못했음)

// Math.random(): 0~1사이 무작위 숫자 생성
console.log(Math.floor(Math.random() * 100) + 1);

// Math.max(): 최댓값 반환, Math.min(): 최솟값 반환
console.log(Math.max(1, 4, -1, 7.5, 10)); // 10
console.log(Math.min(1, 4, -1, 7.5, 10)); // -1

// Math.abs(): 절댓값
console.log(Math.abs(-1)); // 1

// Math.pow(n, m): 제곱 반환
console.log(Math.pow(2, 10)); // 1024

// Math.sqrt(): 제곱근 반환(루트 씌워줌)
console.log(Math.sqrt(16)); // 4
