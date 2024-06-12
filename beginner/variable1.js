//1강 변수
// 변수는 어떤 정보에 이름을 붙여서 저장하고 싶을 때 사용
name = "Mike"; // JS 문자열(string)에 따옴표 필수
age = 30;

// class = '수업'; //변수명으로 예약어(JS에서 이미 사용하는 단어) 사용 불가 https://www.w3schools.com/js/js_reserved.asp
// alert(age); //경고창 띄움. node.js상에서는 Web의 내장함수인 alert 실행 불가. https://codepen.io/pen/?editors=1111
console.log(name); //결과 출력

name = "Google";

let grade = "F"; // 변할 수 있는 값
grade = "A+";
console.log("🚀 ~ grade:", grade);

const PI = 3.14; //변하지 않는 값. 상수라는 걸 알리기 위해 대문자로 사용하는 게 좋음.
const BIRTH_DAY = "2000.04.27";

// 정리!! 변수명은 문자, 숫자, $, _ 만 가능. but 숫자 맨앞X. 예약어X, 이해하기 쉽게 선언
