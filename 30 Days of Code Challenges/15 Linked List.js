// https://www.hackerrank.com/challenges/30-linked-list
    this.insert=function(head,data){
        if (head === null) {
            head = new Node(data);
        } else {
            var node = head;
            while (node.next) {
                node = node.next;
            }
            node.next = new Node(data);
        }
        return head;
    };
