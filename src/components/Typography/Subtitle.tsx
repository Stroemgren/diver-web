import React, { ReactNode } from 'react'
import { Typography } from '@material-ui/core'
import { TypographyProps } from '@material-ui/core/Typography'

type Props = {
    children: ReactNode
} & TypographyProps

const Subtitle = (props: Props) => {
    const { children, ...rest } = props

    return (
        <Typography variant="h6" {...rest}>{props.children}</Typography>
    )
}

export default Subtitle
