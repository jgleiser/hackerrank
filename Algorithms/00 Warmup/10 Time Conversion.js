// https://www.hackerrank.com/challenges/time-conversion
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
    var time = readLine();
    
    var t12 = time.slice(0,8);
    var c12 = time.slice(8);
    var t = t12.split(":");
    
    if (c12 === "AM") {
        if (t[0] === "12") console.log("00:" + t[1] + ":" + t[2]);
        else console.log(t12);
    }
    else {
        if (t[0] === "12") console.log(t12);
        else { 
            t[0] = parseInt(t[0], 10) + 12;
            console.log(t[0] + ":" + t[1] + ":" + t[2]);
        }
    }
}
