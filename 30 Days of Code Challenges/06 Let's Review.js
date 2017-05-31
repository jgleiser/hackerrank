// https://www.hackerrank.com/challenges/30-review-loop
function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    var totalTests = inputArray.shift();
    for (var i = 0; i < totalTests; i++) {
        var evens = '', odds = '';
        for (var j = 0, x = inputArray[i].length; j < x; j++) {
            if (j % 2 === 0) { evens += inputArray[i][j]; }
            else { odds += inputArray[i][j]; }
        }
        console.log(evens + ' ' + odds);
    }
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
