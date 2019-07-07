const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded ({
    extended: false // querystring 모듈 사용
}))

app.get('/',(req, res) => {
    res.send('<h3>honme p</h3>')
});

app.post('/login', (req, res) => {
    console.log('/login 요청');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    res.write('<h4>로그인이 완료되었습니다.</h4>');
    res.end();
    // res.send(req.body);
});

app.post('/signin', (req, res) => {
    console.log('/signin 요청');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    res.write('<h2>회원가입이 되었습니다.</h2>');
    res.write('축하합니다');
    res.end();
    // res.send(req.body);
});

app.listen(port, () => {
    console.log('server listening...' + port)
});