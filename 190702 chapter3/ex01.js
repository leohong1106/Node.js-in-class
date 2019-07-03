console.log('hallo' + '\n');

var a = 'test';
var b = 10;
var c = true;
console.log(a + b + c);
console.log(a, b, c);
console.log(a, '', b, '', c);

const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
}
console.log(obj);
console.dir(obj, {colors: true, depth:2});

console.time('시간측정');
for(let i = 0; i < 10000; i++) {
    continue;
}
console.timeEnd('시간측정');

console.log('\n');
console.log('숫자: %d + %d = %d', 10, 29, 10 + 29);