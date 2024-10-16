import { hurdleRace } from './the-hurdle-race';


describe("Test", function () {

    it("All hurdles are lower than the Jump", function () {
        const result = hurdleRace(4, [1, 1, 2, 1, 3]);

        expect(result).toBe(0);
    });

    it("Hundle is greater than the jump height", function () {
        const result = hurdleRace(5, [1, 5, 2, 7, 2, 3]);
        expect(result).toBe(2);
    });
})
