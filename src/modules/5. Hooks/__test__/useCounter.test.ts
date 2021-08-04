import { useCounter } from "../useCounter";
import { act, renderHook, RenderResult } from '@testing-library/react-hooks';


describe("useCounter hook", () => {

    it("Should start with 0", () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.increase).toBeDefined();
        expect(result.current.decrease).toBeDefined();
        expect(result.current.value).toEqual(0);
    });

    it("Should add 1 to the value on increase", () => {
        const { result } = renderHook(() => useCounter());

        act(result.current.increase);
        expect(result.current.value).toEqual(1);

        act(result.current.increase);
        expect(result.current.value).toEqual(2);
    })

    it("Should sub 1 from the value on decrease", () => {
        const { result } = renderHook(() => useCounter());

        act(result.current.decrease);
        expect(result.current.value).toEqual(-1);
    })

    it("Should combine increase and decrease", () => {
        const { result } = renderHook(() => useCounter());

        act(result.current.decrease);
        expect(result.current.value).toEqual(-1);

        act(result.current.increase);
        expect(result.current.value).toEqual(0);

        act(result.current.increase);
        expect(result.current.value).toEqual(1);

        act(result.current.increase);
        expect(result.current.value).toEqual(2);

        act(result.current.decrease);
        expect(result.current.value).toEqual(1);
    })
});