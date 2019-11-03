import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'

type Props = {
    children: ReactNode
}

const HorizontalSlider = (props: Props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default HorizontalSlider

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        padding: '2px',
        '-webkit-overflow-scrolling': 'touch',
        '&::-webkit-scrollbar': {
            display: 'none'
        },

        '& > *': {
            flex: '0 0 auto'
        }
    }
})
