import { httpClient } from "./httpClient";
import { IForecastResponse } from "./interfaces";

export const getForecast = async (city?: string) => httpClient.get<IForecastResponse>(`/forecast/${city ? city : ""}`);
