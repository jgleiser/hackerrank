// https://www.hackerrank.com/challenges/30-queues-stacks
function Solution(){
    this.stack = [];
    this.queue = [];
}

Solution.prototype.pushCharacter = function(c) {
    this.stack.push(c);
}

Solution.prototype.enqueueCharacter = function(c) {
    this.queue.push(c);
}

Solution.prototype.popCharacter = function() {
    return this.stack.pop();
}

Solution.prototype.dequeueCharacter = function() {
    return this.queue.shift();
}
