import { timeInWords } from "./the-time-in-words";

describe("Test Cases for The Time in Words", function () {

    it("On the Hour", function () {
        expect(timeInWords(4, 0)).toBe("four o' clock");
        expect(timeInWords(12, 0)).toBe("twelve o' clock");
    });

    it("One Minute Past", function () {
        expect(timeInWords(4, 1)).toBe("one minute past four");
        expect(timeInWords(12, 1)).toBe("one minute past twelve");
        expect(timeInWords(1, 1)).toBe("one minute past one");
    });

    it("Ten Minutes Past", function () {
        expect(timeInWords(4, 10)).toBe("ten minutes past four");
        expect(timeInWords(12, 10)).toBe("ten minutes past twelve");
    });

    it("Quarter Past", function () {
        expect(timeInWords(4, 15)).toBe("quarter past four");
        expect(timeInWords(12, 15)).toBe("quarter past twelve");
    });

    it("Half Past", function () {
        expect(timeInWords(4, 30)).toBe("half past four");
        expect(timeInWords(12, 30)).toBe("half past twelve");
    });

    it("Twenty To", function () {
        expect(timeInWords(4, 40)).toBe("twenty minutes to five");
        expect(timeInWords(12, 40)).toBe("twenty minutes to one");
    });

    it("Quarter To", function () {
        expect(timeInWords(4, 45)).toBe("quarter to five");
        expect(timeInWords(12, 45)).toBe("quarter to one");
    })

    it("One Minute To", function () {
        expect(timeInWords(4, 59)).toBe("one minute to five");
        expect(timeInWords(12, 59)).toBe("one minute to one");
    })


});