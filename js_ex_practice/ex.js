// 2
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);
// 출력[(200, 100, 10000, 300)];

// 5
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 1) {
  a += i;
}

// 9
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
console.log(result);
// 출력
// 2019/04/26 11:34:27

// 10 (갑자기 난이도 뭔데)
// const n = prompt("숫자를 입력하세요.");
// let tree = "";

// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += "*";
//   }
//   tree += star + "\n";
// }

// console.log(tree);

// 11
let s = 0;

for (let i = 1; i <= 100; i++) {
  s += i;
}
console.log(s);
