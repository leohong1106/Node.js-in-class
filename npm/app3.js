app.get('/ejs', (req, res) => {

    res.render('ejs.html', {
        carlist: sampleCarList,
        userid:'aaaa', 
        name:'홍길동', 
        loop:5})
});