// https://www.hackerrank.com/challenges/30-binary-search-trees
        // Add your code here
        if (!root) { return -1; }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
