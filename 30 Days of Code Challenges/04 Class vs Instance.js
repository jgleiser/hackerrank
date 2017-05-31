// https://www.hackerrank.com/challenges/30-class-vs-instance
function Person (initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge < 0) {
        console.log('Age is not valid, setting age to 0.');
    }
    this.age = initialAge > 0 ? initialAge : 0;
    
    // Do some computations in here and print out the correct statement to the console
    this.amIOld = function() {
        if (this.age >= 18) console.log('You are old.');
        else if (this.age >= 13) console.log('You are a teenager.');
        else console.log('You are young.');
    };
    // Increment the age of the person in here
    this.yearPasses = function() {
        this.age++;
    };
}
