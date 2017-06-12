// https://www.hackerrank.com/challenges/mini-max-sum
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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    
    var all = [a,b,c,d,e];
    
    all.sort((a,b) => a-b);
    
    var min = 0, max = 0;
    for (var i = 0; i < 4; i++) {
        min += all[i];
        max += all[4-i];
    }
    
    console.log(min + " " + max);
}
