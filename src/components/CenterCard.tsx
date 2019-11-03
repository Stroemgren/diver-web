import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
import AvatarMap from './AvatarMap'
import { Center } from 'diver-models'

type Props = {
    center: Center
    onClick?: (spot: Center) => void
}

const CenterCard = (props: Props) => {
    const classes = useStyles(props)
    const { center, onClick } = props

    const handleClick = () => {
        if (onClick) {
            onClick(center)
        }
    }

    return (
        <Paper onClick={handleClick} className={classes.container} style={{ cursor: onClick ? 'pointer' : 'auto' }}>
            <AvatarMap coordinate={center.coordinate} />
            <div style={{padding: '8px'}}>
                <Typography variant="overline" style={{lineHeight: 1, fontSize: '0.6rem'}}>{center.address.city.name}</Typography>
                <Typography variant="subtitle2" style={{lineHeight: 1.25}}>{center.name}</Typography>
            </div>
        </Paper>
    )
}

export default CenterCard

const useStyles = makeStyles({
    container: {
        width: '150px',
        height: '230px',
        marginRight: '16px'
    }
})
