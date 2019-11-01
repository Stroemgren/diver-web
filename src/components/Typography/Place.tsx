import React, { ReactNode } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { TypographyProps } from '@material-ui/core/Typography'
import PlaceIcon from '@material-ui/icons/Place'

type Props = {
    children: ReactNode
} & TypographyProps

const Place = (props: Props) => {
    const classes = useStyles()
    const { children, paragraph, ...rest } = props

    return (
        <div className={classes.container} style={{ marginBottom: paragraph ? '16px' : 0 }}>
            <PlaceIcon className={classes.icon} />
            <Typography variant="body1" className={classes.text} { ...rest }>{children}</Typography>
        </div>
    )
}

export default Place

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.125rem',
        marginRight: '2px',
        marginLeft: '-2px',
        color: theme.palette.primary.main
    },
    text: {
        fontSize: '0.825rem',
        color: theme.palette.primary.main
    }
}))
