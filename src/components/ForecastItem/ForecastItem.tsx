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

                        <Typography
                            variant='body2'
                            color='white'
                            sx={{ marginBottom: "5px", textAlign: "center", minHeight: "50px" }}
                        >
                            {weather.description.toUpperCase()}
                        </Typography>

                        <Typography variant='h4' color='white' sx={{ marginBottom: "5px", textAlign: "center" }}>
                            {Math.floor(weather.temp)}°C
                        </Typography>

                        <Typography variant='body1' color='white' sx={{ textAlign: "center" }}>
                            Humedad: {Math.floor(weather.humidity)}%
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
