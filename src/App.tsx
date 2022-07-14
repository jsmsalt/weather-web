import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { theme } from "./theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<HomePage />} />
                </Route>

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </ThemeProvider>
    );
};
