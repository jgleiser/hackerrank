// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    if (head === null) return false;
    
    var current = head,
        visited = [];
    
    while (current !== null) {
        visited.push(current.data);
        
        if (current.next !== null && visited.includes(current.next.data)) {
            return true;
        }
        
        current = current.next;
    }
    
    return false;
}
