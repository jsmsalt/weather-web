import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#eee",
            paper: "#fff",
        },
        primary: {
            main: "#9B26B6",
            contrastText: "#fff",
        },
    },
});
