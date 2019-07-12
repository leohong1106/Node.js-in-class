var express = require('express');
var router = express.Router();

router.get('/router', function(req,res) {
   console.log('/test/router');
   res.send('<h1>/test/router</h1>');
});

router.get('/setCookie', (req, res) => {
   console.log('/test/setCooke');

   res.cookie('user', {
       'name': '홍길동',
       'id': 'user01'
   }, {
       maxAge: 1000,
       httpOnly: true
   });

   res.redirect('/test/getCookie');
});

router.get('/getCookie', (req, res) => {
   console.log(req.cookies);
console.log('==================');

   res.render('test/getcookie.html', {
       cookie: req.cookies, 
       hello:{name : 'khkhk'}
   });
});

router.get('/setsession', (req, res) => {
   console.log('/test/setsession');

   req.session.myname = '홍길동';
   req.session.myid = 'hong';

   req.session.save(function () {
       res.redirect('/test/getsession');
   })
})

router.get('/getsession', (req, res) => {
   console.log('/test/getsession');
   console.log('session.myname = ', req.session.myname);

   res.render('test/getsession.html', {
       myname: req.session.myname,
       myid: req.session.myid
   });
})

router.get('/setlocals', (req, res) => {
   res.locals.test2 = 'test2';
   res.render('test/locals.html', {
       test1: 'test1'
   });
});
module.exports = router;
