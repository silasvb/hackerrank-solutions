'use strict';

/**
 * David has several containers, each with a number of balls in it. He has just enough
 * containers to sort each type of ball he has into its own container. David wants to 
 * sort balls using his sort method.
 * 
 * David wants to perform some number of swap operations such that:
 * - Each container contains only balls of the same type
 * - No two balls of the same type are are located in different containers
 */


/**
 * 
 * @param container a two dimensional array of integers that represent the number of
 *   balls of each colour in each container
 * @returns Either `Possible` or `Impossible`
 */
export function organizingContainers(container: number[][]): string {
    const containerSizes = container.map(r => r.reduce((curr, prev) => curr + prev));
    const colourSizes = Array.from({ length: containerSizes.length }, () => 0);
    container.forEach((row) => row.forEach((count, colour) => colourSizes[colour] += count));

    containerSizes.sort();
    colourSizes.sort();

    const solvable = containerSizes.filter((s, idx) => s === colourSizes[idx]).length == containerSizes.length;

    return solvable ? "Possible" : "Impossible";
}