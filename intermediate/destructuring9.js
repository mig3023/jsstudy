// 9강 구조분해할당

// destructuring assignment: 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 1. 배열 구조 분해
let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

// split 이용
let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");
console.log([user4, user5, user6]); // [ 'Mike', 'Tom', 'Jane' ]

// 기본값
let [a, b, c] = [1, 2]; // --> 기본값X
console.log(c); // undefined

let [a1 = 3, b1 = 4, c1 = 5] = [1, 2]; // --> 기본값O
console.log(a1, b1, c1); // 1 2 5

// 일부 반환값 무시
let [user7, , user8] = ["Mike", "Tom", "Jane", "Tony"];
console.log(user7); // Mike
console.log(user8); // Jane

// 바꿔치기
// 단순히 a2, b2의 값을 바꾸고 싶을 때
let a2 = 1;
let b2 = 2;
[a2, b2] = [b2, a2];
console.log(a2, b2); // 2 1

// 2. 객체 구조 분해
let user = { name: "Mike", age: 30 };
let { name, age } = user;
// let { age, name } = user; // 배열과 다르게 순서가 달라도 가능
console.log(name, age);

let { name: userName, age: userAge } = user; // 새로운 이름으로 할당 가능
console.log(userName, userAge);

// 기본값
let user9 = { name1: "Mike", age1: 30 };
let { name1, age1, gender1 } = user9; // 기본값X
console.log(gender1); // undefined

let { name2, age2, gender2 = "male" } = user9; // 기본값O
console.log(gender2);
