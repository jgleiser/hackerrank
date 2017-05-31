// https://www.hackerrank.com/challenges/30-conditional-statements
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
    var N = parseInt(readLine());
    var out = 'Weird';
    
    if ((N % 2 === 0) && (N >= 2 && N < 5 || N > 20)) {
        out = 'Not Weird';
    }
    
    console.log(out);
}