import React, { ReactNode } from 'react'
import Navigation from './Navigation'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    const { children } = props

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '100%', maxHeight: '100%' }}>
            <Navigation activeIndex={1} />
            <div style={{ display: 'flex', flexGrow: 1, maxHeight: '100%' }}>
                {children}
            </div>
        </div>
    )
}

export default Layout
