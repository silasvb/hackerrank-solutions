'use strict';

/**
 * Your local library needs your help! Given the expected and actual
 * return dates for a library book, create a program that calculates
 * the fine (if any). The fee structure is as follows:
 * 
 * 1. If the book is returned on or before the expected return date,
 *  no fine will be charged.
 * 2. If the book is returned after the expected return day but within
 *  the same calendar month and year as the expected return date,
 * 
 *  fine = 15 Hackos * (the number of days late)
 * 
 * 3. If the book is returned after the expected return month but still
 *  within the same calendar year as the expected return date,
 * 
 *  fine = 500 Hackos * (the number of months late)
 * 
 * 4. If the book is returned after the calendar year in which it was
 *  expected, there is a fixed fine of 10000 Hackos.
 * 
 * Charges are based only on the least precise measure of lateness. For
 * example, whether a book is due on January 1, 2017 or December 31, 2017
 * if it is returned January 1 2018 that is a year late and the fine
 * would be 10,000 Hackos.
 */

/**
 * 
 * @param d1 Returned day
 * @param m1 Returned month
 * @param y1 Returned year
 * @param d2 Due day
 * @param m2 Due month
 * @param y2 Due year
 * @returns Fine amount
 */
export function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    if (y2 > y1) {
        return 0;
    } else if (y2 < y1) {
        return 10000 * (y1 - y2);
    }

    if (m2 > m1) {
        return 0;
    } else if (m2 < m1) {
        return 500 * (m1 - m2);
    }

    return Math.max(0, (d1 - d2) * 15);
}