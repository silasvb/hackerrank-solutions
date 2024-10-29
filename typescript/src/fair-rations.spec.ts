import { fairRations } from "./fair-rations";

describe("Test Cases for Fair Rations", function () {
    it("Example", function () {
        expect(fairRations([4, 5, 6, 7])).toBe("4");
    });

    it("Sample 0", function () {
        expect(fairRations([2, 3, 4, 5, 6])).toBe("4");
    });

    it("Sample 1", function () {
        expect(fairRations([1, 2])).toBe("NO");
    });

});