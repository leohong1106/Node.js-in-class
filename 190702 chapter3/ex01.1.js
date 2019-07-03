const http = require('http');

var port = 3010;
const server = http.createServer();

server.listen(port, function() {
    console.log('웹 서버 대기중... : %d', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('클라이언트: (' + addr.address + ':' + addr.port + ')이 접속되었습니다. ');
});

server.on('close', function() {
    console.log('웹 서버 종료됨.');
});

server.on('request', function(req, res) {
    // console.log('클라이언트 요청');
    res.write('<h1>hallo world123</h1>');
    res.end();
})
