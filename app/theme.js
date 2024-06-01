'use client'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        theme: "light",
        primary: {
            main: "#d32f2f"
        },
        secondary: {
            main: "#1976d2"
        },
        info: {
            main: '#616161'
        }
    },
    typography: {
        fontFamily: "Poppins"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            },
            defaultProps: {
                disableElevation: true,
            }
        }
    }
})

export default theme;