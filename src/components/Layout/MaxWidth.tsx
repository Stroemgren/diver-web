import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const MaxWidth = (props: Props) => (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>{ props.children }</div>
)

export default MaxWidth
