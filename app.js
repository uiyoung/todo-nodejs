const express = require('express');
require('dotenv').config();
const nunjucks = require('nunjucks');

const app = express();
app.set('port', 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

const indexRouter = require('./routes');
const todoRouter = require('./routes/todo');

app.use(express.json());

app.use('/', indexRouter);
app.use('/todo', todoRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(`server listening on port ${app.get('port')}`);
});
