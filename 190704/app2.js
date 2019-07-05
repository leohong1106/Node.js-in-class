

$(function () {
    $.ajax({
        type: 'GET',
        url: '/api/carlist',
        success: function (data) {
            console.log('success');
            console.log(data);
            $.each(data, function (i, item) {
                $('#list').append(`
                
                `)
            })

        },
        error: function (err) {
            console.log('err');
        }
    });
});

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