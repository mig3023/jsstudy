// 7강 논리연산자 (AND, OR, NOT)

// || (OR) --> 여러개 중 하나라도 true면 true 반환. 모든 값이 false일 때만 false 반환
// 첫번째 true 발견 즉시 평가 멈춤

// && (AND) --> 모든 값이 true일때만 true 반환. 하나라도 false면 false 반환
// 첫번째 false를 발견하는 즉시 평가 멈춤

// ! (NOT) --> true와 false를 반대값으로 바꿔줌. ture면 false, false면 true

// 스티브잡스 예시 PASS

// 코드에서 평가 배치 중요함.
// 운전면허가 있고 시력이 좋은 여군 --> 만약 여군이 전체 군인의 7%라면?
// 여군인데 시력이 좋고 운전면허가 있는 사람으로 조건의 순서를 바꿨을 때,
// 첫번째 평가에서부터 93 % 를 걸러내므로 시간 절약. 이런 작업들이 성능 최적화에 도움을 줌.

// OR
// 이름이 TOM 이거나 성인이면 통과
const name = "Mike";
const age = 30;
if (name === "Tom" || age > 19) {
  console.log("통과");
} else {
  console.log("돌아가");
} // name은 다르지만 성인이므로 '통과'

// AND
const name1 = "Mike";
const age1 = 30;
if (name1 === "Mike" && age1 > 19) {
  console.log("통과");
} else {
  console.log("돌아가");
}

// NOT (성인이 아니면 돌아가)
const age2 = 10; // 영상에선 prompt 씀
const isAdult = age2 > 19;

if (!isAdult) {
  console.log("돌아가");
}

// 비교연산자 우선순위
// 남자이고 이름이 Mike이거나 성인이면 통과
const gender = "F";
const name3 = "Jane";
const isAdult2 = true;
if ((gender === "M" && name3 === "Mike") || isAdult2) {
  console.log("통과"); // 여자이고 이름도 다르지만 성인이기 때문에 통과
}
// AND가 OR보다 우선순위가 높아서 먼저 평가됨.
