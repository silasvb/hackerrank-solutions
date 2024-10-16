import { findDigits } from "./find-digits";

describe("Test Cases for Find Digits", function() {

    it("Test Case 0", function() {
        expect(findDigits(124)).toBe(3);
    });

    it("Test Case 1", function() {
        expect(findDigits(111)).toBe(3);
    });

    it("Test Case 2", function() {
        expect(findDigits(12)).toBe(2);
    });

    it("Test Case 4", function() {
        expect(findDigits(1024)).toBe(3);
    });

});