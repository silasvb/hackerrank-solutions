'use strict';

import { getCipherInfo } from "crypto";

/**
 * The distance between two array values is the number of indices between them. Given 
 * $a$, find the minimum distance between any pair of equal elements in the array. If no
 * such values exist, return -1.
 */


/**
 * 
 * @param a An array of integers
 * @returns The minimum distance found or -1 if there are no matching elements
 */
export function minimumDistances(a: number[]): number {
    if ([...new Set(a)].length == a.length) {
        // No duplicate elements
        return -1;
    }

    let minIndexDistances = new Map();
    let lowest = a.length;

    for (let i = 0; i < a.length; i++) {
        if (minIndexDistances.has(a[i])) {
            // Already evaluated
            continue;
        }

        if (a.lastIndexOf(a[i]) == i) {
            // Only a single element
            continue;
        }

        let positions = a.map((curElement, index) => {
            return { curElement: curElement, index: index }
        }).filter(e => e.curElement == a[i]).map(e => e.index);

        let deltas = Array.from({ length: positions.length - 1 }, (u, v) => v).map(
            idx => positions[idx + 1] - positions[idx]
        );

        const lowestForI = Math.min(...deltas);
        minIndexDistances.set(a[i], lowestForI);
        if (lowestForI < lowest) {
            lowest = lowestForI;
        }

    }

    return lowest;
}