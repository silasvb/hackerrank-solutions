import { isKaprekarNumber } from "./modified-kaprekar-numbers";

describe("Tests for Modified Kaprekar Numbers", function () {

    it("Test Case 1", function () {

        expect(isKaprekarNumber(1)).toBe(true);
        expect(isKaprekarNumber(9)).toBe(true);
        expect(isKaprekarNumber(45)).toBe(true);
        expect(isKaprekarNumber(55)).toBe(true);
        expect(isKaprekarNumber(99)).toBe(true);

        expect(isKaprekarNumber(2)).toBe(false);
        expect(isKaprekarNumber(8)).toBe(false);
        expect(isKaprekarNumber(10)).toBe(false);
        expect(isKaprekarNumber(54)).toBe(false);
        expect(isKaprekarNumber(100)).toBe(false);

    });

});