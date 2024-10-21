/**
 * You are given a number of sticks of varying lengths. You will
 * iteratively cut the sticks into smaller sticks, discarding the 
 * shortest pieces until there are none left. At each iteration
 * you will determine the length of the shortest stick remaining,
 * cut that length from each of the longer sticks and then discard 
 * all the pieces of the at shortest length. When all the remaining
 * sticks are the same length, they cannot be shortened so discard
 * then.
 */

'use strict';

/**
 * 
 * @param sticks The lengths of each stick
 * @returns The number of sticks after each iteration
 */
export function cutTheSticks(sticks: number[]): number[] {
    const numberOfSticksPerIteration: number[] = [];
    while (sticks.length > 0) {
        numberOfSticksPerIteration.push(sticks.length);
        let smallest = Math.min(...sticks);
        sticks = sticks.filter(s => s !== smallest).map(s => s - smallest);
    }

    return numberOfSticksPerIteration;
}