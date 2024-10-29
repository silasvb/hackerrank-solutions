'use strict';

import { stringify } from "querystring";

/**
 * You are given a square map as a matrix of integers. Each cell of the map has a value
 * denoting it's depth. We will call a cell of the map a cavity if and only if this cell
 * is not on the border of the map and each cell adjacent to it has a smaller depth.
 * Two cells are adjacent if they have a common side, or edge.
 * 
 * Find all the cavities on the map and replace their depths with the uppercase 
 * character "X".
 * 
 */

/**
 * 
 * @param grid Each string represnts a row on the grid
 * @returns The modified grid
 */
export function cavityMap(grid: string[]): string[] {

    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            const adjacent = [
                grid[i - 1].charAt(j),
                grid[i + 1].charAt(j),
                grid[i].charAt(j - 1),
                grid[i].charAt(j + 1)
            ];

            if (adjacent.filter(c => c === 'X').length > 0) {
                continue;
            }

            const depths: number[] = adjacent.map(v => parseInt(v, 10));
            const depth = parseInt(grid[i].charAt(j), 10);

            if (Math.max(...depths) < depth) {
                grid[i] = grid[i].substring(0, j) + "X" + grid[i].substring(j + 1, grid[i].length);
            }
        }
    }

    return grid;
}