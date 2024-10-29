import { stones } from "./manasa-and-stones";

describe("Test Cases for Manasa and Stones", function () {

    it("Sample Test 0", function () {
        expect(stones(4, 10, 100)).toEqual([30, 120, 210, 300]);
    });

});