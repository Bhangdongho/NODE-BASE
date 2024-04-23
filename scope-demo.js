if (true) {
  var num1 = 7;
  const num2 = 3; // 블록 {} 스코프, 초기화 이후 값을 못 바꾼다.
  let num3 = 5; // 블록 {} 스코프, 초기화 이후 값 바꿀 수 있다.

  //num2 = 10;
  //const로 선언되었다면, 값을 바꿀 수가 없다.
  num3 = 21;

  console.log(num1 + ' X ' + num2 + ' = ' + num3); //쓸 수는 있지만 연산속도가 느리고 요즘은 잘 안쓰는 방법
  console.log(`${num1} X ${num2} = ${num3}`); //템플릿 문자열
}

console.log(num1);
//console.log(num2)
//console.log(num3)
