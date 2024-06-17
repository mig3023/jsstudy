// 9강 switch문

// 모든 swith문은 if else로도 쓸 수 있지만, 케이스가 다양할 경우 더 간결하게 쓸 수 있다는 장점이 있음.

// if문과 비교
// switch (평가) {
//   case a:
//   // a일 때 코드
//   case b:
//   // b일 때 코드
//   // ...
// }

// if (평가 == a) {
//   // a일 때 코드
// } else if (평가 == b) {
//   // b일 때 코드
// }

// switch 괄호 안의 값과 동일한 케이스를 찾아 코드를 실행. break를 만나면 코드를 빠져나감.
// break가 없으면 해당 case일 때 그 이후의 모든 코드를 다 실행
// 사고싶은 과일 가격 알려주기 예시
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("100원");
    break;
  case "바나나":
    console.log("200원");
    break;
  case "키위":
    console.log("300원");
    break;
  case "멜론":
  case "수박":
    console.log("500원"); // 출력값이 같을 땐 이렇게 써도됨.
    break;
  default:
    console.log("그런 과일 없음"); // case 이외의 모든 경우는 default 사용
}
