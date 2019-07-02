var foo = ["zero", "one", "two"]

// var a = foo[0]
// var a = foo[0]
// var a = foo[0]

var [a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

var [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(a);
console.log(b);
console.log(c);
console.log(a + "+" + c);