import { circularArrayRotation } from "./circular-array-rotation";

describe("Test Cases for Circular Array Rotations", function() {
    it("Test Case 0", function() {
        expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([2, 3, 1]);
    })
});