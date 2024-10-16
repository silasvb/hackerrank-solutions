'use strict';

/**
 * Given a sequence of $n$ integers, where each element is distinct
 * and satisfies $1 <= p(x) <= n$. For each $x$ where $1 <= x <= n$,
 * that is $x$ increments from 1 to $n$, find any integer $y$, such that 
 * $p(p(y)) === x$ and keep a history of the values of $y$ in a return
 * array.
 */

/**
 * 
 * @param array An array of integers
 * @returns The values of $y$ for all $x$ in the arithmetic sequence 1 to n
 */
export function permutationEquation(array: number[]) : number[] {
    const results: number[] = [];
    for (let i = 1; i <= array.length; i++) {
        const indexOfi: number = array.indexOf(i) + 1
        const indexOfIndexOfi: number = array.indexOf(indexOfi) + 1;
        results.push(indexOfIndexOfi);
    }

    return results;
}