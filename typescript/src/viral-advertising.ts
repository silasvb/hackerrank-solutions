/**
 * HackerLand Enterprise is adopting a new viral advertising 
 * strategy. When they launch a new product, they advertise it to
 * exactly 5 people on social media.
 * 
 * On the first day, half of those people like the advertisement 
 * and each shares it with three of their friends. At the beginning
 * of the second day, 6 people receive the advert.
 * 
 * Each day, half of the recipients like the advertisement and will
 * share it with three friends on the following day. Assuming 
 * nobody receives the advertisement twice, determine how many
 * people have liked the add by the end of a given day, beginning with
 * launch day as day 1.
 * 
 */


/**
 * 
 * @param n The day number to report
 * @returns The cumulative likes at that day
 */
export function viralAdvertising(n: number): number {
    const likes: number[] = [2];

    for(let i = 1; i < n; i++) {
        const newShares = 3 * likes[likes.length - 1];
        const newLikes = Math.floor(newShares / 2);
        likes.push(newLikes);
    }

    return likes.reduce((prev, current) => prev += current, 0);
}