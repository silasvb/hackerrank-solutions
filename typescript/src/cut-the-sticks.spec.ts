import { cutTheSticks } from "./cut-the-sticks"

describe("Test Cases for Cut the Sticks", function () {

    it("Test Case 1", function () {
        expect(cutTheSticks([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it("Test Case 2", function () {
        expect(cutTheSticks([5, 4, 4, 2, 2, 8])).toEqual([6, 4, 2, 1]);
    });

    it("Test Case 3", function () {
        expect(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])).toEqual([8, 6, 4, 1]);
    });

});