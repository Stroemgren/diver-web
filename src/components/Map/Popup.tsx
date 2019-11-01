import React, { ReactNode } from 'react'
import { makeStyles, Paper } from '@material-ui/core'

type Props = {
    lat: number
    lng: number
    children: ReactNode
}

const Popup = (props: Props) => {
    const classes = useStyles()
    const { children } = props

    return (
        <Paper elevation={3} className={classes.container}>
            {children}
        </Paper>
    )
}

export default Popup

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        width: '250px',
        height: '100px',
        borderRadius: '5px',
        padding: '8px',
        transform: 'translate(-50%, -50%)',
        marginTop: '-56px'
    }
})
