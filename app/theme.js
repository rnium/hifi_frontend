'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        theme: "light",
        primary: {
            main: "#d32f2f"
        },
        secondary: {
            main: "#2e7d32"
        }
    },
    typography: {
        fontFamily: "Poppins"
    }
})

export default theme;