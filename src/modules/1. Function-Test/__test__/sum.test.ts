import { sum } from "../sum";
describe("Sum tool", () => {

    it("Should result 0 for empty arg list", () => {
        expect(sum()).toEqual(0);
    });

    it("Should be NaN when one of the elements is NaN", () => {
        expect(sum(1, 2, NaN)).toBeNaN();
    });

    it("Should be Infinity when one of the elements is Infinity", () => {
        expect(sum(1, 2, Infinity)).toBe(Infinity);
    });

});