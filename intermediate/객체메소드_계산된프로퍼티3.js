// 3강 객체메소드와 계산된프로퍼티

// computed property (계산된 프로퍼티)
let a = "age";
const user = {
  name: "Mike",
  age: 30, // [a]: 30 --> 변수 a에 할당된 문자열이 들어감
};
console.log(user);

const user1 = {
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello", // 이렇게 식 자체를 넣는 것도 가능!
};
console.log(user1);

// 객체에서 사용할 수 있는 Method
// 1. Object.assign(): 객체 복제
const user2 = { name: "Mike", age: 30 };
const cloneuser = user2; // 잘못된 방법! --> 객체가 복제되는게 아니라 참조값이 저장됨.
// 즉, 하나의 객체를 두 변수가 접근하고 있는거임.
cloneuser.name = "Tom";
console.log(user2); // user2의 Mike가 변경됨.

// 다시 제대로 복제하려면..
const user3 = { name: "Mike", age: 30 };
const newUser = Object.assign({}, user3); // {}(빈 객체): 초기값, 2번째 매개변수부터 들어온 객체들이 초기값에 병합됨.
newUser.name = "Tom";
console.log(newUser);
console.log(user3); // newUser에서 이름을 바꿔도 user3의 이름엔 영향이 없음. 서로 다른 객체!

// 초기값의 다른 예시!
console.log(Object.assign({ gender: "male" }, user3)); // gender값만 있는 객체가 user3을 병합

// 키가 같다면?
console.log(Object.assign({ name: "Tom" }, user3)); // user3의 name이 덮어씀.

// 2개 이상의 객체 합치기
const user4 = { name: "Mike" };
const info = { age: 30 };
const info2 = { gender: "male" };
console.log(Object.assign(user4, info, info2));

// 2. Object.keys(): 객체 프로퍼티의 키를 배열로 반환
const user5 = { name: "Mike", age: 30, gender: "male" };
console.log(Object.keys(user5));

// 3. Object.values(): 객체 프로퍼티의 값을 배열로 반환
console.log(Object.values(user5));

// 4. Object.entries(): 키/값을 모두 배열로 반환
console.log(Object.entries(user5)); // 배열 안에 키, 값이 들어간 배열 생김

// 5. Object.fromEntries(): 키/값 배열을 객체로 반환
const arr = [
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"],
];
console.log(Object.fromEntries(arr)); // 키, 값을 쌍으로 묶은 배열들을 넣어주면 객체로 만들어줌

// 객체를 만들어주는 함수
function makeObj(key, val) {
  return {
    [key]: val,
  };
}
const obj = makeObj("나이", 33);
console.log(obj);
