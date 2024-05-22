'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        theme: "light",
        primary: {
            main: "#d32f2f"
        },
        secondary: {
            main: "#21bb88"
        }
    },
    typography: {
        fontFamily: "Poppins"
    }
})

export default theme;