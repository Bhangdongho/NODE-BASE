const express = require('express');
const app = express();
app.listen(3000);

app.get('/:id', function (req, res) {
  let { id } = req.params;
  console.log(id);
  id = parseInt(id); // "숫자" => 숫자
  console.log(db.get(id));

  if (db.get(id) == undefined) {
    res.json({
      message: '없는 상품입니다.',
    });
  } else {
    res.json({
      id: id,
      productName: db.get(id),
    });
  }
});

// localhost:3000/1 => NoteBook
// localhost:3000/2 => Cup
// localhost:3000/3 => Chair

let db = new Map();
db.set(1, 'NoteBook'); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, 'Cup');
db.set(3, 'Chair');
db.set('1', 'Bhangdongho');

// console.log(db);
// console.log(db.get(1));
// console.log(db.get('1'));
// console.log(db.get(2));
// console.log(db.get(3));
