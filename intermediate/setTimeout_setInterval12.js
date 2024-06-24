// 12강 setTimeout, setInterval

// setTimeout: 일정 시간이 지난 후 함수를 실행
// fn을 3초 뒤 실행
function fn() {
  console.log(3);
}
setTimeout(fn, 3000);

// 함수를 전달하지 않고 직접 코드를 작성해도 됨
setTimeout(function fn() {
  console.log(3);
}, 3000);

// 인수가 필요한 경우. 시간 뒤에 적어줌
function showName(name) {
  console.log(name);
}
setTimeout(showName, 3000, "Mike");

// clearTimeout: 예정된 작업을 없앰
function showName1(name) {
  console.log(name);
}
const tId = setTimeout(showName1, 3000, "Mike");
clearTimeout(tId); // 3초가 지나기 전에 이 코드가 실행돼서 아무일도 일어나지 않음.

// setInterval: 일정 시간 간격으로 함수를 반복
function showName(name) {
  console.log(name);
}
const tId1 = setInterval(showName, 3000, "Mike"); // 3초마다 Mike 출력
clearInterval(tId1);

// 유저의 접속시간 5초동안만 보여주기
let num = 0;
function showTime() {
  console.log(`안녕하세요, 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId2);
  }
}
const tId2 = setInterval(showTime, 1000);

// delay가 0이면?
setTimeout(function () {
  console.log(2);
}, 0);
console.log(1); // 2가 아닌 1부터 찍힘 why? --> 현재 실행중인 script가 종료된 이후 스케줄링 함수가 실행되기 때문.
// + 브라우저 기본 대기시간: 4ms --> 0이라고 적어도 4ms 이상이 걸릴 수 있음.
