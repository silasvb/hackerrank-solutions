import {utopianTree} from './utopian-tree';

describe("Test Cases for Utopian Tree", function()
{
    it("Test Case 0", function() {
        expect(utopianTree(0)).toBe(1);
    });

    it("Test Case 1", function() {
        expect(utopianTree(1)).toBe(2);
    });

    it("Test Case 3", function() {
        expect(utopianTree(4)).toBe(7);
    })
}); 