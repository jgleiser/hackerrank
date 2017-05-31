<?php
// https://www.hackerrank.com/challenges/30-abstract-classes
// Write MyBook class
class MyBook extends Book
{
    function __construct($title, $author, $price) {
        $this->title = $title;
        $this->author = $author;
        $this->price = $price;
    }
    
    public function display() {
        echo "Title: " . $this->title;
        echo "Author: " . $this->author;
        echo "Price: " . $this->price;  
    }
}
?>