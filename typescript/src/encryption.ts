'use strict';

/**
 * An English text needs to be encrypted using the following scheme.
 * 
 * First, the spaces are removed from the text. Let L be the length of this text.
 * 
 * Then, characters are written into a grid, whose rows and columns have the following 
 * constraints:
 * 
 * \[
 *  \floor(\sqrt(L)) \leq row \leq column \leq \ceil(\sqrt(L)) 
 * ]
 *  
 */

export function encryption(s: string): string {

    let withoutSpaces = s.split(' ').join('');
    let charCount = 0;

    let rows = getRows(withoutSpaces.length);
    let cols = getColumns(withoutSpaces.length)
    let columns = Array.from({ length: cols }, () => "");

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j < cols && charCount < withoutSpaces.length; j++, charCount++) {
            columns[j] += withoutSpaces[charCount];
        }
    }

    return columns.join(' ');

}

function getRows(l: number): number {
    return Math.floor(Math.sqrt(l));
}

function getColumns(l: number): number {
    return Math.ceil(Math.sqrt(l));
}
