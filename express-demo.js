const express = require('express');
const app = express();

// 서버 셋팅 : 포트 넘버(번호) 3000로 셋팅
app.listen(3000);

// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World');
});

let nodejsBook = {
  title: 'Node.js를 공부해보자',
  price: 20000,
  description: '이 책이 쏼라쏼라~',
};

app.get('/products/1', function (req, res) {
  res.json(nodejsBook);
  // res.send(20000);
});
