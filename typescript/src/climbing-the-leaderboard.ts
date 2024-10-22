'use strict';

import { randomBytes } from "crypto";
import { unsubscribe } from "diagnostics_channel";
import { cursorTo } from "readline";
import { appendAndDelete } from "./append-and-delete";

/**
 * An arcade game player wants to climb to the top of the leaderboard and track their
 * ranking. The games uses Dense Ranking, so the leaderboard works like this:
 * 
 * - The player with the highest score is ranked number 1 on the leaderboard.
 * - Players who have equal scores receive the same ranking number, and the next
 *   player(s) receive the immediately following ranking order.
 */

/**
 * 
 * @param ranked The leaderboard scores
 * @param player The player's scores
 * @returns The players rank after each new score
 */
export function climbingLeaderboard(ranked: number[], player: number[]): number[] {

    let unique: number[] = [...new Set(ranked)].sort((x, y) => y - x);
    const positions: number[] = Array.from({ length: player.length }, () => unique.length + 1);

    let playerMap = new Map();

    for (let i = 0; i < player.length; i++) {
        const playerScore = player[i];
        if (playerMap.has(playerScore)) {
            playerMap.get(playerScore).push(i);
        } else {
            playerMap.set(playerScore, [i]);
        }
    }

    const sortedPlayers = [...new Set(player)].sort((x, y) => y - x);

    let prevPlayer = sortedPlayers[0];
    for (let i = 0; i < unique.length; i++) {
        const score = unique[i];

        for (let k = prevPlayer; k >= score; k--) {
            if (playerMap.has(k)) {
                const players = playerMap.get(k);
                for (let j = 0; j < players.length; j++) {
                    positions[players[j]] = i + 1;
                }
            }
        }

        prevPlayer = score - 1;
    }

    return positions;
}