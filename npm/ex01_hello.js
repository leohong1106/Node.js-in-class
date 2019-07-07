const express = require('express');
const app = express();
const port = 3000;



app.get('/', function (req, res) {
    console.log('/요청이 들어옴');
    res.send('<h3>seokbum' + 'Home page</h3>')
});

app.get('/about', (req, res) => {
    console.log('/about 요청이 들어옴');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('<h2>url.search: </h2>');
    res.write('<h2>url.pathname: </h2>');
    res.write('<h2>url.path: </h2>');
    res.end();
});

app.get('/query', function (req, res) {
    var id = req.query.id;
    var name = req.query.name;
    console.log(id, ',', name);
    console.log(req.query);
    res.send(req.query);
});

app.listen(port, function () {
    console.log('server listen at ...' + port);
});
