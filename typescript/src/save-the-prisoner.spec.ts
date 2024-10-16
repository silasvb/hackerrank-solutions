import { saveThePrisoner } from "./save-the-prisoner";

describe("Test Cases for Save The Prisoner", function() {
    it("Test Case 0", function() {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
    });

    it("Test Case 1", function() {
        expect(saveThePrisoner(5, 2, 2)).toBe(3);
    });

    it("Test Case 3", function() {
        expect(saveThePrisoner(7, 19, 2)).toBe(6);
    });

    it("Test Cae 4", function() {
        expect(saveThePrisoner(3, 7, 3)).toBe(3);
    });

})