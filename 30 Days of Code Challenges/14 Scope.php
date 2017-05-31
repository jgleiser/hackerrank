<?php
// https://www.hackerrank.com/challenges/30-scope
// Write your code here

    function __construct($a) {
        $this->elements = $a;
        $this->maximumDifference = 0;
    }
    public function computeDifference() {
        for ($i = 0; $i < sizeof($this->elements); $i++ ) {
            for ($j = ($i+1); $j < sizeof($this->elements); $j++) {
                $this->maximumDifference = max($this->maximumDifference, abs($this->elements[$i] - $this->elements[$j]));   
            }
        }
        return $this->maximumDifference;
    }
?>