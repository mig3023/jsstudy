// 8강 반복문 (for, while, do while)

// 반복문 (loop) --> 동일한 작업을 여러번 반복

// for문 (세미콜론으로 구분됨, 초기값 설정(반복문 진입 시 처음 한번만 실행됨),
// 조건(반복문이 돌면서 조건을 확인하고 false가 되면 멈춤), 반복문 실행 후 해야 할 작업)
for (let i = 0; i < 10; i++) {
  // 반복할 코드
}
// 즉, 초기값 지정 후 조건이 true면 코드를 실행하고 괄호 세번째 부분 작업 실행,
// 다시 조건 확인.. 반복하다가 조건이 false면 반복문 빠져나옴

// 1부터 10까지 출력
for (let i = 0; i < 10; i++) {
  console.log(i);
} // 0부터 9까지만 출력됨
console.log("---------------------");
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while (while 다음 괄호에 조건문 입력. 조건문이 true일 때 계속 반복(주의해서 사용해야함))
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do.. while (조건문을 아래로 옮길 수 있음. do 내부의 코드 실행 후 조건문 체크.
// 최소 한번은 실행하므로 whlie과 차이가 있음.)
let a = 0;
do {
  // 코드
  a++;
} while (a < 0);

// 반복문을 빠져나오는 기능 (break, continue)
// break : 만나는 순간 즉시 코드 실행을 멈추고 빠져나옴
// continue: 코드 실행을 멈추는 것까진 동일. but 빠져나오지 않고 다음 반복으로 진행

//break --> https://codepen.io/pen/?editors=1111
// break를 만나려면 answer가 false가 되어야 하는데
// 취소를 누르면 answer에 false가 들어감. 즉, !answer는 true가 되므로 break를 만나고 반복이 끝남
while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}

// continue (짝수만 출력하고 싶을 때)
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
// 2로 나눴을 때 나머지가 0이면 false이기 때문에 continue를 만나지 못하고 로그를 찍음.
// 1을 2로 나누면 나머지가 1, 즉 true이기 때문에 continue문을 만나서 로그를 찍지 않음.
// 이 과정을 반복해서 짝수만 남게 됨.
