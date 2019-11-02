import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'

type Props = {
    children: ReactNode
}

const Section = (props: Props) => {
    const classes = useStyles()

    return (
        <section className={classes.container}>
            {props.children}
        </section>
    )
}  

export default Section

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.grey[200]}`
    }
}))