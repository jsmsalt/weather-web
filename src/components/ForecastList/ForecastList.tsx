import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import "dayjs/locale/es";
import dayjs from "dayjs";

import { IForecastResponse } from "../../services/interfaces";
import { getForecast } from "../../services/forecast";
import { ForecastItem } from "../ForecastItem";

interface IForecastListProps {
    city?: string;
}

export const ForecastList = ({ city }: IForecastListProps) => {
    const [forecast, setForecast] = useState<IForecastResponse>();
    const [loading, setLoading] = useState(true);
    const [dates, setDates] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>();

    useEffect(() => {
        setLoading(true);
        getForecast(city).then((res) => {
            if (res.ok) {
                setForecast(res.data);
            }
            setLoading(false);
        });
    }, [city]);

    useEffect(() => {
        if (forecast) {
            setDates(
                forecast.forecast
                    .map((weather) => dayjs(weather.datetime).format("YYYY-MM-DD"))
                    .filter((date, index, array) => array.indexOf(date) === index)
            );
        }
    }, [forecast]);

    useEffect(() => {
        if (dates) {
            setSelectedDate(dates[0]);
        }
    }, [dates]);

    return (
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                {dates?.map((date) => (
                    <Button
                        variant={selectedDate === date ? "contained" : "outlined"}
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        sx={{
                            borderRadius: "20px",
                            margin: "0 5px",
                            borderColor: "white",
                            color: "white",
                            "&:hover": { color: "#eee" },
                        }}
                    >
                        {dayjs(date).locale("es").format("D [de] MMMM")}
                    </Button>
                ))}
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    maxWidth: "100%",
                    overflowX: "scroll",
                    "::-webkit-scrollbar": { display: "none" },
                }}
            >
                {forecast && (
                    <>
                        {forecast.forecast
                            .filter((weather) => dayjs(weather.datetime).format("YYYY-MM-DD") === selectedDate)
                            .map((weather) => (
                                <ForecastItem weather={weather} />
                            ))}
                    </>
                )}
            </Grid>
        </Grid>
    );
};
