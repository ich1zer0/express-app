import express from 'express';
import path from 'path';
import router from './routes/index';
const app = express();
const port = 3000;

// view engine セットアップ
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 静的ファイル
app.use('/static', express.static(path.join(__dirname, 'public')));
// ルーティング
app.use(router);
// サーバー起動
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
