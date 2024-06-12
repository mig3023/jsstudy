//3강 대화상자 3가지
//https://codepen.io/pen/?editors=1111

// alert(알려줌), prompt(입력받음)
const name = prompt("이름을 입력하세요.");
alert(`환영합니다, ${name}님.`);
console.log(name); // 취소 누르면 null 출력

// prompt는 2개의 인수를 가짐. 2번째 인수에 default값 입력 가능
const name2 = prompt("예약일을 입력하세요.", "2024.06.");

// confirm(확인받음) alert와 달리 취소 버튼도 있음.
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult); // 확인 --> true, 취소 --> false

// 빠르고 간단하게 적용 가능 but 창이 떠있는동안 script 일시정지됨, 스타일링 불가
