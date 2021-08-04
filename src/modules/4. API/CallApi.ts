import axios from "axios";
import { getAPI } from "./NumberApi";

type NumbersResponse = {
    numbers: number[];
}

export async function getMyNumbers() : Promise<number[]> {
    return (await getAPI()).get<NumbersResponse>("/numbers")
        .then(response => response.data.numbers)
        
}