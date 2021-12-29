import { createTheme  } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
    secondary: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    },
})