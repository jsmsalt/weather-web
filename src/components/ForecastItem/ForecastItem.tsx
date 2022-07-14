import { Card, CardContent, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/es";

import { IWeather } from "../../services/interfaces";
import { WeatherIcon } from "../WeatherIcon";

interface IForecastItemProps {
    weather: IWeather;
}

export const ForecastItem = ({ weather }: IForecastItemProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                width: "150px",
                background: "rgba(0,0,0,0.1)",
                borderRadius: "20px",
                padding: "10px",
                margin: "10px",
                flexShrink: 0,
            }}
        >
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant='h5' color='white'>
                            {dayjs(weather.datetime).locale("es").format("HH:mm")}
                        </Typography>

                        <WeatherIcon icon={weather.icon} size={80} />

                        <Typography variant='body2' color='white' sx={{ marginBottom: "15px", textAlign: "center" }}>
                            {weather.description.toUpperCase()}
                        </Typography>

                        <Typography variant='body1' color='white'>
                            Min: {Math.floor(weather.temp_min)}°C
                        </Typography>

                        <Typography variant='body1' color='white'>
                            Max: {Math.floor(weather.temp_max)}°C
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
