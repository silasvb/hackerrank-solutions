import { squares } from "./sherlock-and-squares";

describe("Test Cases for Sherlock and Squares", function () {

    it("Test Case 0", function () {
        expect(squares(24, 49)).toBe(3);
    });

    it("Test Case 1", function () {
        expect(squares(3, 9)).toBe(2);
    });

    it("Test Case 2", function () {
        expect(squares(17, 24)).toBe(0);
    });
});