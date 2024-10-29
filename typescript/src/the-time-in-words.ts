'use strict';


/**
 * Given the time in numerals we may convert it intop words as shown below:
 * 
 * - 5:00 -> five o'clock
 * - 5:01 -> one minute past five
 * - 5:10 -> ten minutes past five
 * - 5:15 -> quarter past five
 * - 5:30 -> half past five
 * - 5:40 -> twenty minutes to six
 * - 5:45 -> quarter to six
 * - 5:47 -> thirteen minutes to six
 * - 5:28 -> twenty eight minutes past five
 * 
 * At $minutes = 0$, use `o' clock`. For $1 <= minutes <= 30$, use past and for $30 < 
 * minutes$ use to. Note the space betwen the apostrophe and clock in `o' clock`.
 * 
*/

/**
 * 
 * @param h Hour
 * @param m Minutes
 * @returns Time in Words
 */
export function timeInWords(h: number, m: number): string {

    if (m == 0) {
        return humanize(h) + " o' clock";
    }
    if (m == 1) {
        return `one minute past ${humanize(h)}`;
    }
    if (m == 15) {
        return `quarter past ${humanize(h)}`;
    }
    if (m == 30) {
        return `half past ${humanize(h)}`;
    }
    if (m == 45) {
        if (h == 12) {
            return "quarter to one";
        } else {
            return `quarter to ${humanize(h + 1)}`;
        }
    }
    if (m == 59) {
        if (h == 12) {
            return "one minute to one";
        } else {
            return `one minute to ${humanize(h + 1)}`;
        }
    }

    if (m < 30) {
        return `${humanize(m)} minutes past ${humanize(h)}`;
    } else {
        if (h == 12) {
            return `${humanize(60 - m)} minutes to one`;
        } else {
            return `${humanize(60 - m)} minutes to ${humanize(h + 1)}`;
        }
    }

    function humanize(n: number): string {
        if (n == 1) return "one";
        if (n == 2) return "two";
        if (n == 3) return "three";
        if (n == 4) return "four";
        if (n == 5) return "five";
        if (n == 6) return "six";
        if (n == 7) return "seven";
        if (n == 8) return "eight";
        if (n == 9) return "nine";
        if (n == 10) return "ten";
        if (n == 11) return "eleven";
        if (n == 12) return "twelve";
        if (n == 13) return "thirteen";
        if (n == 14) return "fourteen";
        if (n == 16) return "sixteen";
        if (n == 17) return "seventeen";
        if (n == 18) return "eighteen";
        if (n == 19) return "nineteen";
        if (n == 20) return "twenty";
        if (n == 21) return "twenty one";
        if (n == 22) return "twenty two";
        if (n == 23) return "twenty three";
        if (n == 24) return "twenty four";
        if (n == 25) return "twenty five";
        if (n == 26) return "twenty six";
        if (n == 27) return "twenty seven";
        if (n == 28) return "twenty eight";
        if (n == 29) return "twenty nine";

        return `Should not have recieved ${n}`;

    }
}
