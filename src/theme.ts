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

    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: "white",
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: "white",
                    borderRadius: "10px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },

                    "&:focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                }),
                notchedOutline: ({ theme }) => ({
                    borderColor: "white",
                }),
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fill: "white",
                }),
            },
        },
    },
});
