import React, { ReactNode } from 'react'
import MapIcon from '@material-ui/icons/MapOutlined'
import ExploreIcon from '@material-ui/icons/ExploreOutlined'
import { makeStyles, Paper } from '@material-ui/core'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { urlSegments } from '../store/router/selectors'
import { shallowEqual } from 'recompose'

type ItemProps = {
    icon: ReactNode
    active: boolean
    onClick: () => void
}

const NavigationItem = (props: ItemProps) => {
    const classes = useStyles()
    const { icon, active, onClick } = props

    return (
        <div onClick={onClick} className={clsx(classes.item, active && classes.itemActive)}>
            {icon}
        </div>
    )
}

type Props = {
    activeIndex: number
}

const Navigation = (props: Props) => {
    const classes = useStyles()
    const { activeIndex } = props
    const dispatch = useDispatch()
    const urlParts = useSelector(urlSegments, shallowEqual)

    return (
        <Paper elevation={1} className={classes.container}>
            <NavigationItem onClick={() => dispatch(push('/explore'))} active={urlParts[0] === 'explore' } icon={<ExploreIcon />}/>
            <NavigationItem onClick={() => dispatch(push('/map'))} active={urlParts[0] === 'map' || urlParts[0] === 'dive-spot' } icon={<MapIcon />}/>
        </Paper>
    )
}

export default Navigation

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 200
    },
    item: {
        cursor: 'pointer',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        boxSizing: 'border-box',
        '& .MuiSvgIcon-root': {
            fontSize: '2.1875rem',
            color: 'rgba(0, 0, 0, 0.35)'
        },
        '&:hover': {
            '& .MuiSvgIcon-root': {
                color: 'rgba(0, 0, 0, 0.45)'
            }
        }
    },
    itemActive: {
        borderLeft: `3px solid ${theme.palette.primary.main}`,
        '& .MuiSvgIcon-root': {
            marginLeft: '-3px',
            color: theme.palette.primary.main
        },
        '&:hover': {
            '& .MuiSvgIcon-root': {
                color: theme.palette.primary.main
            }
        }
    }
}))
