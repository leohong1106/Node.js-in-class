const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//html 렌더링 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//html파일을 ejs라는 파일을 통해 클라이언트의 브라우저에 뿌려주는 역할

var sampleCarList = [{
    carNumber: '11주1111',
    owner: '홍길동',
    model: 'SONATA',
    company: 'HYUNDAI',
    numOfAccident: 2,
    numOfOwnerChange: 1
},

{
    carNumber: '22주2222',
    owner: '손오공',
    model: 'MORNING',
    company: 'KIA',
    numOfAccident: 1,
    numOfOwnerChange: 3
}
];

var sampleUserList = [{
    no: '1',
    id: 'user01',
    name: '유저01',
    e_mail: 'user01@user.com',
    numOfAccident: 2,
    numOfOwnerChange: 1
},
{
    no: '2',
    id: 'user02',
    name: '유저02',
    e_mail: 'user01@user.com',
    numOfAccident: 2,
    numOfOwnerChange: 1
}];

app.get('/userlist', (req, res) => {
    res.render('userlist.html');
})

app.post('/api/regcar', (req, res) => {
    console.log('확인3');
    console.log(req.body);
    console.log('확인4');
    sampleCarList.push(req.body);
    res.json(sampleCarList);
});





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

app.get('/api/carlist', (req, res) => {
    res.json(sampleCarList);
})

app.get('/carlist', (req, res) => {
    res.render('carlist.html');
})

app.get('/carlist2', (req, res) => {
    res.render('carlist2.html', {carlist: sampleCarList, userid: 'hong'});
})

app.listen(port, () => {
    console.log('server listening...' + port);
});

