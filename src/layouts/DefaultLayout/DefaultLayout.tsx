import { Box, Container } from "@mui/material";
import { useAtom } from "jotai";
import { Outlet } from "react-router-dom";
import { bgMode } from "../../store/atoms";

export const DefaultLayout = () => {
    const [bg, _] = useAtom(bgMode);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "stretch",
                background: `linear-gradient(to top, ${bg === "day" ? "#6dd5ed, #2193b0" : "#004e92, #000428"})`,
            }}
        >
            <Container maxWidth='md' sx={{ py: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
};
