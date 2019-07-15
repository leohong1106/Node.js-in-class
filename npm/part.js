console.log('파트 부분입니다.');
console.log('파트 부분입니다.');
console.log('파트 부분입니다.');
console.log('파트 부분입니다.');
console.log('파트 부분입니다.');
console.log('파트 부분입니다.');

// app.use(function(req, res, next) {
//     console.log('파트 미들웨어');
//     next();
// });



// var c = 'c'
// var funcc = function () {
//     console.locals.user = req.session.user;
//     next();
// }

// app.get('/moduletest', function(req,res) {
//     console.log('파트 테스트');
//     res.send('파트 테스트');
// });

exports.part = {a: 'a', b: 'b'};
exports.a = 'parta';
exports.b = 'partb';

exports.func = {
    funca : function() {
        console.log('funca')
    }
}