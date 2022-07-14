import { httpClient } from "./httpClient";

export const getForecast = async (city?: string) => httpClient.get(`/forecast/${city ? city : ""}`);
