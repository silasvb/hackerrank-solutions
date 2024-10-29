import { workbook } from "./lisas-workbook";


describe("Test Cases for Lisa's Workbook", function () {

    it("Example", function () {
        expect(workbook(2, 3, [4, 2])).toBe(1);
    });

    it("Sample Input", function () {
        expect(workbook(5, 3, [4, 2, 6, 1, 10])).toBe(4);
    });

});