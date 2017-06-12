// https://www.hackerrank.com/challenges/designer-pdf-viewer
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
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    
    // hashmap with letters and heigths
    var letters = {};
    // 97 = 1, 122 = z
    for (var i = 97; i <= 122; i++) {
        letters[String.fromCharCode(i)] = h[i-97];
    }
    
    // find max height from word
    var maxh = 0;
    for (var i = 0; i < word.length; i++) {
        maxh = Math.max(maxh, letters[word[i]]);
    }
    
    console.log(maxh * word.length);
}
