function add(a, b, callback) {
    var result = a+b;
    // return result;
    callback(result);
}

add(10, 20, function(result) {
    console.log('콜백함수');
    console.log('result=', result);
})

function callback2(result) {
    console.log('콜백함수');
    console.log('result=', result);
}

add (10, 20, callback2);
