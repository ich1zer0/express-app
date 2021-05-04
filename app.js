const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// view engine セットアップ
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ルーティング
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const notFoundRouter = require('./routes/not-found');
// 静的ファイル
app.use('/static', express.static(path.join(__dirname, 'public')));
// ログイン
app.use('/login', loginRouter);
// ユーザー登録
app.use('/register', registerRouter);
// ホーム
app.use('/', homeRouter);
// 404 NotFound
app.use(notFoundRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
