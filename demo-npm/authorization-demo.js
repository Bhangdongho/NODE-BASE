var jwt = require('jsonwebtoken'); // jwt 모듈 소환
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// 서버 셋팅 : 포트 넘버(번호) 3000로 셋팅
app.listen(process.env.PORT);

// GET + "/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
  var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);

  // 토큰 쿠키에 담기
  res.cookie('jwt', token, {
    httpOnly: true,
  });
  res.send('토큰 발행 완료!');
});

// GET + "/jwt/decoded" : 토큰을 검증
app.get('/jwt/decoded', function (req, res) {
  var decoded = jwt.verify(token, process.env.PRIVATE_KEY);

  res.send(decoded);
});
