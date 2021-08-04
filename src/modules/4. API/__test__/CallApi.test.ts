import MockAdapter from "axios-mock-adapter";
import { getMyNumbers } from "../CallApi";
import { getAPI } from "../NumberApi";


let mock: MockAdapter;

describe("CallApi", () => {

    beforeAll(async () => {
        mock = new MockAdapter(await getAPI());
    })

    afterEach(() => {
        jest.clearAllMocks();
        mock.reset();
    })

    it("Should throw error on exception", async () => {
        mock.onGet("/numbers").networkErrorOnce()

        expect(getMyNumbers()).rejects.toThrow("Network Error").catch(() => {});
    });

    it("Should return the numbers from the API when response is 200", async () => {
        mock.onGet("/numbers").reply(200, {numbers: [1, 2, 3]});

        expect(getMyNumbers()).resolves.toEqual([1, 2, 3]);
    })
})