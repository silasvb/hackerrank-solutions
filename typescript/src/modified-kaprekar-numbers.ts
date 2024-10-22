'use strict';

import { subscribe } from "diagnostics_channel";
import { circularArrayRotation } from "./circular-array-rotation";
import { Console } from "console";

/**
 * A modified Kaprekar number is a positive whole number with a specified property. If 
 * you square it, then split the number into two integers and sum those integers, you
 * have the same value you started with.
 * 
 * Consider a positive whole number $n$ with $d$ digits. We square $n$ to arrive at a
 * number that is either $2 \times d$ long or $(2 x d) - 1$ long. Split the string 
 * representation of the square into two parts, $l$ and $r$. The right hand part $r$, 
 * must be $d$ digits long. the left is the remaining substring. Convert these two
 * substrings back to integers, and add them and see if you get $n$.
 */


/**
 * 
 * @param p The lower limit
 * @param q The upper limit
 */
export function kaprekarNumbers(p: number, q: number) {
    const numbers = getKaprekarNumbers(p, q);
    if (numbers.length == 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(numbers.join(' '));
    }
}

function getKaprekarNumbers(p: number, q: number): number[] {
    return Array.from({ length: q - p + 1 }, (u, v) => v + p).filter(n => isKaprekarNumber(n));
}

export function isKaprekarNumber(p: number): boolean {

    const square = `${p * p}`;
    const rLen = `${p}`.length;

    const l = square.substring(0, square.length - rLen);
    const r = square.substring(square.length - rLen);

    let lVal = 0;
    let rVal = 0;

    if (l.length > 0) {
        lVal = parseInt(l, 10);
    }

    if (r.length > 0) {
        rVal = parseInt(r, 10);
    }


    return (p == (lVal + rVal));
}