// https://www.hackerrank.com/challenges/plus-minus
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    let positive = 0, negative = 0, zero = 0
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) positive += 1;
        else if (arr[i] < 0) negative += 1;
        else zero += 1;
    }
    
    positive /= n;
    negative /= n;
    zero /= n;
    
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}
