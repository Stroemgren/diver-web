import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@mdi/react'
import { mdiSkullOutline, mdiSpaOutline, mdiSwapVertical } from '@mdi/js'
import { Typography, Paper } from '@material-ui/core'
import { Location } from 'diver-models'

type Props = {
    location: Location
}

const Attribute = (props: { text: string, icon: string }) => {
    const classes = useStyles()

    return (
        <div className={classes.item}>
            <Icon
                className={classes.icon}
                path={props.icon}
                title="User Profile"
                size={1}
            />
            <Typography className={classes.text} variant="body2">{props.text}</Typography>
        </div>
    )
}

const Attributes = (props: Props) => {
    const classes = useStyles(props)
    const { location } = props

    return (
        <Paper elevation={1} className={classes.container}>
            <Attribute icon={mdiSkullOutline} text={location.entryType + ' Entry'} />
            <Attribute icon={mdiSpaOutline} text={location.locationType} />
            <Attribute icon={mdiSwapVertical} text={`${location.minDepth}-${location.maxDepth}m`} />
        </Paper>
    )
}

export default Attributes

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '24px',
        padding: '8px 0'
    },
    item: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        marginBottom: '4px',
        fill: '#555'
    },
    text: {
        fontSize: '0.725rem',
        color: '#555'
    }
})
