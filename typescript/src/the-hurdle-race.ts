/**
 * A video player plays a game in which the character competes in a hudle
 * race. Hurdles are of varying heights, and the characters have a maximum
 * height they can jump. There is a magic potion they can take that will
 * increase their maximum jump height by 1 unit for each dose. How many 
 * doeses of the potion must the character take to be able to jump all of the
 * hurdles. If the character can already clear all of the hurdles, return 0.
 * 
 * Example
 * -------
 * 
 * height = [1, 2, 3, 3, 2]
 * k = 1
 * 
 * The character can jump 1 unit high initially, and must take 3 - 1 = 2 
 * doses of potion to be able to jump all of the hurdles.
 * 
 * Functional Description
 * ----------------------
 * 
 * Complete the hurdleRace function in the editor below.
 * 
 * hurdleRace has the following parameter(s):
 * * int k: The height the character can jump naturally.
 * * int height[n]: The heights of each hurdle.
 * 
 * Returns
 * -------
 * 
 * int: The maxumum number of foses required. Always 0 or more.
 * 
 * Input Format
 * ------------
 * 
 * The first line contains two space-separated integers, n and k, the
 * number of hurdles and the maximum height the character can jump 
 * naturally.
 * 
 * The second line contains n space-spearated integers heights[i] where 
 * 0 <= i <= n.
 * 
 * Constraints
 * -----------
 * 
 * 1 <= n, k <= 100
 * 1 <= height[i] <= 100
 * 
 * Sample Input
 * ------------
 * 
 * ```
 * 5 4
 * 1 6 3 5 2
 * ```
 * 
 * Sample Output
 * -------------
 * 
 * ```
 * 2
 * ```
 * 
 */

'use strict';

import { WriteStream, createWriteStream } from "fs";

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

export function hurdleRace(k: number, height: number[]): number {
    const max: number = height.sort()[height.length - 1];
    return Math.max(0, max - k);
}

function main() {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
    const n: number = parseInt(firstMultipleInput[0], 10);
    const k: number = parseInt(firstMultipleInput[1], 10);
    const height: number[] = readLine().replace(/\s+$/g, '').split(' ').map(heightTemp => parseInt(heightTemp, 10));
    const result: number = hurdleRace(k, height);

    const outpath: string | undefined = process.env['OUTPUT_PATH']
    if (outpath !== undefined) {
        const ws: WriteStream = createWriteStream(outpath);
        ws.write(result + '\n');
        ws.end();
    } else {
        console.log(result);
    }
}

