// express 모듈 세팅
const express = require('express');
const app = express();

app.listen(3000);

// 데이터 세팅
let youtuber1 = {
  channelTitle: '채널 십오야',
  sub: '633만명',
  videoNum: '1.1천개',
};

let youtuber2 = {
  channelTitle: '침착맨',
  sub: '243만명',
  videoNum: '6.9천개',
};

let youtuber3 = {
  channelTitle: '테오',
  sub: '54.8만명',
  videoNum: '726개',
};

let db = new Map(); // key - value = json
var id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

// REST API 설계
app.get('/youtubers', function (req, res) {
  var youtubers = {};
  db.forEach(function (value, key) {
    youtubers[key] = value;
  });

  res.json(youtubers);
});

app.get('/youtubers/:id', function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);
  if (youtuber == undefined) {
    res.json({
      message: '유튜버 정보를 찾을 수 없습니다.',
    });
  } else {
    res.json(youtuber);
  }
});

app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post('/youtubers', (req, res) => {
  console.log(req.body);

  // 등록..? Map(db)에 저장(put) 해줘야 한다.
  db.set(id++, req.body);

  res.json({
    message: `${db.get(id - 1).channelTitle}님, 유튜버가 된 것을 환영합니다!`,
  });
});

app.delete('/youtubers/:id', (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  var youtuber = db.get(id);
  if (youtuber == undefined) {
    res.json({
      message: `요청하신 ${id}번은 없는 유튜버입니다.`,
    });
  } else {
    const channelTitle = youtuber.channelTitle;
    db.delete(id);

    res.json({
      message: `${channelTitle}님, 아쉽지만 다음에 또 뵙겠습니다.`,
    });
  }
});
