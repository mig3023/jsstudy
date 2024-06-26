// 16강 Promise

// 어떤 일이 완료된 후 실행되는 함수 --> callback 함수
// ES6부터 Promise 도입됨. callback함수의 단점 해결. callback헬, 가독성 등등..

// Promise
const pr = new Promise((resolve, reject) => {
  // code
});

// new Promise 생성자가 반환하는 promise객체는 state와 result를 프로퍼티로 가짐.
// resolve(성공 시) 호출
// state: pending(대기) --> fulfilled(이행됨)
// result: undefined --> value(resolve함수로 전달된 값)

// reject(실패 시) 호출
// state: pending(대기) --> rejected(거부됨)
// result: undefined --> error(reject 함수로 전달된 error)

// then을 이용해서 resolve와 reject 처리 가능
// 첫번째 인수(promise가 이행되었을 때 실행), 두번째 인수(거부되었을 때 실행하는 함수)
const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

pro.then(
  function (result) {
    console.log(result + "가지러 가자."); // resolve로 실행되어서 OK가지러 가자 출력됨
  },
  function (err) {
    console.log("다시 주문해주세요..");
  }
);

// then 이외에 사용할 수 있는 것 --> catch, finally
// catch --> reject인 경우, 즉 에러가 발생한 경우에만 실행됨
pro
  .then(function (result) {
    console.log(result + "가지러 가자.");
  })
  .catch(function (err) {
    console.log("다시 주문해주세요..");
  });
// catch 장점: 가독성 좋음, 첫번째 함수 실행 후 나는 에러도 잡아줄 수 있음(??)

// finally: 이행이든 거부든 처리가 완료되면 항상 실행
pro
  .then(function (result) {
    console.log(result + "가지러 가자.");
  })
  .catch(function (err) {
    console.log("다시 주문해주세요..");
  })
  .finally(function () {
    console.log("---끝---");
  });

// 예제
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
      // rej("xxx");
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log) // 에러처리 해줌 (이걸 쓰면 reject이 돼도 넘어가 주는?)
  .finally(() => {
    console.log("끝");
  }); // promise가 계속 연결되는 것 --> Promise chaining

// Promise.all: 제일 오래걸리는 시간에 맞춰서 동시에 처리해줌 --> (이 예제에선 약 3초)
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});
// Promise.all 에 전달한 f2() 와 f3() 는 message 를 받아서 보여줘야 되는데, 
// 괄호가 비어있어서(즉, 아무 message 도 전달하지 않아서) undefined 가 나온다!

// Promise.all 주의해야 할 점! reject가 하나라도 있으면 작동 안됨.
// 하나의 정보라도 누락되면 페이지를 보여주면 안되는 상황 등에 사용 할 수 있음.

// Promise.race: 하나라도 완료되면 끝냄
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
});
