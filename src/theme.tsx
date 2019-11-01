import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0C7ED9'
        },
        secondary: {
            main: '#FF8C20'
        }
    },
    typography: {
        fontFamily: [
            'Muli',
            'sans-serif'
        ].join(','),
    }
})