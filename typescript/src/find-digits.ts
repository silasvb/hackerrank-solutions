'use strict';

/**
 * An integer, $d$ is a divisor of an integer $n$, if the remainder of 
 * $n / d = 0$.
 * 
 * Given an integer, for each digit that makes up the integer determine
 * if it is a divisor. Count the number of divisors occurring within the 
 * integer.
 */

/**
 * 
 * @param value The value to analyse 
 * @returns The number of digits in $n$ that are divisors of $n$.
 */
export function findDigits(value: number) : number {
    return value.toString().split('').filter(v => value % parseInt(v, 10) == 0).length;
}