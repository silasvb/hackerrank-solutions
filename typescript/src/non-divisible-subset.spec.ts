import { nonDivisibleSubset } from "./non-divisible-subset";

describe("Test Cases for Non Divisible Subset", function () {

    it("Example", function () {
        const s = [19, 10, 12, 10, 24, 25, 22];
        const k = 4;


        expect(nonDivisibleSubset(k, s)).toBe(3);
    });

    it("Sample Input", function () {
        const s = [1, 7, 2, 4]
        const k = 3;
        expect(nonDivisibleSubset(k, s)).toBe(3);
    });

    it("Sample Case 1", function () {
        const s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436];
        const k = 7;
        expect(nonDivisibleSubset(k, s)).toBe(11);
    })

});