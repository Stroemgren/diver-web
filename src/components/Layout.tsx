import React, { ReactNode } from 'react'
import Navigation from './Navigation'
import { makeStyles } from '@material-ui/core'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    const { children } = props
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Navigation activeIndex={1} />
            <div style={{ display: 'flex', flexGrow: 1, height: '100%', position: 'relative' }}>
                {children}
            </div>
        </div>
    )
}

export default Layout

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    }
}))
