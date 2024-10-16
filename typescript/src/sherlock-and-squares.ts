'use strict';

/**
 * Watson likes to challenge Sherlock's math ability. He will provide
 * a starting and ending value that describe a range of integers, 
 * inclusive of endpoints. Sherlock must determine the number of square 
 * integers within that range.
 */

/**
 * 
 * @param lower The lower range boundary
 * @param upper The upper range boundary
 * @returns The number of square integers in the range
 */
export function squares(lower: number, upper: number): number {
    const val1 = Math.floor(Math.sqrt(lower));
    const val2 = Math.ceil(Math.sqrt(upper));

    const squares = Array.from({ length: val2 - val1 + 1 }, (v, k) => val1 + k).map(v => v * v);
    return squares.filter(v => v >= lower).filter(v => v <= upper).length;
}