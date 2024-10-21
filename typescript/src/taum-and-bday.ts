'use strict';

/**
 * Taum is planning to celebrate the birthday of his friend, Diksha. There are two types
 * of gifts that Diksha wants from Taum; one is black and the other is white. To make 
 * her happy, Taum has to buy $b$ black gifts and $w$ white gifts.
 * 
 * - The cost of each black gift is $bc$ units.
 * - The cost of each white gift is $wc$ units.
 * - The cost to convert a black gift into a white gift or vice versa is $z$ units.
 * 
 * Determine the minimum cost of Diksha's gifts.
 */

/**
 * 
 * @param b The number of black gifts
 * @param w The number of white gifts
 * @param bc The cost of a black gift
 * @param wc The cost of a white gift
 * @param z The cost to convert one gift to another colour
 * @returns The minimum cost to purchase the gifts
 */
export function taumBDay(b: number, w: number, bc: number, wc: number, z: number): BigInt {

    function minB(): number {
        return Math.min(bc, z + wc);
    }

    function minW(): number {
        return Math.min(wc, z + bc);
    }

    return BigInt(b) * BigInt(minB()) + BigInt(w) * BigInt(minW());
}