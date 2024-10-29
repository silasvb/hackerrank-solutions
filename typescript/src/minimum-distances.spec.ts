import { off } from "process";
import { minimumDistances } from "./minimum-distances";

describe("Test Cases for Minimum Distances", function () {
    it("Example", function () {
        expect(minimumDistances([7, 2, 4, 5, 2, 7])).toBe(3);
    });

});