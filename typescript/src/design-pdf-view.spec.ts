import { designerPdfViewer } from './design-pdf-view';

describe("Test cases for Design PDF View", function() {

    it("Test Case 0", function() {
        const heights: number[] = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
        ];
        const word: string = "abc";

        expect(designerPdfViewer(heights, word)).toBe(9);
    });

    it("Test Case 1", function() {
        const heights: number[] = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7
        ];
        const word: string = "zaba";

        expect(designerPdfViewer(heights, word)).toBe(28);
    });
});