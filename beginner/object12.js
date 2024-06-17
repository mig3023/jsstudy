// 12강 객체

// 객체? --> 중괄호로 작성, key와 값(value)로 구성된 property가 들어감.
// 각 프로퍼티는 쉼표로 구분, 마지막 프로퍼티엔 쉼표 없어도 되지만 있는게 수정, 삭제, 이동할 때 용이
const superman = {
  name: "clark",
  age: 33,
};

// 객체에 접근할 때 --> . 또는 []대괄호 사용
superman.name;
superman["age"];

// 추가
superman.gender = "male";
superman["hairColor"] = "black";

// 삭제
delete superman.hairColor;

// Object 단축 프로퍼티
const name = "clark";
const age = 33;
const superman2 = {
  name, // name: name
  age, // age: age
  gender: "male",
}; // name에는 name변수, age에는 age 변수가 들어가 있으므로 축약 가능

// Object 프로퍼티 존재 여부 확인
// 프로퍼티에 없는 값일 경우
console.log(superman2.birthday); // 에러가 발생하지 않고 undefined 출력

// in 연산자 사용 시 프로퍼티 존재 여부 확인 가능
console.log("birthday" in superman2);
console.log("age" in superman2); // in 연산자는 어떤 값이 넘어올지 알 수 없을 때 사용

// for in 반복문 (객체를 순회하면서 값을 얻을 수 있음)
for (let key in superman2) {
  console.log(key);
  console.log(superman2[key]);
}
console.log("---------------------------");
// 객체
const superman3 = {
  name: "clark",
  age: 30,
};
console.log(superman3.name);
console.log(superman3["age"]);
console.log(superman3); // 객체 자체를 출력

superman3.hairColor = "black";
superman3["hobby"] = "football"; // 추가
console.log(superman3);

delete superman3.age; // age 삭제
console.log(superman3);

console.log("----------------------------");
// 이름과 나이를 받아서 객체를 반환하는 함수 만들기
function makeObject(name, age) {
  return {
    name: name, // name,
    age: age, // age,
    hobby: "football",
  };
}
const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);

// 성인인지 아닌지 확인해주는 함수
function isAdult(user) {
  if (user.age < 20) {
    return false;
  }
  return true;
}
const Mike2 = { name: "Mike", age: 30 };
const Jane = { name: "Mike" };
console.log(isAdult(Mike2));
console.log(isAdult(Jane)); // Jane은 age가 없는데 true가 나와버림

// 고쳐보기
function isAdult2(user) {
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}
console.log(isAdult2(Mike2));
console.log(isAdult2(Jane)); // false로 제대로 나옴

// for in문 예제
const Mike3 = { name: "Mike", age: 30 };
for (key in Mike3) { // key는 Mike가 가지고 있는 프로퍼티를 의미. data, k, x처럼 다른 값이 되어도 됨.
  console.log(key); // Mike의 키값 출력
  console.log(Mike3[key]); // Mike의 value값 출력
}
