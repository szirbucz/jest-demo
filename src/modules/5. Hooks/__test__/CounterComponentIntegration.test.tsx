import { fireEvent, render, screen } from "@testing-library/react";
import { CounterComponent, minusButtonId, plusButtonId, valueId } from "../CounterComponent";

describe("<CounterComponent/>", () => {

    it ("Increases", () => {
        render(<CounterComponent/>);

        fireEvent.click(screen.getByTestId(plusButtonId));
        fireEvent.click(screen.getByTestId(plusButtonId));
        expect(screen.getByTestId(valueId)).toHaveTextContent("2");
    });
});