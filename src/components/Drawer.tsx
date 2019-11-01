import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import * as MatDrawer from '@material-ui/core/Drawer'
import { Toolbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Drawer = (props: Props) => {
    const classes = useStyles(props)
    const { isOpen, onClose } = props

    return (
        <MatDrawer.default
            open={isOpen}
            variant="persistent"
            anchor="right"
            classes={{ paper: classes.drawerPaper }}
            PaperProps={{ elevation: 3 }}
        >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => onClose()}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            {props.children}
        </MatDrawer.default>
    )
}

export default Drawer

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        border: 'none',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '380px',
        }
    }
}))