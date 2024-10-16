import { jumpingOnTheClouds } from "./jumping-on-the-clouds-revisted"

describe("Test Cases for Jumping on the Clouds Revisited", function () {
    it("Test Case 0", function() {
        expect(jumpingOnTheClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92);
    })
})