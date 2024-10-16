/**
 * # Utopian Tree
 * 
 * The Utopian Tree goes through 2 cycles of growth every year.
 * Each spring, it doubles in height. Each summer, its height 
 * increases by 1 meter.
 * 
 * A Utopian Tree sapling with a height of 1 meter is planted 
 * at the onset of spring. How tall will the tree be after $n$
 * growth cycles?
 * 
 * For example, if the number of growth cycles is $n = 5$, the
 * calculations are as follows:
 * 
 * ```
 * Period   Height
 * 0        1
 * 1        2
 * 2        3
 * 3        6
 * 4        7
 * 5        14
 * ```
 * 
 * ## Function Description
 * 
 * Utopian Tree has the following parameter(s):
 * 
 * - int n: The number of growth cycles to simulate
 * 
 * ## Returns
 * 
 * int: The height of the tree after the given number of cycles
 * 
 * ## Input Format
 * 
 * The first line contains an integer, $t$, the number of test 
 * cases.
 * 
 * $t$ subsequent lines each contain an integer, $n$, the number
 * of cycles for that test case.
 * 
 */
'use strict';
import { WriteStream, createWriteStream } from "fs";

export function utopianTree(t: number): number {
    let height = 1;
    for (let i = 0; i < t; i++) {
        if (i % 2 === 0) {
            height *= 2;
        } else {
            height += 1;
        }
    }

    return height;
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const t: number = parseInt(readLine().trim(), 10);
    const results: number[] = [];
    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);
        const result: number = utopianTree(n);
        results.push(result);
    }

    const outfile: string | undefined = process.env['OUTPUT_PATH'];
    if (outfile !== undefined) {
        const ws: WriteStream = createWriteStream(outfile);
        results.forEach(r => ws.write(r + '\n'));
        ws.end();
    } else {
        console.log(results);
    }
}

