var output = '';

for (var i = 0; i <= 10; i++) {
    for (j = 0; j < i; j++) {
        output += "*";
    }
    output += "\n"
}
// document.write(output);
console.log(output);