const express = require('express');
const app = express();

app.listen(3000);

// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World');
});

// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test', function (req, res) {
  res.send('Test');
});

// API : GET + "http://localhost:3000/test/1"
// "One!!"
app.get('/test/1', function (req, res) {
  res.send('One!!');
});

// /hello, /bye, /nicetomeetyou
app.get('/hello', function (req, res) {
  res.send('안녕하세요');
});

app.get('/bye', function (req, res) {
  res.send('안녕히 가세요');
});

// GET 메소드로, '/nicetomeetyou'이 날아오면
// 매개변수로 전달받은 콜백 함수를 호출한다. => 서버에 셋팅
app.get('/nicetomeetyou', function (req, res) {
  res.send('만나서 반갑습니다');
});
