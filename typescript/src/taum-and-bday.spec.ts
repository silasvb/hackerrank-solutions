import { SlowBuffer } from "buffer";
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
        },
        {
            b: 443463982, w: 833847400, bc: 429734889, wc: 628664883, z: 610875522, solution: BigInt(714782523241122198)
        },
        {
            b: 623669229, w: 435417504, bc: 266946955, wc: 600641444, z: 515391879, solution: BigInt(428016399954183471)
        }
    ].forEach(tc => {
        it("Sample Input", function () {
            expect(taumBDay(tc.b, tc.w, tc.bc, tc.wc, tc.z)).toBe(tc.solution);
        });
    });

});