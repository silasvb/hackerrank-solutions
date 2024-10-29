import { encryption } from "./encryption";

describe("Test Cases for Encryption", function () {
    it("Example", function () {
        const s = "if man was meant to stay on the ground god would have given us roots";
        const e = `imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`;

        expect(encryption(s)).toBe(e);
    });

    it("Sample Test 0", function () {
        const s = "haveaniceday";
        const e = "hae and via ecy";
        expect(encryption(s)).toBe(e);
    });

    it("Sample Test Case 2", function () {
        const s = "chillout";
        const e = "clu hlt io";
        expect(encryption(s)).toBe(e);

    });
})