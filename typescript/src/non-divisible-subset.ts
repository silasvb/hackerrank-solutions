/**
 * Given a distinct set of integers, print the size of a maximum subset $S$ where the 
 * sum of any 2 numbers in $S'$ is not evenly divisible by $k$.
 */

import { off } from "process";
import { minimumDistances } from "./minimum-distances";
import { circularArrayRotation } from "./circular-array-rotation";


/**
 * 
 * @param s An array of integers
 * @param k The divisor
 * @returns The length of the longest subset of $S$ meeting the criteria
 */
export function nonDivisibleSubset(k: number, s: number[]): number {
    const unique: number[] = [...new Set(s)];
    let count = Array.from({ length: k }, (u, v) => 0);

    unique.forEach(element => {
        const remainder = element % k;
        count[remainder] += 1;
    });

    let answer = Math.min(count[0], 1);

    if (k % 2 === 0) {
        for (let i = 1; i < k / 2; i++) {
            answer += Math.max(count[i], count[k - 1]);
        }
        answer += Math.min(1, count[k / 2]);
    }
    else {
        for (let i = 1; i < (k / 2); i++) {
            answer += Math.max(count[i], count[k - i]);
        }
    }

    return answer;

}