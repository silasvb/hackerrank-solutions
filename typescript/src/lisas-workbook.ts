'use strict';

import { spec } from "node:test/reporters";
import { off } from "process";

/**
 * Lisa just got a new math workbook. A workbook contains exercise problems, grouped 
 * into chapters, Lisa believes a problem to be special if its index (within a chapter) 
 * is the same as the page number where it's located. The format of Lisa's book is as 
 * follows:
 * 
 * - There are $n$ chapters in Lisa's workbook, numbered from $1$ to $n$.
 * - The $i^{th}$ chapter has $arr[i]$ problems, numbered from $1$ to $arr[i]$.
 * - Each page can hold up to $k$ problems. Only a chapter's last page of exercises may
 *   contain fewer than $k$ problems.
 * - Each new chapter starts on a new page, so a page will never contain more than one
 *   chapter.
 * - The page number indexing starts at 1.
 * 
 * Given the details for Lisa's workbook, can you count its number of special problems?
 */

/**
 * 
 * @param n The number of chapters
 * @param k The maximum number of problems per page
 * @param arr The number of problems in each chapter
 * @returns The number of special problems in each chapter
 */
export function workbook(n: number, k: number, arr: number[]): number {

    const pages = [];

    let currentPage = 1;

    for (let i = 0; i < n; i++) {
        let exercises = Array.from({ length: arr[i] }, (u, v) => v + 1);
        while (exercises.length > 0) {
            const page = {
                exercises: exercises.slice(0, Math.min(k, exercises.length)),
                page: currentPage
            };
            pages.push(page);
            currentPage++;
            exercises = exercises.slice(k, exercises.length);
        }
    }

    const special: number[] = pages.map(p => p.exercises.filter(e => e === p.page).length);
    return special.reduce((u, v) => u + v);
}