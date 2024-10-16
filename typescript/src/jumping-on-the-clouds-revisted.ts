'use strict';

/** 
 * A child is playing a cloud hopping game. In this game, there are
 * sequentially numbered clouds that can be thunderhead or cumulous
 * clouds. The character must jump from cloud to cloud until it reaches
 * the start again.
 * 
 * There is an array of clouds, $c$ and an energy level $e = 100$. 
 * The character starts from $c[0]$ and uses 1 energy to make a jump 
 * of size $k$ to cloud $c[(i + k) % n]$. If it lands on a thundercloud
 * $c[i] = 1$, it's energy decreases by 2 additional units. The game 
 * ends when the character lands back on cloud 0.
 * 
 * Given the values of $n$, $k$ and the configuration of the clouds as
 * an array $c$, determine the final value of $e$ after the game ends.
 * 
*/

/**
 * 
 * @param clouds The cloud types along the path
 * @param jumpLength The length of one jump
 * @returns The energy level remaining
 */
export function jumpingOnTheClouds(clouds: number[], jumpLength: number) : number {
    let remainingEnergy = 100;
    let position = 0;

    function jump() {
        position = (position + jumpLength) % clouds.length;
        remainingEnergy--;
        if (clouds[position] === 1) {
            remainingEnergy -= 2;
        }
    }

    jump();

    while(position !== 0) {
        jump();
    }

    return remainingEnergy;
}