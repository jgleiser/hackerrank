// https://www.hackerrank.com/challenges/30-nested-logic
function processData(input) {
    //Enter your code here
    var dates = input.split('\n');
    var returned = dates[0].split(' ').map((a) => parseInt(a, 10)),
        expected = dates[1].split(' ').map((a) => parseInt(a, 10));
    
    // diff year
    if (returned[2] > expected[2]) {
        console.log(10000);
    }
    // but if year before
    else if (returned[2] < expected[2]) {
        console.log(0);
    }
    // diff month
    else if (returned[1] > expected[1]) {
        var diff = returned[1] - expected[1];
        console.log(500*diff);
    }
    // but if month before
    else if (returned[1] < expected[1]) {
        console.log(0);
    }
    // diff day
    else if (returned[0] > expected[0]) {
        var diff = returned[0] - expected[0];
        console.log(15*diff);
    }
    else {
        console.log(0);
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
