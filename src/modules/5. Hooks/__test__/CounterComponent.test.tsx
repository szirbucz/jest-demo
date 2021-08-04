import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CounterComponent, minusButtonId, plusButtonId, valueId } from "../CounterComponent";
import '@testing-library/jest-dom/extend-expect';

const mockIncrease = jest.fn();
const mockDecrease = jest.fn();
const mockValue = jest.fn();

jest.mock("../useCounter", () => ({
    useCounter: () => ({
        increase: mockIncrease,
        decrease: mockDecrease,
        value: mockValue()
    })

}))

describe("<CounterComponent/>", () => {

    afterEach(cleanup);

    afterAll(() => {
        jest.unmock('../useCounter.ts');
      });

    it("Should be rendered", () => {
        render(<CounterComponent/>);

        expect(screen.getByTestId(plusButtonId)).toBeDefined();
        expect(screen.getByTestId(minusButtonId)).toBeDefined();
        expect(screen.getByTestId(valueId)).toBeDefined();
    });

    it("Should show value", () => {
        mockValue.mockReturnValue(42);
        render(<CounterComponent/>);

        expect(screen.getByTestId(valueId)).toHaveTextContent("42");

    });

    it("Should call increase on plus button click", () => {
        render(<CounterComponent/>);

        fireEvent.click(screen.getByTestId(plusButtonId));

        expect(mockIncrease).toHaveBeenCalledTimes(1);
    });

    it("Should call decrease on minus button click", () => {
        render(<CounterComponent/>);

        fireEvent.click(screen.getByTestId(minusButtonId));

        expect(mockDecrease).toHaveBeenCalledTimes(1);
    });

});