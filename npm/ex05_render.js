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
    res.send('<h1>Home Page</h1>')
})

app.get('/html', (req, res) => {
    res.render('test.html');
})

app.listen(port, () => {
    console.log('server listening...' + port);
});