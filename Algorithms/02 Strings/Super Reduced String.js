// https://www.hackerrank.com/challenges/reduced-string
function doubleChar(string) {
    for (var i = 1; i < string.length; i++) {
        if (string[i-1] === string[i]) return string[i];
    }
    return "";
}

function processData(input) {
    //Enter your code here
    while (true) {
        var del = doubleChar(input);
        if (del === "") break;
        var char = new RegExp(del+del, 'g');
        input = input.replace(char, "");
    }
    if (input === "") console.log("Empty String");
    else console.log(input);
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
