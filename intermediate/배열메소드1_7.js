// 7강 배열메소드1

// splice
// arr.splice(n, m): 배열의 특정 요소 지움 --> n: 시작 인덱스, m: 개수
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
// arr.splice(1); // n만 있고 아무것도 없으면 1부터 다 지워
console.log(arr); // [1, 4, 5]

// arr.splice(n, m, x): 특정 요소 지우고 추가
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2, 100, 200);
console.log(arr1); // [1, 100, 200, 5] --> 뒤가 아닌 지워진 자리에 추가됨

// 만약 m자리에 0이 들어간다면.. --> 아무것도 지우지 않고 추가 가능
let arr2 = ["나는", "철수", "입니다."];
arr2.splice(1, 0, "대한민국", "소방관");
console.log(arr2);

// 삭제된 요소 반환하기
let arr3 = [1, 2, 3, 4, 5];
let result = arr3.splice(1, 2);
console.log(result); // [2, 3]

// slice
// arr.slice(n, m): n부터 m 바로 앞자리까지 반환
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.slice(1, 4)); // [2, 3, 4]
console.log(arr4); // [1, 5]X [1, 2, 3, 4, 5]O why?--> slice는 원래 배열엔 아무런 영향도 안미침!

// n만 있으면 n부터 배열 끝까지 반환
console.log(arr4.slice(1)); // [2, 3, 4, 5]

// 괄호 안에 아무것도 없으면 배열 복사
console.log(arr4.slice());

// concat
// arr.concat(arr2, arr3..): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새배열 반환
let arr5 = [1, 2];
console.log(arr5.concat([3, 4]));
console.log(arr5.concat([3, 4], [5, 6]));
console.log(arr5.concat([3, 4], 5, 6));
console.log(arr5); // [1, 2] --> slice와 마찬가지로 기존 배열에 영향 안줌

// forEach
// arr.forEach(fn): 함수를 인수로 받아서 배열 반복
// fn 3개 매개변수 --> forEach(item, index, arr) --> arr은 배열 자체를 의미. 보통 생략
let arr6 = ["Mike", "Tom", "Jane"];
arr6.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// arr.indexOf(), arr.lastIndexOf(): 찾는 요소의 인덱스 반환
let arr7 = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr7.indexOf(3)); // 2
console.log(arr7.indexOf(6)); // 찾는 문자가 없으면 -1 반환
console.log(arr7.indexOf(3, 3)); // 7 --> 2번째 인수는 시작 위치
console.log(arr7.lastIndexOf(3)); // 7 --> 끝에서부터 찾음

// arr.includes(): 포함하는지만 확인
console.log(arr7.includes(3)); // true
console.log(arr7.includes(8)); // false

// arr.find(fn), arr.findIndex(fn): 함수를 인자로 받아서 찾음
// arr.find(fn): 첫번째 true값만 반환하고 끝. 없으면 undefined 반환
let arr8 = [1, 2, 3, 4, 5];
const result1 = arr8.find((item) => {
  return item % 2 === 0; // 짝수만 찾고싶은
});
console.log(result1);

// 예시2: 미성년자 찾기
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
const result2 = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result2); // { name: 'Tom', age: 10 }

// arr.findIndex(fn): 해당 index 반환. 없으면 -1 반환
let userList1 = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
const result3 = userList1.findIndex((user) => {
  // findIndex로 바꿈
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result3); // 2

// arr.filter(fn): 조건을 만족하는 모든 요소를 배열로 반환. find와 사용법은 같음
let arr9 = [1, 2, 3, 4, 5];
const result4 = arr9.filter((item) => {
  // find --> filter로 변경
  return item % 2 === 0;
});
console.log(result4);

// arr.reverse(): 역순으로 재정렬
console.log(arr9.reverse()); // [5, 4, 3, 2, 1];

// arr.map(): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let userList2 = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];
let newUserList = userList2.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});
console.log(newUserList);

// join: 배열을 합쳐서 문자열 만듦
let arr10 = ["안녕", "나는", "철수야"];
console.log(arr10.join()); // 인수로 아무것도 안주면 쉼표(,)로 구분
console.log(arr10.join(" ")); // --> 안녕 나는 철수야

// split: 문자열을 나눠서 배열로 만듦. 괄호 안: 어떤 문자 기준으로 나눌건지
const users = "Mike,Jane,Tom,Tony";
console.log(users.split(","));
console.log(users.split("")); // ?? length가 0인 문자열을 전달했기 때문에, 문자별로 잘라서 한글자씩(공백포함) 리턴

// Array.isArray(): 배열인지 아닌지 확인
let userList3 = ["Mike", "Jane", "Tom"];
console.log(typeof userList3); // JS에서 배열은 객체형에 속해서 typeof는 객체라고 알려줌
console.log(Array.isArray(userList3));
