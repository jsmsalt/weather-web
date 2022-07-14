import { useState } from "react";
import { ForecastList } from "../../components/ForecastList";

import { LocationSelect } from "../../components/LocationSelect";
import { WeatherCard } from "../../components/WeatherCard";

export const HomePage = () => {
    const [city, setCity] = useState("");

    return (
        <div>
            <LocationSelect onChange={(value) => setCity(value)} />
            <WeatherCard city={city} />
            <ForecastList city={city} />
        </div>
    );
};
