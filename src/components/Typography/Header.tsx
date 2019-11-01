import React, { ReactNode } from 'react'
import { Typography } from '@material-ui/core'
import { TypographyProps } from '@material-ui/core/Typography'

type Props = {
    children: ReactNode
} & TypographyProps

const Header = (props: Props) => {
    const { children, ...rest } = props

    return (
        <Typography variant="h4" component="h1" { ...rest }>{children}</Typography>
    )
}

export default Header
