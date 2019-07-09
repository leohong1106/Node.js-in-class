const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cookieparser = require('cookie-parser');
const port = 3000;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
var hasher = require('pbkdf2-password')();



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


//html 렌더링 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//html파일을 ejs라는 파일을 통해 클라이언트의 브라우저에 뿌려주는 역할


app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: '1A@W#E$E',
    resave: false,
    saveUninitialized: true,
}));
//express-session 사용할때 쓰는것


app.use(cookieparser());
//cookie 사용할때 쓰는것

app.use(session({
    secret: '1A@W#E$E',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
 }));
//session-file-store 사용할때 쓰는것 


app.use(morgan('dev'));
//morgan 사용할때 쓰는것



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


app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/signin_form', (req, res) => {
    res.render('signin_form.html');
})

app.post('/signin', (req, res) => {
    console.log('signin 요청');
    console.log(req.body);

    let user = {
        no: '3',
        name: req.body.name,
        id: req.body.userid,
        password: req.body.password,
        birth: req.body.birth,
        hobby: req.body.hobby,
        e_mail: req.body.email,
    }

    sampleUserList.push(user);
    console.log(sampleUserList);





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
    //res.cookie('user', { 'id': req.body.id, 'pw': req.body.password })
    //user라는 이름으로 쿠키를 저장

    let id=req.body.id;
    let password=req.body.paswword;
    for (let i = 0; i < sampleUserList.length; i++) {
        
    }


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
    console.log(req.cookies);
    res.render('carlist.html', { hallo: req.cookies.user });
})

app.get('/carlist2', (req, res) => {
    res.render('carlist2.html', { carlist: sampleCarList, userid: 'hong' });
})


app.get('/test/setCookie', (req, res) => {
    console.log('/test/setCookie');

    res.cookie('user', { 'name': '홍길동', 'id': 'user01' }, {
        maxAge: 60 * 1000,
        httpOnly: true
    });


    // res.cookie('test', { 'name': 'hhhhh' })
    res.redirect('/test/getCookie');
});

app.get('/test/getCookie', (req, res) => {
    console.log(req.cookies);
    res.render('test/getcookie.html', { hello: req.cookies.test });
});

app.get('/test/setsession', (req, res) => {
    console.log('/test/setsession');
 
    req.session.myname = 'abc';
    req.session.myid = 'def'
    req.session.save(function () {
        res.redirect('/test/getsession');
    });
 });
 
 app.get('/test/getsession', (req, res) => {
    console.log('/test/getsession');
    console.log('session.myname = ', req.session.myname);
 
    res.render('test/getsession.html', { myname : req.session.myname,
        myid : req.session.myid
    });
 });

 app.post('/signup', (req, res) => {
    console.log(req.body);
    // 회원가입
    let name = req.body.name;
    let userid = req.body.userid;
    let password = req.body.password;
    let birth = req.body.birth;
    let hobby = req.body.hobby;
    let email = req.body.email;
    // console.log('name = ', name);
    // console.log('userid = ', userid);
    // console.log('password = ', password);
    // console.log('birth = ', birth);
    // console.log('hobby = ', hobby);
    // console.log('email = ', email);

    hasher({
        password: req.body.password
    }, (err, pass, salt, hash) => {
        if (err) {
            console.log('ERR: ', err);
            res.redirect('/signup_form');
        }
        let user = {
            name: name,
            userid: userid,
            password: hash,
            salt: salt,
            email: email
        }
        sampleUserList.push(user);
        console.log('user added : ', user);
        res.redirect('/login_form');
    });
 });



 app.post('/login2', (req, res) => {
    console.log(req.body);
    let userid = req.body.userid;
    let password = req.body.password;
    console.log('userid = ', userid);
    console.log('password = ', password);
    console.log('userlist = ', sampleUserList);
    let bFound = false;
 
    for (let i = 0; i < sampleUserList.length; i++) {
       
        let user = sampleUserList[i];
        console.log(sampleUserList[i]);
        if (userid === user.userid) {
            console.log('[found] userid = ', userid);
            bFound = true;

            return hasher({
                password: password,
                salt: user.salt
            }, function (err, pass, salt, hash) {
                if (err) {
                    console.log('ERR : ', err);
                    //req.flash('fmsg', '오류가 발생했습니다.');
                }
                if (hash === user.password) {
                    console.log('INFO : ', userid, ' 로그인 성공')
                   
                    req.session.user = sampleUserList[i];
                    req.session.save(function () {
                        res.redirect('/carlist2');
                    })
                    return;
                } else {
                   // req.flash('fmsg', '패스워드가 맞지 않습니다.');
                   
                }
            });
        }
        if (bFound) break;
    }
 
    //req.flash.msg('')
    if(!bFound) {
        console.log('not found');
    }
 
    //req.flash('fmsg', '사용자가 없습니다.');
    res.redirect('/login_form');
   
   
 });
 








app.listen(port, () => {
    console.log('server listening...' + port);
});


