import { httpClient } from "./httpClient";
import { ICurrentResponse } from "./interfaces";

export const getCurrentWeather = async (city?: string) =>
    httpClient.get<ICurrentResponse>(`/current/${city ? city : ""}`);
