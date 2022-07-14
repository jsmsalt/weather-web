import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "stretch",
                background: "linear-gradient(to top, #6dd5ed, #2193b0)",
            }}
        >
            <Container maxWidth='md' sx={{ py: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
};
