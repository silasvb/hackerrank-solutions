import { createGunzip } from "zlib";
import { chocolateFeast } from "./chocolate-feast";

describe("Test Cases for Chocolate Feasts", function () {

    it("Example", function () {
        expect(chocolateFeast(15, 3, 2)).toBe(9);
    });

    it("Test Case 0", function () {
        expect(chocolateFeast(10, 2, 5)).toBe(6);
        expect(chocolateFeast(12, 4, 4)).toBe(3);
        expect(chocolateFeast(6, 2, 2)).toBe(5);
    });

});