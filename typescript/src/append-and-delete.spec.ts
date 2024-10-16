import { appendAndDelete } from "./append-and-delete";

describe("Test Cases for Append and Delete", function () {

    it("Test Case 0", function () {
        expect(appendAndDelete("abc", "def", 6)).toBe("Yes");
    });

    it("Test Case 1", function () {
        expect(appendAndDelete("hackerhappy", "hackerrank", 9)).toBe("Yes");
    });

    it("Test Case 2", function () {
        expect(appendAndDelete("aba", "aba", 7)).toBe("Yes");
    });

    it("Test Case 3", function () {
        expect(appendAndDelete("ashley", "ash", 2)).toBe("No");
    })

    it("Test Case 4", function () {
        expect(appendAndDelete("ash", "ash", 0)).toBe("Yes");
    })

});