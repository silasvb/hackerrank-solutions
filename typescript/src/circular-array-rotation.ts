'use strict';

/**
 * John Watson knows of an operation called a right circular rotation
 * on an array of integers. One rotation moves the last array element
 * to the first position and shifts all remaining elements right one.
 * To test Sherlock's abilities, Watson provides Sherlock with an array
 * of integers. Sherlock is to perform the rotation operation a number 
 * times and then determine the value of the elements at a given
 * position.
 * 
 * For each array, perform a number of right circular rotations and 
 * return the values of the elements at the given indices.
 */

/**
 * 
 * @param array The array to rotate
 * @param rotationCount The rotation count
 * @param queries The indices to report
 * @returns The values in the rotated array as requested
 */
export function circularArrayRotation(array: number[], rotationCount: number, queries: number[]) : number[] {
    const result: number[] = Array.of(0, array.length);

    array.forEach((a, idx) => {
        result[(idx + rotationCount) % array.length] = a;
        }
    );

    return queries.map(idx => result[idx]);
}