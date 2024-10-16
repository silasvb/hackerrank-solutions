import { angryProfessor } from "./angry-professor";

describe("Test Cases for Angry Professor", function() {

    it("Test Case 0", function() {
        expect(angryProfessor(3, [-1, -3, 4, 2])).toBe("YES");
    })

    it("Test Case 1", function() {
        expect(angryProfessor(2, [0, -1, 2, 1])).toBe("NO");
    })

});

