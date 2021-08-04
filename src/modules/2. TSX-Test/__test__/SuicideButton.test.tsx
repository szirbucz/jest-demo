import { fireEvent, render, screen } from "@testing-library/react";
import { SuicideButton } from "../SuicideButton";
import '@testing-library/jest-dom/extend-expect';

const suicideButtonId = "suicide-button";

describe("<SuicideButton/>", () => {

    it("Should hide the button on click", () => {
        render(<SuicideButton/>);

        expect(screen.getByTestId(suicideButtonId)).toBeVisible();

        fireEvent.click(screen.getByTestId(suicideButtonId))

        expect(screen.queryAllByTestId(suicideButtonId)).toHaveLength(0);
    });
});