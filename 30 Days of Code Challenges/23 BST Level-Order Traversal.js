// https://www.hackerrank.com/challenges/30-binary-trees
        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        var queue = [], n;
        if (root) {
            queue.push(root);
            
            while (queue.length > 0) {
                n = queue.shift();
                process.stdout.write(n.data + ' ');
                
                if (n.left) {
                    queue.push(n.left);
                }
                if (n.right) {
                    queue.push(n.right);
                }
            }
        }
