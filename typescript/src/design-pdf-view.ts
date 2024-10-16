/**
 * Design PDF View
 * ---------------
 * 
 * When a contiguous block of text is selected in a PDF viewer,  the selection is
 * is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted
 * independently. For example:
 * 
 * 
 * [img](https://s3.amazonaws.com/hr-challenge-images/22869/1471640108-6c01750b16-PDF-highighting.png)
 * 
 * There is a list of 26 character heights aligned by index of their letters. For
 * example, 'a' is at index 0, and 'z' is at index 25. There will also be a string.
 * Using the letter heights, determine the area of the rectangle highlighted in 
 * $mm^2$ assuming all letters are 1mm wide.
 * 
 * ## Example
 * 
 * h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5];
 * word = 'torn'
 * 
 * The heights are t = 2, o = 1, r = 1, and n = 1. The tallest letter is 2 high and
 * there are 4 letters. The highlighted area will be 2 * 4 = 8mm, so the answer is 8.
 * 
 * ## Function Description
 * 
 * Complete the designerPdfViewer function. DesignerPdfViewer has the following 
 * parameters(s):
 * 
 * - int h[26]: the height of each letter.
 * - string word: a string
 * 
 * ## Returns
 * 
 * int: The size of the highlighted area
 * 
 * ## Input Format
 * 
 * The first line contains 26 space-separated integers describing the respective 
 * heights of each consecutive lowercase English letter ascii[a-z].
 * 
 * The second line contains a single word consisting of lowercae English alphabetic
 * characters.
 *  
 */

'use strict';

import { WriteStream, createWriteStream } from "fs";
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

export function designerPdfViewer(h: number[], word: string): number {
    const chars: string[] = word.split('');
    const heights: number[] = chars.map(c => {
        const index: number = c.charCodeAt(0) - 'a'.charCodeAt(0);
        return h[index];
    });
    
    return chars.length * Math.max(...heights);
}

function main() {
    const h: number[] = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));
    const word: string = readLine();

    const result: number = designerPdfViewer(h, word);

    const outfile: string | undefined = process.env['OUTPUT_PATH'];
    if (outfile !== undefined) {
        const ws: WriteStream = createWriteStream(outfile);
        ws.write(result + '\n');
        ws.close();
    } else {
        console.log(result);
    }
    
}