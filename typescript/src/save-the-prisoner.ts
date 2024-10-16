'use strict';

/**
 * A jail has a number of prisoners and a number of treats to pass
 * out to them. Their jailor decides the fairest way to divide the
 * treats is to seat the prisoners around a circular table in 
 * sequentially numbered chairs. A chair number will be drawn from
 * the hat. Beginning with the prisoner in that char, one candy will
 * be handed to each prisoner sequentially around the table until
 * all have been distributed.
 * 
 * The jailer is playing a little joke, though. The last piece of 
 * candy looks like all the others, but it tastes awful. Determine
 * the chair number occupied by the prisoner who will receive that
 * candy.
 */

/**
 * 
 * @param prisoners The number of prisoners
 * @param sweets The number of sweets
 * @param startingChair The chair number to start passing out treats at
 * @returns 
 */
export function saveThePrisoner(prisoners: number, sweets: number, startingChair: number): number {   
    const index = (startingChair + sweets - 1) % prisoners;
    return index === 0 ? prisoners : index;
}