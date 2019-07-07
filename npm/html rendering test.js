const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
   res.send('<img src="/images/image1.jpg">');
});

app.listen(port, () => {
   console.log('Server listening... ' + port);
});
