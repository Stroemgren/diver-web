import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
import AvatarMap from './AvatarMap'
import { Location } from 'diver-models'

type Props = {
    spot: Location
}

const SpotCard = (props: Props) => {
    const classes = useStyles()
    const { spot } = props

    return (
        <Paper className={classes.container}>
            <AvatarMap coordinate={spot.coordinate} />
            <div style={{padding: '8px'}}>
                <Typography variant="overline" style={{lineHeight: 1, fontSize: '0.6rem'}}>{spot.entryType} dive</Typography>
                <Typography variant="subtitle2" style={{lineHeight: 1.25}}>{spot.name}</Typography>
            </div>
        </Paper>
    )
}

export default SpotCard

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        height: '230px',
        marginRight: '16px'
    }
})
