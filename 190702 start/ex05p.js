function add(a, b, callback) {
    console.log("--> add함수   2 ");
    var result = a + b;
 
    callback(result);
    console.log("<-- add함수   6"   );
 }
 
 
 console.log('--> add함수 호출  1 ');
 add(10, 20, function (result) {
    console.log('--> callback()   3 ');
    console.log('result = ' + result   +  '\n'  + '4');
    console.log('<-- callback    5');
 });
 console.log('<-- add함수 호출      7');