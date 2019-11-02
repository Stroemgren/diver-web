import React, { ReactNode } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { TypographyProps } from '@material-ui/system'

type Props = {
    children: ReactNode
} & TypographyProps

const Body = (props: Props) => {
    const classes = useStyles()
    const { children, ...rest } = props

    return (
        <Typography variant="body1" className={classes.text} { ...rest }>{children}</Typography>
    )
}

export default Body

const useStyles = makeStyles({
    text: {
       
    }
})
