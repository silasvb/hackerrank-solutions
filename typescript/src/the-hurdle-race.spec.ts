import { hurdleRace } from './the-hurdle-race';


describe("Test", function () {

    it("Test Case 0", function () {
        const result = hurdleRace(4, [1, 6, 3, 5, 2]);

        expect(result).toBe(2);
    });

    it("Hundle is greater than the jump height", function () {
        const result = hurdleRace(7, [2, 5, 4, 5, 2]);
        expect(result).toBe(2);
    });
})
