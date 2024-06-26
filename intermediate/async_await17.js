// 17강 async, await

// async, await을 사용하면 Promise의 then 메서드를 chain형식으로 호출하는 것보다 가독성이 좋음

async function getName() {
  return "Mike";
  // return Promise.resolve("Mike");

  // throw new Error("x");
  // return Promise.reject("x"); // 이것도 되네
}

console.log(getName()); // Promise

getName().then((name) => {
  console.log(name);
});

// 함수 내부에서 예외 발생 시 rejected 상태의 Promise 반환
getName().catch((err) => {
  console.log(err);
});

// await은 async 함수 내부에서만 사용 가능

// 16강 Promise 예제
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
      // res("2번 주문 완료");
      rej("xxx");
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

async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
  console.log("종료");
}
order();

// rejected 시 try catch문 사용
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();

// // Promise.all 사용
async function order() {
  try {
    const result1 = await Promise.all([f1(), f2(), f3()]);
    console.log(result1);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
