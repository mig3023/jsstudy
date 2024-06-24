// 8강 배열메소드2

// arr.sort(): 배열 재정렬 (배열 자체가 변경됨)
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);

let arr1 = ["a", "c", "d", "e", "b"];
arr1.sort();
console.log(arr1);

let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2); // [5, 8, 13, 27]X [13, 27, 5, 8]O why?--> 정렬할 때 요소를 문자열로 취급해서 1, 2를 먼저 인식

// 제대로 고쳐보기
let arr3 = [27, 8, 5, 13];
function fn(a, b) {
  return a - b;
}
arr3.sort(fn);
// arr3.sort((a, b) => {
//   return a - b;
// });
console.log(arr3);
// 복잡하기 때문에 lodash같은 라이브러리 사용함. 위 코드는 _.sortBy(arr); 로 간단하게 적용 가능.

// arr.reduce(): 누적값 출력 --> (누적 계산값, 현재값) =>{return 계산값};
let arr4 = [1, 2, 3, 4, 5];
const result = arr4.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(result);

// 예시2
// 성인들의 이름만 출력하기
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];
let result1 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result1);

// 나이의 합 출력하기
let userList1 = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 43 },
  { name: "Steve", age: 60 },
];
let result2 = userList1.reduce((prev, cur) => {
  return (prev += cur.age); // (+만 해도 되지 않나..?)
}, 0);
console.log(result2); // 196
