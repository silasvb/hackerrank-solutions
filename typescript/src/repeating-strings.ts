'use strict';

/** 
 * There is a string, $s$, of lowercase English letters that is repeated
 * infinitely many times. Given an integer, $n$, find and print the number
 * of letters, $a$' in the first $n$ letters of the infinite string.
 */


/**
 * 
 * @param s A string to repeat
 * @param n The number of characters to consider
 * @returns The frequency of 'a's in the substring
 */
export function repeatedStrings(s: string, n: number): number {
    const numWholeRepeats = Math.floor(n / s.length);
    const numAsInString = s.split('').filter(c => c === 'a').length;
    const remainingCharacters = n % s.length;

    const remaining = s.substring(0, remainingCharacters);
    const numAsInRemaining = remaining.split('').filter(c => c === 'a').length;

    return numAsInString * numWholeRepeats + numAsInRemaining;
}