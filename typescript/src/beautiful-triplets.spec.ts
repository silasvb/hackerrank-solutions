import { beautifulTriplets } from "./beautiful-triplets";

describe("Test Cases for Beautiful Triplets", function () {
    it("Example", function () {
        expect(beautifulTriplets(1, [2, 2, 3, 4, 5])).toBe(3);
    });

    it("Sample Input", function () {
        expect(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])).toBe(3);
    });
});