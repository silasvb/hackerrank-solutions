'use strict';

/**
 * You are the benevolent ruler of Rankhacker Castle, and today you're distributing 
 * bread. Your subjects are in a line, and some of them already have loaves. Times are
 * hard and your castle's food stocks are dwindling, so you must distribute as few 
 * loaves as possible according to the following rules:
 * 
 * -    Every time you give a loaf of bread to some person $i$, you must also give a 
 *      loaf of bread to the person immediately in front or behind them in line, i.e., 
 *      persons $i + 1$ or $i - 1$).
 * -    After all the bread is distributed, each person must have an even number of
 *      loaves.
 * 
 * Given the number of loaves already held by each citizen, find and print the minimum
 * number of loaves you must distribute to satisfy the two rules above. If this is not
 * possible, print NO.
 * 
 */


/**
 * 
 * @param b The number of loaves each person starts with
 * @returns The minimum number of loaves required, cast to a string, or NO
 */
export function fairRations(b: number[]): string {
    if (b.reduce((c, n) => c + n) % 2 !== 0) {
        // It's not possible to solve if the initial starting number of loaves is odd
        return "NO";
    }

    const oddIndices = b.map((v, idx) => ({ v: v, idx: idx })).filter(m => m.v % 2 !== 0);

    if (oddIndices.length == 0) {
        return "0";
    }

    const pairs: number[][] = [];
    for (let i = 0; i < oddIndices.length / 2; i++) {
        pairs.push([oddIndices[2 * i].idx, oddIndices[2 * i + 1].idx]);
    }

    return pairs.map(p => (p[1] - p[0]) * 2).reduce((prev, curr) => prev + curr).toString();

}