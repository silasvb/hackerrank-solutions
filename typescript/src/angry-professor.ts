/**
 * # Angry Professor
 * 
 * A Discrete Mathematics professor has a class of students. 
 * Frustrated with their lack of discipline, the professor decides
 * to cancel class if feer than some number of students are present
 * when the class starts. Arrival times go from on time ($arrivalTime 
 * <= 0$) to arrived late ($arrivalTime > 0)$.
 * 
 * Given the arrival time of each student and a threshold number of
 * attendees, determine if the class is cancelled.
 * 
 * ## Example 
 * 
 * n = 5
 * k = 3 
 * a = [-2, -1, 0, 1, 2]
 * 
 * The first three students arrive on time. The last 2 were late.
 * The threshold is three students, so the class with go on. Return
 * YES.
 * 
 * ### Notes
 * 
 * Non-positive arrival times indicate a student arrived early or on
 * time.
 * 
 * Positive arrival times indicate a student arrived late.
 * 
 * ## Function Description
 * 
 * angryProfessor has the following parameter(s):
 * 
 * - int k: The threshold number of students
 * - int a[n]: The arrival times of the $n$ students
 * 
 * ## Returns
 * 
 * string: either YES or NO
 * 
 * ## Input Format
 * 
 * The first line of input contains $t$, the number of test cases.
 * 
 * Each test case consists of two lines.
 * 
 * The first line has two space-separated integers, $n$ and $k$, 
 * the number of students (size of $a$) and the cancellation 
 * threshold.
 * 
 * The second line contains $n$ space-separated integers that describe
 * the arrival times for each student. 
 */

'use strict';
import {WriteStream, createWriteStream } from "fs";

export function angryProfessor(k: number, a: number[]): string {
    const onTime: number = a.map(v => v <= 0).reduce((totalOnTime, current) => totalOnTime += current ? 1 : 0, 0);
    return onTime < k ? "YES" : "NO";
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
    const results: string[] = [];

    for (let tItr: number = 0; tItr < t; tItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');
        const n: number = parseInt(firstMultipleInput[0], 10);
        const k: number = parseInt(firstMultipleInput[1], 10);
        const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
        const result: string = angryProfessor(k, a); 
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