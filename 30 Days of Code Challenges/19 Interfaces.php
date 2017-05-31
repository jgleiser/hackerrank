<?php
// https://www.hackerrank.com/challenges/30-interfaces

//Write your code here
class Calculator implements AdvancedArithmetic {
    public function divisorSum($num) {
        $sum = 0;
        $n = $num;
        while ($n > 0) {
            if ($num % $n == 0) {
                $sum += $n;
            }
            $n--;
        }
        return $sum;
    }
}
