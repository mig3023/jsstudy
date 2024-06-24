// 13강 call, apply, bind

// JS는 함수 호출방식과 관계없이 this를 지정할 수 있음.

// call: 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음.
const mike = { name: "Mike" };
function showThisName() {
  console.log(this.name);
}
showThisName(); // 아무것도 전달받지 않음. 이때 this는 window를 가리킴
showThisName.call(mike); // 함수 호출하는 call 사용, this로 사용할 객체 전달

// mike 객체정보 없데이트하기
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(mike, 1999, "singer"); // 첫번째 매개변수: this로 사용될 값, 두번째 매개변수부터: 함수가 사용할 매개변수
console.log(mike);

// apply: 함수 매개변수를 처리하는 방법을 제외하면 call과 동일. apply는 매개변수를 배열로 받음.
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.apply(mike, [1999, "singer"]);
console.log(mike); // call과 동일한 결과

// apply는 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용함.
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.apply(null, nums); // 첫번째는 this로 사용될 값인데 Math.min, Math.max는 this가 필요하지 않아서 아무값이나 넣은 것임.
console.log(minNum);
console.log(maxNum);
const maxNum1 = Math.max.call(null, ...nums); // call을 쓰려면 괄호를 없애줘야 하므로 spread 연산자 사용
console.log(maxNum1);

// bind: 함수의 this값을 영구히 바꿀 수 있음.
// 위에서 본 update예제에서.. update를 이리저리 옮기면서 호출해도 this값은 Mike가 되게 할 수 있음
const mike1 = { name: "Mike" };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
const updateMike = update.bind(mike1);

updateMike(1980, "police"); // updateMike는 항상 mike1을 this로 가짐.
console.log(mike1);

// 실제 사용 예제
const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};
user.showName(); // hello, Mike
let fn = user.showName;
fn(); // hello, undefined --> fn에 할당할 때 this를 잃어버린 것임.

fn.call(user); // call을 하고 this로 사용할 값 user를 넣어준다.
fn.apply(user); // apply를 써도 동일
fn.bind(user); // --> 이건 왜 안됨...?

let boundFn = fn.bind(user); // user로 this값을 갖도록 함.
boundFn(); // hello, Mike
