// import { SvgIcon } from "@mui/material";
import { useEffect, useState } from "react";

interface IWeatherIconProps {
    icon: string;
    size: number;
}

export const WeatherIcon = ({ icon, size = 250 }: IWeatherIconProps) => {
    const [SvgIcon, setSvgIcon] = useState<string>("");

    useEffect(() => {
        const importIcon = async () => {
            try {
                setSvgIcon((await import(`../../assets/icons/${icon}.svg`)).default);
            } catch (error) {
                console.log(error);
            }
        };
        importIcon();
    }, [icon]);

    return <>{Boolean(SvgIcon) && <img src={SvgIcon} alt={icon} style={{ width: size, height: size }} />}</>;
};
