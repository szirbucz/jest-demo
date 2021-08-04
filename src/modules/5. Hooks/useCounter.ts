import { useState } from "react"

export type UseCounterResponse = {
    increase: () => void,
    decrease: () => void,
    value: number
}

export function useCounter(): UseCounterResponse {
    const [value, setValue] = useState<number>(0);

    const increase = () => {setValue(value + 1)};

    const decrease = () => {setValue(value - 1)};

    return {increase, decrease, value};
}