import axios, { AxiosInstance } from "axios";

export const APIInstance = axios.create({
    baseURL: "https://example.com",
});

export async function getAPI() : Promise<AxiosInstance> {
    return APIInstance;
}