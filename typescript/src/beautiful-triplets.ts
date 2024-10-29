'use strict';

/**
 * Given a sequence of integers, $a$, a triplet $(a[i], a[j], a[k])$ is beautiful if:
 * 
 * - $i < j < k$
 * - $a[j] - a[i] = a[k] - a[j] = d
 * 
 * Given an increasing sequence of integers and the value of $d$, count the number of
 * beautiful triplets in the sequence.
 * 
 */

/**
 * 
 * @param d The value to match
 * @param arr The sequence, sorted ascending
 */
export function beautifulTriplets(d: number, arr: number[]): number {

    const numberMap = new Map();
    arr.forEach(v => numberMap.set(v, true));

    let idx = 0;
    let count = 0;
    while (arr[idx] + 2 * d <= arr[arr.length - 1]) {
        const iVal = arr[idx];
        if (numberMap.has(iVal + d) && numberMap.has(iVal + 2 * d)) {
            count++;
        }
        idx++;
    }

    return count;
}