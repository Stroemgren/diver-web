import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import AvatarMap from './AvatarMap'

type Props = {

}

const SpotCard = (props: Props) => {
    const classes = useStyles()

    return (
        <Paper className={classes.container}>
            <AvatarMap coordinate={{ latitude: 56, longitude: 12 }} />
        </Paper>
    )
}

export default SpotCard

const useStyles = makeStyles({
    container: {
        height: '120px'
    }
})
