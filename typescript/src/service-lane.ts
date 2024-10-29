'use strict';

/** 
 * A driver is driving on the freeway. The check engine light of his vehicle is on, and 
 * the driver wants to get service immediately. Luckily, a service lane runs parallel to
 * the highway. It varies in width along it's length.
 * 
 * You will be given an array of widths at points along the road (indices), then a list 
 * of indices of entry and exit points. Considering each entry and exit point, calculate
 * the maximum size vehicle that can travel that segment of the service lane safely.
 */


/**
 * 
 * @param n The size of the width array
 * @param t Each element contains the starting and ending indices of a segment to 
 *  consider
 * @returns The maximum width vehicle that can pass through each segment of the service 
 *  lane described
 */
export function serviceLane(n: number, width: number[], t: number[][]): number[] {
    return t.map(tIdx => Math.min(...width.slice(tIdx[0], tIdx[1] + 1)));
}