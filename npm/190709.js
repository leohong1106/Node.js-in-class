const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const app = express();
const port = 3000;


// html 렌더링 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(morgan('dev'));


app.use(express.urlencoded({
   extended: false // querystring 모듈 사용
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieparser());





app.get('/test/setCookie', (req, res) => {
   console.log('/test/setCooke');

   res.cookie('user', {'name': '홍길동', 'id':'user01'});

   res.redirect('/test/getCookie');
});

app.get('/test/getCookie', (req, res) => {
   console.log(req.cookies);

  
   res.render('test/getcookie.html', {cookie: req.cookies});
});
