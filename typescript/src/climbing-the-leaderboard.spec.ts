import { climbingLeaderboard } from "./climbing-the-leaderboard";


describe("Test Cases for Climbing the Leaderboard", function () {

    it("Example", function () {
        expect(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])).toEqual([4, 3, 1]);
    });

    it("Test Case 0", function () {
        expect(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).toEqual([6, 4, 2, 1]);
    })

});