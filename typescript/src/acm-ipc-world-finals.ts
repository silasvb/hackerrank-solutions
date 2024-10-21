'use strict';

/**
 * There are a number of people who will be attending ACP-ICPC World Finals. Each of
 * them is well versed in a number of topics. Given a list of topics by each known 
 * attendee, presented as binary strings, determine the maximum number of topics a 2
 * person team can know. Each subject has a column in the binary string, and a '1' means
 * the subject is known while an '0' means it is not. Also, determine the number of
 * teams that know the maximum number of topics. Return an integer array with two 
 * elements. The first is the maximum number of topics known, and the second is the 
 * number of teams that know that topic.
 */

/**
 * 
 * @param topic A string of binary digits
 * @returns the maximum topics and the number of teams that know that many topics
 */
export function acmTeam(topicLine: string[]): number[] {

    let greatestScore = 0;
    let numberOfGreatest = 0;
    for (let i = 0; i < topicLine.length; i++) {
        for (let j = i + 1; j < topicLine.length; j++) {
            const answerableTopics: number = Array.from({ length: topicLine[0].length }, (v, k) => k).filter(idx => {
                return topicLine[i].charAt(idx) === '1' || topicLine[j].charAt(idx) === '1'
            }).length;

            if (answerableTopics > greatestScore) {
                greatestScore = answerableTopics;
                numberOfGreatest = 1;
            } else if (answerableTopics === greatestScore) {
                numberOfGreatest++;
            }
        }
    }

    return [greatestScore, numberOfGreatest];
}