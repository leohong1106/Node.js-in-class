const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

var sampleUserList = [{
    no: '1',
    id: 'user01',
    name: '유저01',
    e_mail: 'user01@user.com',
    numOfAccident: 5,
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
    res.render('userlist2.html', {userlist: sampleUserList, userid: 'hong'});
})

app.listen(port, () => {
    console.log('server listening...' + port);
});