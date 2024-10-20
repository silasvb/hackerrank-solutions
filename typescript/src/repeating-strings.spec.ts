import { repeatedStrings } from "./repeating-strings";

describe("Test Cases for Repeating Strings", function () {

    it("Test Case 0", function () {
        expect(repeatedStrings('abcac', 10)).toBe(4);
    });

    it("Test Case 1", function () {
        expect(repeatedStrings('aba', 10)).toBe(7);
    });

    it("Test Case 1", function () {
        expect(repeatedStrings("a", 10000000000)).toBe(10000000000);
    })

});