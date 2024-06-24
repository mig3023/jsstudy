// 10강 나머지 매개변수, 전개 구문

// 함수의 인수를 얻는 방법 2가지: arguments, 나머지 매개변수

// arguments
// 함수로 넘어온 모든 인수에 접근가능, 함수 내에서 이용 가능한 지역변수, Array형태의 객체, 배열의 내장 메서드 없음(forEach, map 등)
function showName(name) {
  console.log(arguments.length); // 2
  console.log(arguments[0]); // Mike
  console.log(arguments[1]); // Tom
}
showName("Mike", "Tom");

// Rest: 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게 함 (ES6 환경에선 arguments보다 나머지 매개변수 권장)
// 예제: 전달받은 모든 수 더하기
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => {
    // forEach 사용
    result += num;
  });
  // let result = numbers.reduce((prev, cur) => prev += cur); // reduce 사용
  // console.log(result);
}
add(1, 2); // 3
add(1, 2, 3, 6, 7, 8); // 27

// user객체를 만들어 주는 생성자 함수 만들기
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "Js", "react");
const user3 = new User("Jane", 10, "English");
console.log(user1);
console.log(user2);
console.log(user3);

// spread(전개 구문)
// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
// let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result);

// 객체
let user = { name: "Mike" };
let mike = { ...user, age: 30 };
console.log(mike);

// 객체 복제
let user4 = { name: "Mike", age: 30 };
let user5 = { ...user4 };

user5.name = "Tom";
console.log(user5.name); // Tom
console.log(user4.name); // Mike --> spread연산자는 원본 객체에 영향을 주지 않기 때문에 user4의 이름은 그대로.

// arr3을 [4, 5, 6, 1, 2, 3]으로 만들기
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
// arr4.reverse().forEach((num) => {
//   arr3.unshift(num);
// });
arr3 = [...arr4, ...arr3];
console.log(arr3);

// 객체
let user6 = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "react"];
let lang = ["Korean", "English"];

user6 = { ...user6, ...info, skills: [...fe, ...lang] };
console.log(user6);
