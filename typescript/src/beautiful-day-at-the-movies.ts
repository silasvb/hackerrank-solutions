/**
 * Lily likes to play games with integers. She created a new game
 * where she determines the difference between a number and its 
 * reverse. For instance, given the number 12, its reverse is 21.
 * Their difference is 9. The number 120 reversed is 21, and their
 * difference is 90.
 * 
 * She decides to apply her game to decision making. She will look
 * at a numbered range of days and will only go to a movie on a 
 * beautiful day.
 * 
 * Given a range of numbered days, $[i...j]$ and a number k,
 * determine the number of days in the range that are beautiful. 
 * Beautiful numbers are defined as a number where $|i - reverse(i)|$
 * is evenly divisible by $k$. If a day's value is a beautiful number,
 * it is a beautiful day. Return the number of beautiful days in 
 * the range.
 * 
 */

'use strict';
import {WriteStream, createWriteStream} from "fs";


/**
 * 
 * @param i The starting day number
 * @param j The ending day number
 * @param k The divisor
 * @returns The number of beautiful days in the range
 */
export function beautifulDays(i: number, j: number, k: number): number {
    
    function reverseDelta(num: number): number {
        return num - parseInt(`${num}`.split("").reverse().join(""));
    }

    let beautifulDays: number = 0;
    for (let day = i; day <= j; ++ day) {
        if (reverseDelta(day) % k == 0) {
            beautifulDays++;
        }
    }

    return beautifulDays;
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

function main(): void {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
    const i: number = parseInt(firstMultipleInput[0], 10);
    const j: number = parseInt(firstMultipleInput[1], 10);
    const k: number = parseInt(firstMultipleInput[2], 10);

    const result: number = beautifulDays(i, j, k);

    const outFile: string | undefined = process.env['OUTPUT_PATH'];
    if(outFile !== undefined) {
        const ws: WriteStream = createWriteStream(outFile);
        ws.write(result + "\n");
        ws.end();
    } else {
        console.log(result);
    }
}