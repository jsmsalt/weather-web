import { ApisauceInstance, create } from "apisauce";

export const httpClient: ApisauceInstance = create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});
