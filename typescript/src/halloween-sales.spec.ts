import { howManyGames } from "./halloween-sale";

describe("Test Cases for Halloween Sale", function () {

    it("Example", function () {
        expect(howManyGames(20, 3, 6, 70)).toBe(5);
    });

    it("Test Case 0", function () {
        expect(howManyGames(20, 3, 6, 80)).toBe(6);
    });

    it("Sample 0", function () {
        expect(howManyGames(20, 3, 6, 85)).toBe(7);
    });
});