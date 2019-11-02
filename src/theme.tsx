import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: '#0C7ED9'
        },
        secondary: {
            main: '#FF8C20'
        },
        text: {
            primary: '#484848'
        }
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),
        h1: {
            fontWeight: 500
        },
        h2: {
            fontWeight: 500
        },
        h3: {
            fontWeight: 500
        },
        h4: {
            fontWeight: 500
        },
        h5: {
            fontWeight: 500
        },
        h6: {
            fontWeight: 500
        },
    }
}))