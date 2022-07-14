export interface IWeather {
    datetime: string;
    description: string;
    icon: string;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    wind_speed: number;
    wind_direction: number;
    visibility: number;
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface ILocation {
    city: string;
    country: string;
    coord: ICoord;
}

export interface ICurrentResponse {
    location: ILocation;
    weather: IWeather;
}

export interface IForecastResponse {
    location: ILocation;
    forecast: Array<IWeather>;
}
