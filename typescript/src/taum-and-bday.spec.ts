import { taumBDay } from "./taum-and-bday";

describe("Test Cases for Taum And BDay", function () {

    it("Example", function () {
        expect(taumBDay(3, 5, 3, 4, 1)).toBe(BigInt(29));
    });


    [
        {
            b: 10, w: 10, bc: 1, wc: 1, z: 1, solution: BigInt(20)
        },
        {
            b: 5, w: 9, bc: 2, wc: 3, z: 4, solution: BigInt(37)
        },
        {
            b: 3, w: 6, bc: 9, wc: 1, z: 1, solution: BigInt(12)
        },
        {
            b: 7, w: 7, bc: 4, wc: 2, z: 1, solution: BigInt(35)
        },
        {
            b: 3, w: 3, bc: 1, wc: 9, z: 2, solution: BigInt(12)
        }
    ].forEach(tc => {
        it("Sample Input", function () {
            expect(taumBDay(tc.b, tc.w, tc.bc, tc.wc, tc.z)).toBe(tc.solution);
        });
    });

});