// 6강 문자열메소드

// 줄바꿈 표현하는 법
// `백틱은 여러줄 포함 가능
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.`;

// 작은 따옴표는 \n을 쓰고 한줄에 써야함. (prettier깔면 의미없는듯)
let desc1 = "오늘은 맑고 화창한\n날씨가 계속되겠습니다.";

// 문자열도 배열처럼 length구할 수 있음
let desc2 = "안녕하세요.";
console.log(desc2.length);

// 특정 위치에 접근도 가능
console.log(desc2[2]);

// but 배열과 다르게 한글자만 바꾸는 건 안됨.
desc2[4] = "용";
console.log(desc2); // 안녕하세용X, 안녕하세요 그대로.

// toUpperCase(): 모든 영문을 대문자로 변경
let desc3 = "Hi guys, Nice to meet you.";
console.log(desc3.toUpperCase());
// toLowerCase(): 모든 영문을 소문자로 변경
console.log(desc3.toLowerCase());

// .indexOf(text): 문자를 인수로 받아서 몇번째 위치하는지 알려줌.
// 포함된 문자가 여러개라도 첫번째 위치만 반환
console.log(desc3.indexOf("to")); // 14
console.log(desc3.indexOf("man")); // 찾는 문자가 없으면 -1 반환
if (desc3.indexOf("Hi") > -1) {
  console.log("Hi가 포함된 문장");
} // if문을 쓸 땐 조건이 0이 되지 않도록 조건이 -1보다 크도록 명시해주기

// .slice(n, m): 특정 범위의 문자열만 반환
// n: 시작점, m: 없음--> 문자열 끝까지, 양수--> 그 숫자까지(그 숫자는 포함X), 음수--> 끝에서부터 셈
let desc4 = "abcdefg";
console.log(desc4.slice(2));
console.log(desc4.slice(0, 5));
console.log(desc4.slice(2, -2));

// .substring(n, m): n과 m사이 문자열 반환 (n과m을 바꿔도 동작함. 음수는 0으로 인식)
console.log(desc4.substring(2, 5));
console.log(desc4.substring(5, 2));

// .substr(n, m): n부터 시작해 m개를 가져옴
console.log(desc4.substr(2, 4));
console.log(desc4.substr(-4, 2)); // ??이해못함

// .trim(): 앞 뒤 공백 제거
let desc5 = "   coding         ";
console.log(desc5.trim());

// .repeat(n): n번 반복
let hello = "hello!";
console.log(hello.repeat(3));

// 문자열 비교 (문자열도 숫자처럼 크기 비교 가능. ASCII 코드표 참고)
console.log("A" < "a");
console.log("a" < "c"); // 그냥 A부터 Z로 갈수록 커지고, 대문자보다 소문자가 크다 정도만 알기.

// slice 예제
// 책리스트에서 제목만 출력하기
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];
let newList = [];
for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}
console.log(newList);

// indexof의 if문 다시 연습
// 금칙어: 콜라
function hasCola(str) {
  if (str.indexOf("콜라")) {
    console.log("금칙어 존재");
  } else {
    console.log("통과");
  }
}
hasCola("사이다가 짱이야"); // 찾는 문자가 없으면 -1을 반환한다고 했으므로 if 조건이 true가 돼서 금칙어 있다고 나옴.
hasCola("무슨 소리 콜라가 최고");
hasCola("콜라"); // 콜라가 제일 앞에 있어서 index가 0이므로 if 조건이 false가 됨. 그래서 통과 출력됨.

/// 제대로 고쳐보자
function hasCola2(str) {
  if (str.indexOf("콜라") > -1) {
    // > -1 추가
    console.log("금칙어 존재");
  } else {
    console.log("통과");
  }
}
hasCola2("사이다가 짱이야");
hasCola2("무슨 소리 콜라가 최고");
hasCola2("콜라");

// includes 활용 (문자가 있으면 true, 없으면 false 반환)
function hasCola3(str) {
  if (str.includes("콜라")) {
    // > -1 추가
    console.log("금칙어 존재");
  } else {
    console.log("통과");
  }
}
hasCola3("사이다가 짱이야");
hasCola3("무슨 소리 콜라가 최고");
hasCola3("콜라");
