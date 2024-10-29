'use strict';

/**
 * Manasa is out on a hike with friends. She finds a trail of stones with numbers on 
 * them. She starts following the trail and notices that any two consecutive stones'
 * numbers differ by one of two values. Legend has it htat there is a treasure trove
 * at the end of the trail. If Manasa can guess the value of the last stone, the
 * treasure will be hers.
 */

/**
 * 
 * @param n The number of possible non-zero stones
 * @param a One possible integer difference
 * @param b Another possible integer difference
 * @returns All possible values of the last stone
 */
export function stones(n: number, a: number, b: number): number[] {
    if (a == b) return [a * n];
    const c = Array.from({ length: n }, (v, k) => ({ a: k, b: n - k - 1 }));
    return c.map(x => x.a * a + x.b * b).sort((u, v) => u - v);
}