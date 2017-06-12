// https://www.hackerrank.com/challenges/camelcase
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
    var s = readLine();
    var count = 0;
    if (s.length > 1) count++;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i].match(/[A-Z]/)) count++;
    }

    console.log(count);
}
