import React, { ReactNode, useState } from 'react'
import clsx from 'clsx'
import Body from '../Typography/Body'
import { Button, makeStyles } from '@material-ui/core'

type Props = {
    children: ReactNode
}

const Description = (props: Props) => {
    const classes = useStyles()
    const { children } = props
    const [ open, setOpen ] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            {children !== '' &&
                <>
                    <div className={clsx(classes.textContainer, !open && classes.textContainerClosed )}>
                        <Body>{children}</Body>
                    </div>
                    <Button onClick={handleClick} size="small" color="primary" className={classes.button}>{open ? 'View less' : 'View more'}</Button>
                </>
            }
        </>
    )
}

export default Description

const useStyles = makeStyles(theme => ({
    textContainer: {
        marginBottom: theme.spacing(1),
        position: 'relative',
        height: 'auto',
        overflow: 'hidden'
    },
    textContainerClosed: {
        height: '52px',
        overflow: 'hidden',
    },
    button: {
        margin: '0 auto',
        display: 'block',
        textTransform: 'none'
    }
}))
