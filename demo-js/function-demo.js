// 함수 선언문
function add1(x, y) {
  return x + y;
}

//함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 화살표 함수 (arrow function)
const add3 = (x, y) => {
  return x + y;
};

// 화살표 함수
var add4 = (x, y) => x + y;

console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
