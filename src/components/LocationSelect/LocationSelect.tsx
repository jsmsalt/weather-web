import { Autocomplete, Box, TextField } from "@mui/material";

interface ILocationSelectProps {
    onChange: (value: string) => void;
}

export const LocationSelect = ({ onChange }: ILocationSelectProps) => {
    const locations = [
        { code: "US", label: "Los Angeles, US" },
        { code: "MX", label: "Juárez, Chihuahua, MX" },
        { code: "ES", label: "Badalona, Barcelona, ES" },
        { code: "AR", label: "La Rioja, La Rioja, AR" },
        { code: "CL", label: "Punta Arenas, Magallanes, CL" },
    ];

    return (
        <Autocomplete
            disablePortal
            id='location'
            options={locations}
            autoHighlight
            freeSolo
            onChange={(event, value) => onChange(value ? (typeof value === "string" ? value : value.label) : "")}
            getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
            sx={{
                width: 400,
                margin: "20px auto",
            }}
            renderOption={(props, option) => (
                <Box component='li' sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading='lazy'
                        width='20'
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=''
                    />
                    {option.label}
                </Box>
            )}
            renderInput={(params) => <TextField {...params} label='Escribe o selecciona una ubicación' />}
        />
    );
};
