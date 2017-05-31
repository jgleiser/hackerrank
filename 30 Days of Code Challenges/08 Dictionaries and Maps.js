// https://www.hackerrank.com/challenges/30-dictionaries-and-maps
function processData(input) {
    //Enter your code here
    var lines = input.split("\n");
    var numQuerys = lines.shift();
    var phoneBook = {};
    
    for (var i = 0; i < numQuerys; i++) {
        var line = lines[i].split(' ');
        phoneBook[line[0]] = line[1];
    }
    
    for (var i = numQuerys, x = numQuerys*2; i < x; i++) {
        if (i === lines.length) { break; }
        if (phoneBook[lines[i]]) { console.log(lines[i] + '=' + phoneBook[lines[i]]); }
        else { console.log('Not found'); }
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
