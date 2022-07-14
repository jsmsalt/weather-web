import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import dayjs from "dayjs";
import "dayjs/locale/es";

import { getCurrentWeather } from "../../services";
import { ICurrentResponse } from "../../services/interfaces";
import { WeatherIcon } from "../WeatherIcon";

interface IWeatherCardProps {
    city?: string;
}

export const WeatherCard = ({ city }: IWeatherCardProps) => {
    const [weather, setWeather] = useState<ICurrentResponse>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getCurrentWeather(city).then((res) => {
            if (res.ok) {
                setWeather(res.data);
            }
            setLoading(false);
        });
    }, [city]);

    return (
        <Card
            elevation={0}
            sx={{ width: "100%", background: "rgba(0,0,0,0.1)", borderRadius: "40px", padding: "20px" }}
        >
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {weather && !loading ? (
                            <Typography
                                variant='h6'
                                sx={{
                                    color: "white",
                                    textTransform: "uppercase",
                                }}
                                gutterBottom
                            >
                                {dayjs(weather!.weather.datetime).locale("es").format("dddd, D [de] MMMM")}
                            </Typography>
                        ) : (
                            <Skeleton variant='rectangular' width={200} height={30} sx={{ marginBottom: "10px" }} />
                        )}
                    </Grid>

                    <Grid item xs={8}>
                        {weather && !loading ? (
                            <Typography
                                variant='h4'
                                sx={{
                                    color: "white",
                                    textTransform: "uppercase",
                                }}
                            >
                                {weather!.weather.description}
                            </Typography>
                        ) : (
                            <Skeleton variant='rectangular' width={230} height={40} sx={{ marginBottom: "20px" }} />
                        )}

                        {weather && !loading ? (
                            <Typography variant='h1' sx={{ color: "white" }}>
                                {Math.floor(weather!.weather.temp)}°C
                            </Typography>
                        ) : (
                            <Skeleton variant='rectangular' width={330} height={80} sx={{ marginBottom: "20px" }} />
                        )}

                        {weather && !loading ? (
                            <Typography
                                variant='h6'
                                sx={{
                                    color: "white",
                                    marginBottom: "20px",
                                }}
                            >
                                Humedad: {weather!.weather.humidity}%, Presión: {weather!.weather.pressure}hPa
                            </Typography>
                        ) : (
                            <Skeleton variant='rectangular' width={320} height={30} sx={{ marginBottom: "20px" }} />
                        )}

                        {weather && !loading ? (
                            <Typography
                                variant='h4'
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <LocationOnOutlinedIcon
                                    fontSize='large'
                                    sx={{
                                        color: "white",
                                        marginRight: "10px",
                                    }}
                                />
                                <>
                                    {weather!.location.city}, {weather!.location.country}
                                </>
                            </Typography>
                        ) : (
                            <Skeleton variant='rectangular' width={330} height={40} />
                        )}
                    </Grid>

                    <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        {weather && !loading ? (
                            <WeatherIcon icon={weather!.weather.icon} size={220} />
                        ) : (
                            <Skeleton variant='circular' width={220} height={220} />
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
