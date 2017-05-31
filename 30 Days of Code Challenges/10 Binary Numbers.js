// https://www.hackerrank.com/challenges/30-binary-numbers
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
    var bin = (n >>> 0).toString(2);
    var count = 0, max_count = 0;
    
    for (var i = 0, x = bin.length; i < x; i++) {
        if (count === 0 && max_count === 0 && bin[i] === '1') {
            count = 1;
        }
        else if (bin[i] === '1' && bin[i-1] === '0') {
            count = 1;
        }
        else if (bin[i] === '1' && bin[i-1] === '1') {
            count++;
        }
        else {
            max_count = Math.max(count, max_count);
            count = 0;
        }
    }
    if (count != 0) {
        max_count = Math.max(count, max_count);
    }
    console.log(max_count);
}
