import { play } from "../DiceGame";
import { throwDie } from "../DiceService";

jest.mock("../DiceService");

describe("DiceGame", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockThrowDie = throwDie as jest.Mock

    it("Should result a win when player score is greater than opponent's one", () => {
        mockThrowDie.mockReturnValueOnce(4).mockReturnValueOnce(3);

        expect(play()).toEqual({win: true, playerScore: 4, opponentScore: 3});
        expect(mockThrowDie).toHaveBeenCalledTimes(2);
    });

    it("Should result a lose when player score is equal to opponent's one", () => {
        mockThrowDie.mockReturnValueOnce(2).mockReturnValueOnce(2);

        expect(play()).toEqual({win: false, playerScore: 2, opponentScore: 2});
        expect(mockThrowDie).toHaveBeenCalledTimes(2);
    });

    it("Should result a lose when player score is less than opponent's one", () => {
        mockThrowDie.mockReturnValueOnce(2).mockReturnValueOnce(6);

        expect(play()).toEqual({win: false, playerScore: 2, opponentScore: 6});
        expect(mockThrowDie).toHaveBeenCalledTimes(2);
    });


    

})