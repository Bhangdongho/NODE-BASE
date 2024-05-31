// async-await : Promise 객체를 좀 더 쉽고 편하게 사용 문법
// 즉, 비동기 처리가 쉽다.

// await은 async 함수 안에서만 동작!
// await이 .. Promise 객체.then.() 이 메소드를 좀 더 쉽게 사용할 수 있는 방법

// async의 두번째 기능
// Promise 객체가 일이 끝날 때까지 기다릴 수 있는
// 공간을 제공한다!

async function f() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('완료!'), 3000);
  });

  let result = await promise;
  // promise 객체가 일 다 할때까지 기다려줌

  console.log(result);
}

f();
