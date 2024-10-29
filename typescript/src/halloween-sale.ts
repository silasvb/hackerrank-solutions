'use strict';

/**
 * You wish to buy a video game from the famous online game store Mist.
 * 
 * Usually, all games are sold at the same price, $p$ dollars. However, they are
 * planning to have the seasonal Halloween Sale next month in which you can buy games at
 * a cheaper price. Specifically, the first game will cost $p$ dollars, and every 
 * subsequent game will cost $d$ dollars less than the previous one. This continues 
 * until the cost becomes less than or equal to $m$ dollars, after which every game will
 * cost $m$ dollars. How many games can you buy during the Halloween Sale?
 * 
 */



/**
 * 
 * @param p The price of the first game
 * @param d The discount from the previous game
 * @param m The minimum cost of a game
 * @param s The starting budget
 * @returns The number of games that can be purchased.
 */
export function howManyGames(p: number, d: number, m: number, s: number): number {

    let numGames = 0;
    let remainingMoney = s;

    let nextGameCost = p;
    while (remainingMoney >= nextGameCost) {
        remainingMoney -= nextGameCost;
        numGames++;

        nextGameCost = Math.max(nextGameCost - d, m);
    }

    return numGames;
}