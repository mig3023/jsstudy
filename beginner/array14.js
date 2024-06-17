// 14강 배열

// 배열: 순서가 있는 리스트 (배열은 []대괄호로 묶어주고, 쉼표로 구분해서 만듦)

// 예시
// 1번 철수, 2번 영희 ... 30번 영수 --> let students = ['철수', '영희' ... '영수'];
// 배열을 탐색할 땐 고유번호를 사용 --> index라고 함. 0부터 사용. 철수는 0, 영희는 1, 영수는 29
// 배열명 뒤에 대괄호와 index를 이용해서 값을 읽어낼 수 있음.
// console.log(students[0]); --> 철수 출력
// 수정도 가능. students[0] = '민정'; --> 첫번째 값이 철수에서 민정으로 바뀜.

// 배열의 특징
// 배열은 문자뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
  "민수",
  3,
  false,
  { name: "Mike", age: 30 },
  function () {
    console.log("test");
  },
];

// length: 배열의 길이. 즉, 배열이 가지고 있는 요소의 개수 반환. students.length --> 30

// push(): 배열 제일 뒤에 요소를 추가해주는 메소드
let days = ["월", "화", "수"];
days.push("목");
console.log(days);

// pop(): 배열 끝의 요소를 제거
days.pop();
console.log(days);

// unshift: 배열 앞 추가
days.unshift("일");
console.log(days);

// shift: 배열 앞 제거
days.shift();
console.log(days);

// push와 unshift는 여러 요소 한번에 추가 가능

// 배열을 쓰는 가장 큰 이유 중 하나는 반복을 위해서.
// length를 통해 배열의 길이를 알고 있으므로 for문 쓸 수 있음.
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
// for of
// 배열 days를 돌면서 요소를 day라는 이름으로 접근할 수 있음. for문보다는 간단하지만 index를 못 얻는다는 단점.
for (let day of days) {
  console.log(day);
}

// 다시 배열 살펴보기
let days2 = ["mon", "two", "wed"];
console.log(days2[1]); // index값이 1이므로 2번째 요소 출력

days2[1] = "화요일";
console.log(days2); // 2번째 요소인 two가 화요일로 바뀜

console.log(days2.length); // 배열길이 출력

days2.push("thu"); // 배열 끝에 목(thu) 추가
days2.unshift("sun"); // 배열 앞에 일(sun) 추가
console.log(days2);

for (let index = 0; index < days2.length; index++) {
  console.log(days2[index]);
} // for문으로 반복.

for (let day of days2) {
  console.log(day);
} // for of (여기서 day는 배열의 요소라 x, data같이 아무 이름으로 써도 됨)
