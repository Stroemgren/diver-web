import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
const Color = require('color')

const defaultProps = {
    color: 'primary' as 'primary' | 'secondary'
}

type Props = {
    lat: number
    lng: number
    active?: boolean
    onClick?: () => void
} & Partial<typeof defaultProps>

const Marker = (props: Props) => {
    const classes = useStyles(props)
    const { color, onClick, active } = { ...defaultProps, ...props }

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    const markerClass = clsx(
        classes.container, 
        color === 'primary' ? classes.primary : classes.secondary,
        onClick && classes.clickable,
        active && classes.active
    )

    return (
        <div onClick={handleClick} className={markerClass}>
            <div></div>
        </div>
    )
}

export default Marker

const useStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& div': {
            width: '8px',
            height: '8px',
            borderRadius: '50%'
        }
    },
    active: {
        width: '30px',
        height: '30px',  
    },
    primary: {
        backgroundColor: Color(theme.palette.primary.main).fade(0.65).rgb().string(),
        '& div': {
            backgroundColor: theme.palette.primary.main
        }
    },
    secondary: {
        backgroundColor: Color(theme.palette.secondary.main).fade(0.65).rgb().string(),
        '& div': {
            backgroundColor: theme.palette.secondary.main
        }
    },
    clickable: {
        cursor: 'pointer'
    }
}))
