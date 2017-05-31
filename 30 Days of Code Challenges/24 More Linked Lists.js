// https://www.hackerrank.com/challenges/30-linked-list-deletion
    this.removeDuplicates=function(head){
        var node = head,
            set = new Set();
        
        set.add(head.data);
        
        while(node.next) {
            if (!set.has(node.next.data)) {
                set.add(node.next.data);
                node = node.next;
            } else {
                node.next = node.next.next;
            }
        }
        
        return head;
    }
