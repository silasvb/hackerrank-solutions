'use strict';

/**
 * You have two strings of lowercase English letters. You can perform
 * two types of operations on the first string:
 * 
 * 1. Append a lowercase English letter to the end of the string.
 * 2. Delete the last character of the string. Performing this operation on 
 *    an empty string results in an empty string.
 * 
 * Given an integer, $k$, and two strings, $s$ and $t$, determine whether
 * or not you can convert $s$ to $t$ by performing exactly $k$ of the above
 * operations on $s$. If it's possible, print Yes. Otherwise, print No.
 */


/**
 * 
 * @param initial  The initial string
 * @param desired  The desired string
 * @param operations The exact number of operations that must be performed
 * @returns Either "Yes" or "No"
 */
export function appendAndDelete(initial: string, desired: string, operations: number): string {

    return appendAndDeleteImpl(initial, desired, operations) ? "Yes" : "No";

    function appendAndDeleteImpl(s: string, d: string, k: number): boolean {

        // If the allowable moves is greater than the total length of strings, then we can
        // pop off the initial string repeated times when empty.
        if (operations > initial.length + desired.length) {
            return true;
        }

        let sharedStartingCharacters = 0;
        while (s.charAt(sharedStartingCharacters) === d.charAt(sharedStartingCharacters) && sharedStartingCharacters <= s.length && sharedStartingCharacters <= d.length) {
            sharedStartingCharacters++;
        }

        const movesRequired = initial.length + desired.length - 2 * sharedStartingCharacters;

        return movesRequired <= operations && ((operations - movesRequired) % 2 == 0);
    }
}