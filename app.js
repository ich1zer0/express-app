const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index');
const port = 3000;

// view engine セットアップ
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 静的ファイル
app.use('/static', express.static(path.join(__dirname, 'public')));
// ルーティング
app.use(router);
// サーバー起動
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
