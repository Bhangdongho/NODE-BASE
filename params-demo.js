const express = require('express');
const app = express();

// 서버 셋팅 : 포트 넘버(번호) 3000로 셋팅
app.listen(3000);

app.get('/products/:n', function (req, res) {
  // : => URL로 매개변수로 전달해주는 거라고 알아 들음
  // req.params
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담는다는 뜻
  //   console.log(req.params);
  //   console.log(req.params.n);

  let number = parseInt(req.params.n) - 10;
  console.log(number); // 숫자"숫자"

  res.json({
    num: number,
  });
});

// 채널 주소 : https://www.youtube.com/@15ya.fullmoon
// 채널 주소 : https://www.youtube.com/@ChimChakMan_Official

app.get('/:nickname', function (req, res) {
  const param = req.params;

  res.json({
    channel: param.nickname,
  });
});

// 영상 클릭 주소 : https://www.youtube.com/watch?v=fdtCUNlIQRc&t=627s
