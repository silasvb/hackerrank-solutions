import { organizingContainers } from "./organizing-containers-of-balls";

describe("Test Cases for Organising Balls", function () {
    it("Example", function () {
        expect(organizingContainers([[1, 4], [2, 3]])).toBe("Impossible");
    });

    it("Sample 0", function () {
        expect(organizingContainers([[1, 0], [0, 1]])).toBe("Possible");
    });

    it("Sample 1", function () {
        expect(organizingContainers([[0, 2], [1, 1]])).toBe("Impossible");
    });

    it("Sample 2", function () {
        expect(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]])).toBe("Impossible");
    });

    it("Sample 3", function () {
        expect(organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]])).toBe("Possible");
    });
});