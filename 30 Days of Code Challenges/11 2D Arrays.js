// https://www.hackerrank.com/challenges/30-2d-arrays
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

function maxHoursGlass(arr) {
    var sum = 0, max_sum = 0;
    
    if (arr.length < 2) return 0;
    
    //hourglass is 3x3 sub array, then we need to check up until length-2
    for (var i = 0, x = arr.length-2; i < x; i++) {
        for (var j = 0, y = arr[i].length-2; j < y; j++) {
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            sum += arr[i+1][j+1];
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            
            if (i === 0 && j === 0) { max_sum = sum; }
            else { max_sum = Math.max(sum, max_sum); }
        }
    }
    
    return max_sum;
}


function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    console.log(maxHoursGlass(arr));

}
