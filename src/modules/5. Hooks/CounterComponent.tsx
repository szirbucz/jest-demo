import React from "react";
import { Button } from "react-bootstrap";
import { useCounter } from "./useCounter";

export const plusButtonId = "plus-button"
export const minusButtonId = "minus-button"
export const valueId = "value-span"

export function CounterComponent() {
    const {increase, decrease, value} = useCounter();

    return (
        <div>
            <Button onClick={increase} value="+" data-testid={plusButtonId}/>
            <Button onClick={decrease} value="-" data-testid={minusButtonId}/>
            <span data-testid={valueId}>{value}</span>
        </div>
    )
}