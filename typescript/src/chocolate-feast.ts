'use strict';

/**
 * Little Bobby loves chocolate. He frequently goes to his favourite 5 & 10 stores, 
 * Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby 
 * saves enough wrappers, he can turn them in for a free chocolate.
 */


/**
 * 
 * @param n Bobby's initial amount of money
 * @param c The cost of a chocolate bar
 * @param m the number of wrappers he can turn in for a free bar
 * @returns The number of chocolates Bobby can eat taking full advantage
 */
export function chocolateFeast(n: number, c: number, m: number): number {
    const purchases = Math.floor(n / c);

    let wrappersToTradeIn = purchases;
    let tradeIns = 0;
    while (wrappersToTradeIn >= m) {
        wrappersToTradeIn -= (m - 1);
        tradeIns++;
    }

    return purchases + tradeIns;
}