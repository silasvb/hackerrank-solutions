import { libraryFine } from "./library-fine";

describe("Test Cases for Library Fine", function () {

    it("Test Case 0", function () {
        expect(libraryFine(9, 6, 2015, 6, 6, 2015)).toBe(45);
    });

    it("Test Case 1", function () {
        expect(libraryFine(14, 7, 2018, 5, 7, 2018)).toBe(135);
    });

    it("Test Case 2", function () {
        expect(libraryFine(1, 1, 2024, 4, 1, 2022)).toBe(20000);
    });

});