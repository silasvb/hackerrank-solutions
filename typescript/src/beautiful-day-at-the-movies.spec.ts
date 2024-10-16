import { beautifulDays } from "./beautiful-day-at-the-movies";

describe("Tests for Beautiful Day at the Movies", function() {

    it("Test Case 0", function() {
        expect(beautifulDays(20, 23, 6)).toBe(2);
    });

});