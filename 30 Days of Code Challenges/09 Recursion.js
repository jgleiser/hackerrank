// https://www.hackerrank.com/challenges/30-recursion
function processData(input) {
    console.log(factorial(input));
}

function factorial(n) {
    if (n <= 1) return 1;
    else return n * factorial(n-1);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
