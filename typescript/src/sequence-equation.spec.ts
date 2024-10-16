import { permutationEquation } from "./sequence-equation";

describe("Test Cases for Sequence Equation", function() {

    it("Test Case 0", function() {
        expect(permutationEquation([2, 3, 1])).toEqual([2, 3, 1]);
    });

    it("Test Case 1", function() {
        expect(permutationEquation([4, 3, 5, 1, 2])).toEqual([1, 3, 5, 4, 2]);
    });

    it("Test Case 2", function() {
        expect(permutationEquation([5, 2, 1, 3, 4])).toEqual([4, 2, 5, 1, 3]);
    })

});