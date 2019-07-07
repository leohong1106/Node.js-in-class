const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//html 렌더링 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//html파일을 ejs라는 파일을 통해 클라이언트의 브라우저에 뿌려주는 역할



app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/signin_form', (req, res) => {
    res.render('signin_form.html');
})

app.post('/signin', (req, res) => {
    console.log('signin 요청');
    console.log(req.body);
    res.render('login_form.html');
})

app.get('/login_form', (req, res) => {
    res.render('login_form.html');
})

app.post('/login', (req, res) => {
    console.log('login 요청');
    console.log(req.body);
    // res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    // res.write('<h4>로그인이 완료되었습니다.</h4>');

    // res.end();

    res.render('carlist.html');
})

app.get('/regcar_form', (req, res) => {
    res.render('regcar_form.html');
})

app.get('/regcar', (req, res) => {
    res.render('carlist.html');
})

app.get('/carinfo', (req, res) => {
    res.render('carinfo.html');
})

app.get('/carhistory', (req, res) => {
    res.render('carhistory.html');
})

app.get('/carlist', (req, res) => {
    res.render('carlist.html');
})

app.listen(port, () => {
    console.log('server listening...' + port);
});